import LoginComponent from "@/components/auth/LoginComponent";

export default function Home() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#333', margin: 0, padding: 0 }}>
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3' }}>CloudIndustrie Stitch</div>
                <nav>
                    <a href="#features" style={{ marginRight: '1.5rem', textDecoration: 'none', color: '#666' }}>Fonctionnalités</a>
                    <a href="#contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%)',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.2 }}>
                    La solution tout-en-un pour <span style={{ color: '#0070f3' }}>gérer votre magasin</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
                    Simplifiez votre gestion de stock, suivez vos ventes en temps réel et fidélisez vos clients avec Stitch Pro.
                </p>

                <div style={{ marginBottom: '4rem' }}>
                    <LoginComponent />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Pourquoi choisir Stitch ?</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Feature 1 */}
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #eaeaea', backgroundColor: '#fafafa' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0070f3' }}>📦 Gestion de Stock</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Suivez vos produits en temps réel. Alertes de stock bas, gestion des fournisseurs et inventaire simplifié.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #eaeaea', backgroundColor: '#fafafa' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0070f3' }}>📈 Analyses & Rapports</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Comprenez votre business avec des tableaux de bord clairs. Chiffre d'affaires, produits les plus vendus, et plus.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #eaeaea', backgroundColor: '#fafafa' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0070f3' }}>🤝 CRM Intégré</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Gérez vos clients, historique d'achats et fidélité. Connectez-vous via WhatsApp pour un support direct.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '2rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
                <p>&copy; 2024 CloudIndustrie Stitch. Tous droits réservés.</p>
            </footer>
        </div>
    );
}