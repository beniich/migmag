import LoginComponent from "@/components/auth/LoginComponent";

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ margin: 0, lineHeight: 1.15, fontSize: '4rem', textAlign: 'center' }}>
                Bienvenue sur <a href="https://cloudindustrie.com" style={{ color: '#0070f3', textDecoration: 'none' }}>CloudIndustrie Stitch</a>
            </h1>

            <p style={{ textAlign: 'center', lineHeight: 1.5, fontSize: '1.5rem', margin: '2rem 0' }}>
                Plateforme de gestion de magasin
            </p>

            <LoginComponent />
        </main>
    );
}