\"use client\";

import { useState } from \"react\";

export default function ContactForm() {
    const [name, setName] = useState(\"\");
    const [email, setEmail] = useState(\"\");
    const [subject, setSubject] = useState(\"\");
    const [message, setMessage] = useState(\"\");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { ok: boolean, msg: string }

    async function onSubmit(e) {
        e.preventDefault();
        setStatus(null);
        if (!name || !email || !message) {
            setStatus({ ok: false, msg: \"Veuillez renseigner nom, email et message.\" });
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(\"/api/contact\", {
                method: \"POST\",
                headers: { \"content-type\": \"application/json\" },
                body: JSON.stringify({ name, email, subject, message }),
            });
            const data = await res.json();
            if (data?.ok) {
                setStatus({ ok: true, msg: \"Message envoyé avec succès.\" });
                setName(\"\");
                setEmail(\"\");
                setSubject(\"\");
                setMessage(\"\");
            } else {
                setStatus({ ok: false, msg: data?.error || \"Échec de l’envoi du message.\" });
            }
        } catch {
            setStatus({ ok: false, msg: \"Échec de l’envoi du message.\" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className=\"row g-xxl-8 g-xl-6 g-lg-4 g-4\">
                <div className=\"col-lg-6\">
                    <input
                        type=\"text\"
                        name=\"name\"
                        placeholder=\"Nom\"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className=\"col-lg-6\">
                    <input
                        type=\"email\"
                        name=\"email\"
                        placeholder=\"Adresse email\"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=\"col-lg-12\">
                    <select
                        name=\"subject\"
                        className=\"form-select\"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value=\"\">Sujet</option>
                        <option value=\"Demande de devis\">Demande de devis</option>
                        <option value=\"Autre\">Autre</option>
                    </select>
                </div>
                <div className=\"col-lg-12\">
                    <textarea
                        name=\"message\"
                        rows={5}
                        placeholder=\"Votre message\"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                {status && (
                    <div className=\"col-lg-12\">
                        <div className={status.ok ? \"text-success\" : \"text-danger\"}>
                            {status.msg}
                        </div>
                    </div>
                )}
                <div className=\"col-lg-5\">
                    <button type=\"submit\" className=\"submit-btn\" disabled={loading}>
                        {loading ? \"Envoi...\" : \"Envoyer le message\"}
                    </button>
                </div>
            </div>
        </form>
    );
}


