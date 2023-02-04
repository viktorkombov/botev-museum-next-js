import ErrorBoundary from '@/components/ErrorBoundaries/ErrorBoundary';
import Layout from '@/components/Layouts/layout/layout'
import { LangContext } from '@/contexts/lang-context';
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {

  return (
    <ErrorBoundary>
      <LangContext.Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LangContext.Provider>
    </ErrorBoundary>
  );
}
