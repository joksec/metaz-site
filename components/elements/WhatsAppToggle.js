'use client'
import { useState } from "react"

export default function WhatsAppToggle() {
    const [open, setOpen] = useState(false)
    const phone = "33678330265" // +33 6 73 97 07 54
    const text = encodeURIComponent("Bonjour MetaZ, j'aimerais avoir des informations.")
    const href = `https://wa.me/${phone}?text=${text}`

    return (
        <div style={{ position: "fixed", left: 16, bottom: 16, zIndex: 1000 }}>
            {open && (
                <div
                    style={{
                        marginBottom: 8,
                        background: "#1f2129",
                        border: "1px solid #2c2f38",
                        borderRadius: 8,
                        padding: 12,
                        minWidth: 220,
                        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
                    }}
                >
                    <div className="d-flex align-items-center gap-2">
                        <svg width={20} height={20} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.11 17.23c-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.52-.44-.45-.62-.45-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.83.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.53-.32Z" fill="#25D366"/>
                            <path d="M16.01 3.2C9.17 3.2 3.6 8.77 3.6 15.6c0 2.2.6 4.26 1.64 6.01L3.2 28.8l7.36-1.96c1.68.92 3.61 1.44 5.66 1.44 6.83 0 12.4-5.57 12.4-12.4S22.84 3.2 16.01 3.2Zm0 22.4c-1.87 0-3.6-.56-5.05-1.53l-.36-.23-4.37 1.16 1.17-4.26-.24-.38A9.771 9.771 0 0 1 6.24 15.6c0-5.37 4.4-9.76 9.77-9.76s9.77 4.39 9.77 9.76-4.4 9.76-9.77 9.76Z" fill="#25D366"/>
                        </svg>
                        <div>
                            <div className="white-clr">Besoin d’aide ?</div>
                            <div className="pra-clr fs14">Discutez avec nous sur WhatsApp</div>
                        </div>
                    </div>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-center mt-3"
                        style={{
                            background: "#25D366",
                            color: "#000",
                            borderRadius: 6,
                            padding: "10px 12px",
                            fontWeight: 600,
                            display: "inline-flex",
                        }}
                    >
                        Ouvrir WhatsApp
                    </a>
                </div>
            )}
            <button
                aria-label="WhatsApp"
                onClick={() => setOpen(!open)}
                className="d-center"
                style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: open ? "#25D366" : "#25D366",
                    border: "1px solid rgba(255,255,255,.1)",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(0,0,0,.25)",
                }}
            >
                <svg width={26} height={26} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.11 17.23c-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.52-.44-.45-.62-.45-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.83.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.53-.32Z" fill="#fff"/>
                    <path d="M16.01 3.2C9.17 3.2 3.6 8.77 3.6 15.6c0 2.2.6 4.26 1.64 6.01L3.2 28.8l7.36-1.96c1.68.92 3.61 1.44 5.66 1.44 6.83 0 12.4-5.57 12.4-12.4S22.84 3.2 16.01 3.2Zm0 22.4c-1.87 0-3.6-.56-5.05-1.53l-.36-.23-4.37 1.16 1.17-4.26-.24-.38A9.771 9.771 0 0 1 6.24 15.6c0-5.37 4.4-9.76 9.77-9.76s9.77 4.39 9.77 9.76-4.4 9.76-9.77 9.76Z" fill="#fff"/>
                </svg>
            </button>
        </div>
    )
}


