"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Module = 'DASHBOARD' | 'CRM' | 'COMMERCE' | 'STOCK' | 'SETTINGS';

export default function ERPLayout({ children }: { children: React.ReactNode }) {
    const [activeModule, setActiveModule] = useState<Module>('DASHBOARD');
    const pathname = usePathname();

    const modules = [
        { id: 'DASHBOARD', label: 'Accueil', icon: '🏠', href: '/dashboard' },
        { id: 'CRM', label: 'Tiers (CRM)', icon: '👥', href: '/dashboard/crm' },
        { id: 'COMMERCE', label: 'Commerce', icon: '💰', href: '/dashboard/commerce' },
        { id: 'STOCK', label: 'Produits/Stock', icon: '📦', href: '/dashboard/stock' },
        { id: 'SETTINGS', label: 'Configuration', icon: '⚙️', href: '/admin/integrations' },
    ];

    const sidebarItems: Record<Module, { label: string; href: string }[]> = {
        DASHBOARD: [
            { label: 'Vue d\'ensemble', href: '/dashboard' },
            { label: 'Météo du business', href: '/dashboard/weather' },
        ],
        CRM: [
            { label: 'Nouveau Tiers', href: '/dashboard/crm/new' },
            { label: 'Liste Clients', href: '/dashboard/crm/customers' },
            { label: 'Liste Prospects', href: '/dashboard/crm/prospects' },
            { label: 'Fournisseurs', href: '/dashboard/crm/suppliers' },
        ],
        COMMERCE: [
            { label: 'Nouvelle Commande', href: '/dashboard/commerce/orders/new' },
            { label: 'Commandes Clients', href: '/dashboard/commerce/orders' },
            { label: 'Factures', href: '/dashboard/commerce/invoices' },
            { label: 'Devis', href: '/dashboard/commerce/quotes' },
        ],
        STOCK: [
            { label: 'Nouveau Produit', href: '/dashboard/stock/new' },
            { label: 'Liste Produits', href: '/dashboard/stock/list' },
            { label: 'Entrepôts', href: '/dashboard/stock/warehouses' },
            { label: 'Mouvements', href: '/dashboard/stock/movements' },
        ],
        SETTINGS: [
            { label: 'Intégrations API', href: '/admin/integrations' },
            { label: 'Utilisateurs', href: '/admin/users' },
            { label: 'Sécurité', href: '/admin/security' },
        ]
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
            {/* Top Navigation Bar (Modules) */}
            <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '0 1rem', display: 'flex', alignItems: 'center', height: '60px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#3498db' }}>☁️</span> Stitch ERP
                </div>
                <nav style={{ display: 'flex', gap: '0.5rem', height: '100%' }}>
                    {modules.map((mod) => (
                        <Link
                            key={mod.id}
                            href={mod.href}
                            onClick={() => setActiveModule(mod.id as Module)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 1rem',
                                color: activeModule === mod.id ? 'white' : '#bdc3c7',
                                textDecoration: 'none',
                                backgroundColor: activeModule === mod.id ? '#34495e' : 'transparent',
                                borderBottom: activeModule === mod.id ? '3px solid #3498db' : '3px solid transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            <span style={{ marginRight: '0.5rem' }}>{mod.icon}</span>
                            {mod.label}
                        </Link>
                    ))}
                </nav>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input type="text" placeholder="Rechercher..." style={{ padding: '0.4rem', borderRadius: '4px', border: 'none', backgroundColor: '#34495e', color: 'white' }} />
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e74c3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>JD</div>
                </div>
            </header>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Left Sidebar (Contextual) */}
                <aside style={{ width: '240px', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid #dee2e6', fontWeight: 'bold', color: '#6c757d', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                        Menu {modules.find(m => m.id === activeModule)?.label}
                    </div>
                    <nav style={{ padding: '1rem 0' }}>
                        {sidebarItems[activeModule].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                style={{
                                    display: 'block',
                                    padding: '0.75rem 1.5rem',
                                    color: pathname === item.href ? '#0070f3' : '#495057',
                                    textDecoration: 'none',
                                    backgroundColor: pathname === item.href ? '#e9ecef' : 'transparent',
                                    borderLeft: pathname === item.href ? '3px solid #0070f3' : '3px solid transparent'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main style={{ flex: 1, overflow: 'auto', backgroundColor: '#f1f5f9', padding: '2rem' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
