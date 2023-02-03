import Layout from '@/components/Layouts/layout/layout'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
