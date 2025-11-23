"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function LoginComponent() {
    const handleWhatsApp = () => {
        // Replace with actual phone number if available, or leave generic
        window.open("https://wa.me/?text=Bonjour,%20je%20souhaite%20plus%20d'informations", "_blank");
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            gap: '1rem',
            border: '1px solid #eaeaea',
            borderRadius: '10px',
            maxWidth: '400px',
            margin: '2rem auto',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'white'
        }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Connexion</h2>

            <button
                onClick={() => signIn("linkedin")}
                style={{
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#0077b5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Se connecter avec LinkedIn
            </button>

            <button
                onClick={() => signIn("facebook")}
                style={{
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#1877f2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Se connecter avec Facebook
            </button>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#ddd', margin: '1rem 0' }}></div>

            <button
                onClick={handleWhatsApp}
                style={{
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Nous contacter sur WhatsApp
            </button>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#ddd', margin: '1rem 0' }}></div>

            <a
                href="/dashboard"
                style={{
                    display: 'block',
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#64748b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                }}
            >
                Mode Démo (Vision)
            </a>
        </div>
    );
}
