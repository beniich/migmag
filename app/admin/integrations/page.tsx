"use client";

import React, { useState } from 'react';

export default function IntegrationsPage() {
    const [keys, setKeys] = useState({
        googleClientId: '',
        deepSeekApiKey: '',
        whatsappToken: '',
        openaiApiKey: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeys({ ...keys, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        alert('Configuration sauvegardée (Simulation)');
        // In real app, this would save to DB or .env via API
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#2c3e50' }}>Hub d'Intégrations API</h1>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <p style={{ marginBottom: '2rem', color: '#666' }}>
                    Gérez ici les clés API pour connecter Stitch ERP à vos services externes préférés.
                </p>

                {/* Google Integration */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🌐</span> Google Cloud Platform
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Client ID (OAuth 2.0)</label>
                        <input
                            type="text"
                            name="googleClientId"
                            value={keys.googleClientId}
                            onChange={handleChange}
                            placeholder="ex: 123456789-abc...apps.googleusercontent.com"
                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ced4da', width: '100%' }}
                        />
                        <p style={{ fontSize: '0.8rem', color: '#888' }}>Utilisé pour "Se connecter avec Google" et la synchro Calendar.</p>
                    </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '2rem 0' }} />

                {/* DeepSeek AI Integration */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🧠</span> DeepSeek AI
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>API Key</label>
                        <input
                            type="password"
                            name="deepSeekApiKey"
                            value={keys.deepSeekApiKey}
                            onChange={handleChange}
                            placeholder="sk-..."
                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ced4da', width: '100%' }}
                        />
                        <p style={{ fontSize: '0.8rem', color: '#888' }}>Permet l'analyse intelligente de vos données de vente et la génération de contenu.</p>
                    </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '2rem 0' }} />

                {/* WhatsApp Integration */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>💬</span> WhatsApp Business API
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '500', fontSize: '0.9rem' }}>Access Token</label>
                        <input
                            type="password"
                            name="whatsappToken"
                            value={keys.whatsappToken}
                            onChange={handleChange}
                            placeholder="EAAG..."
                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ced4da', width: '100%' }}
                        />
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    style={{
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        padding: '1rem 2rem',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        marginTop: '1rem'
                    }}
                >
                    Enregistrer les configurations
                </button>
            </div>
        </div>
    );
}
