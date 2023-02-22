import { Fragment } from 'react';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { aboutUsCardsContent, baseUrl } from '@/utils/data';
import houseMuseumIMG from '@/assets/uploads/muzey-5.jpg';
import SEO from '@/components/SEO/SEO';

function BuyersProfile() {
    const pageTitle = 'Профил на купувача';
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Профил на купувача - Музей „Христо Ботев”"
                image={houseMuseumIMG.src}
                keywords="музей христо ботев профил на купувача"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                    <div style={{ paddingBottom: '1rem' }}>
                        <p><strong>ГОДИШЕН ОТЧЕТ ЗА  ДЕЙНОСТТА НА НМ &quot;ХРИСТО БОТЕВ&quot;, КАЛОФЕР ЗА 2016 Г. (<a style={{color: 'blue'}} href={`${baseUrl}uploads/9-Otchet_za_deinostta2016.pdf`}>ТУК</a>)</strong></p>
                    </div>
                    {/* <div>
                        <p><strong>ГОДИШЕН ОТЧЕТ ЗА  ДЕЙНОСТТА НА НМ &quot;ХРИСТО БОТЕВ&quot;, КАЛОФЕР ЗА 2017 Г. (<a style={{color: 'blue'}} href={`${'http://localhost:3000/'}uploads/zap_ZOP.pdf`}>ТУК</a>)</strong></p>
                    </div> */}
                </PostBody>
                <PostAsideWrapper cardsData={aboutUsCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default BuyersProfile;