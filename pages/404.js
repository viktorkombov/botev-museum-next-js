// 404.js
import Link from 'next/link'

export default function FourOhFour() {
    const styles = {
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    }
    return <>
        <div style={styles}>
            <h1>404 - Page Not Found</h1>
            <h2>Страницата не е открита</h2>
            <Link href="/">
                <span style={{ display: 'block', color: '#5799ef', paddingTop: '2rem' }}>
                    Go back home
                </span>
                <span style={{ display: 'block', color: '#5799ef' }}>
                    Върни се в началото
                </span>
            </Link>
        </div>
    </>
}