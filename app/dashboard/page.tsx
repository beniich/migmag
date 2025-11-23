export default function Dashboard() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '3rem', paddingLeft: '1rem' }}>Stitch Pro</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="#" style={{ padding: '0.75rem 1rem', backgroundColor: '#334155', borderRadius: '8px', textDecoration: 'none', color: 'white' }}>📊 Tableau de bord</a>
                    <a href="#" style={{ padding: '0.75rem 1rem', textDecoration: 'none', color: '#94a3b8' }}>📦 Stocks</a>
                    <a href="#" style={{ padding: '0.75rem 1rem', textDecoration: 'none', color: '#94a3b8' }}>🛒 Commandes</a>
                    <a href="#" style={{ padding: '0.75rem 1rem', textDecoration: 'none', color: '#94a3b8' }}>👥 Clients</a>
                    <a href="#" style={{ padding: '0.75rem 1rem', textDecoration: 'none', color: '#94a3b8' }}>⚙️ Paramètres</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, backgroundColor: '#f1f5f9', padding: '2rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>Tableau de bord</h1>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span style={{ color: '#64748b' }}>Bienvenue, <strong>Admin</strong></span>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Chiffre d'affaires (Mois)</div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>12 450 €</div>
                        <div style={{ color: '#10b981', fontSize: '0.875rem', marginTop: '0.5rem' }}>+15% vs mois dernier</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Commandes en cours</div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>24</div>
                        <div style={{ color: '#f59e0b', fontSize: '0.875rem', marginTop: '0.5rem' }}>5 à traiter</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Nouveaux Clients</div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>18</div>
                        <div style={{ color: '#10b981', fontSize: '0.875rem', marginTop: '0.5rem' }}>+3 cette semaine</div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>Activité Récente</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <th style={{ padding: '1rem 0', color: '#64748b', fontWeight: '600' }}>Commande</th>
                                <th style={{ padding: '1rem 0', color: '#64748b', fontWeight: '600' }}>Client</th>
                                <th style={{ padding: '1rem 0', color: '#64748b', fontWeight: '600' }}>Montant</th>
                                <th style={{ padding: '1rem 0', color: '#64748b', fontWeight: '600' }}>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1rem 0' }}>#CMD-2024-001</td>
                                <td style={{ padding: '1rem 0' }}>Jean Dupont</td>
                                <td style={{ padding: '1rem 0' }}>150.00 €</td>
                                <td style={{ padding: '1rem 0' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>Complété</span></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1rem 0' }}>#CMD-2024-002</td>
                                <td style={{ padding: '1rem 0' }}>Marie Martin</td>
                                <td style={{ padding: '1rem 0' }}>85.50 €</td>
                                <td style={{ padding: '1rem 0' }}><span style={{ backgroundColor: '#fef9c3', color: '#854d0e', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>En cours</span></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 0' }}>#CMD-2024-003</td>
                                <td style={{ padding: '1rem 0' }}>Pierre Durand</td>
                                <td style={{ padding: '1rem 0' }}>210.00 €</td>
                                <td style={{ padding: '1rem 0' }}><span style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>En attente</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
