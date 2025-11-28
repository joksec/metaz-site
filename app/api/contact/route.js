import nodemailer from 'nodemailer';

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
            return new Response(JSON.stringify({ ok: false, error: 'Veuillez renseigner nom, email et message.' }), {
                status: 400,
                headers: { 'content-type': 'application/json' },
            });
        }

        const host = process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com';
        const port = Number(process.env.BREVO_SMTP_PORT || 587);
        const user = process.env.BREVO_SMTP_USER;
        const pass = process.env.BREVO_SMTP_KEY || process.env.BREVO_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL || 'contact@metaz.fr';
        const fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@metaz.fr';
        const fromName = process.env.CONTACT_FROM_NAME || 'MetaZ Website';

        if (!user || !pass) {
            return new Response(JSON.stringify({ ok: false, error: 'Configuration SMTP manquante.' }), {
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

        await transporter.sendMail({
            from: { name: fromName, address: fromEmail },
            to,
            subject: `[Contact] ${subject}`,
            html,
            replyTo: email,
        });

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ ok: false, error: 'Échec de l’envoi du message.' }), {
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


