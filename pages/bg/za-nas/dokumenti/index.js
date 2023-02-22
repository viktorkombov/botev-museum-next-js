import { Fragment } from 'react';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { aboutUsCardsContent, baseUrl } from '@/utils/data';
import houseMuseumIMG from '@/assets/uploads/muzey-6.jpg';
import SEO from '@/components/SEO/SEO';

function Docs() {
    const pageTitle = 'Документи';
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Документи - Музей „Христо Ботев”"
                image={houseMuseumIMG.src}
                keywords="музей христо ботев документи"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                    <div style={{ paddingBottom: '1rem' }}>
                        <p><strong>ГОДИШЕН ОТЧЕТ ЗА  ДЕЙНОСТТА НА НМ &quot;ХРИСТО БОТЕВ&quot;, КАЛОФЕР ЗА 2022 Г. (<a style={{ color: 'blue' }} href={`${baseUrl}uploads/otchet-2023.pdf`}>ТУК</a>)</strong></p>
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <p><strong>ГПРАВИЛНИК ЗА УСТРОЙСТВОТО И ДЕЙНОСТТА НА МУЗЕЙ &quot;ХРИСТО БОТЕВ&quot; - КАЛОФЕР
                            (<a style={{ color: 'blue' }} href={`${baseUrl}uploads/pravilnik.docx`}>ТУК</a>)</strong></p>
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

export default Docs;