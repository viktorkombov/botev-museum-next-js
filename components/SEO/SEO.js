import { baseUrl } from '@/utils/data';
import Head from 'next/head';
export default function SEO({ title, keywords, description, image}) {
    title = title + ' | Национален музей “Христо Ботев” - гр. Калофер';
    image = image.startsWith('/') ? 'https://muzeibotev.com' + image : 'https://muzeibotev.com/' + image;
    return (
        <Head>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={`Христо Ботев, Христо, Ботев, Калофер, ${keywords}, къща-музей Христо Ботев, къща музей Христо Ботев, къщата на Христо Ботев, музей Христо Ботев, Национален музей Христо Ботев, поетът революционер, поета революционер, поет, революционер, Ботьов, Априлско въстане, революция, въстание, войвода, чета, Четата на Христо Ботев, четници, освобождение, бунт, бунтовник, публицист`} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            { /* End Twitter tags */}
        </Head>
    )
}