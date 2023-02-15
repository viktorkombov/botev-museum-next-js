import ErrorBoundary from '@/components/ErrorBoundaries/ErrorBoundary';
import Layout from '@/components/Layouts/layout/layout'
import '@/styles/globals.scss'
import { Provider } from 'next-auth/client';

export default function App({ Component, pageProps }) {

  return (
    <ErrorBoundary>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
}
