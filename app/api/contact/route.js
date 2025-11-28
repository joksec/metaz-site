import nodemailer from 'nodemailer';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const contentType = request.headers.get('content-type') || '';
        let data;
        if (contentType.includes('application/json')) {
            data = await request.json();
        } else {
            const form = await request.formData();
            data = {
                name: form.get('name') || '',
                email: form.get('email') || '',
                subject: form.get('subject') || '',
                message: form.get('message') || '',
            };
        }

        const name = (data.name || '').toString().trim();
        const email = (data.email || '').toString().trim();
        const subject = (data.subject || 'Message du formulaire de contact').toString().trim();
        const message = (data.message || '').toString().trim();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ ok: false, error: 'Veuillez renseigner nom, email et message.', code: 'validation_error' }), {
                status: 400,
                headers: { 'content-type': 'application/json' },
            });
        }

        const host = process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com';
        const port = Number(process.env.BREVO_SMTP_PORT || 587);
        const user = process.env.BREVO_SMTP_USER;
        const pass = process.env.BREVO_SMTP_KEY || process.env.BREVO_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL || 'contact@metaz.fr';
        const fromEmail = process.env.CONTACT_FROM_EMAIL || user;
        const fromName = process.env.CONTACT_FROM_NAME || 'MetaZ Website';

        if (!user || !pass) {
            return new Response(JSON.stringify({ ok: false, error: 'Configuration SMTP manquante.', code: 'smtp_config_missing' }), {
                status: 500,
                headers: { 'content-type': 'application/json' },
            });
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: false,
            auth: { user, pass },
        });

        try {
            await transporter.verify();
        } catch (e) {
            console.error('SMTP verify failed', e);
            return new Response(JSON.stringify({ ok: false, error: 'Connexion SMTP échouée.', code: 'smtp_verify_failed' }), {
                status: 500,
                headers: { 'content-type': 'application/json' },
            });
        }

        const html = `
            <div>
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Sujet:</strong> ${escapeHtml(subject)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\\n/g, '<br/>')}</p>
            </div>
        `;

        try {
            await transporter.sendMail({
                from: { name: fromName, address: fromEmail },
                to,
                subject: `[Contact] ${subject}`,
                html,
                replyTo: email,
            });
        } catch (e) {
            console.error('sendMail failed', e);
            return new Response(JSON.stringify({ ok: false, error: "Échec de l’envoi du message.", code: 'smtp_send_failed' }), {
                status: 500,
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        });
    } catch (error) {
        console.error('Contact API unexpected error', error);
        return new Response(JSON.stringify({ ok: false, error: 'Échec de l’envoi du message.', code: 'internal_error' }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        });
    }
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
        switch (m) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#039;';
            default: return m;
        }
    });
}


