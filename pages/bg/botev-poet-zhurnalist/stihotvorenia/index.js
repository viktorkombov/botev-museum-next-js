import { Fragment } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import AccordionList from '@/components/UI/AccordionList';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { poems } from '@/utils/poems';
import { botevPoetPublisherCardsContent } from '@/utils/data';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import poet_1_img from '@/assets/uploads/proshtalno-pismo.png';
import SEO from '@/components/SEO/SEO';

function BotevPoems() {
    const pageTitle = 'Ботеви стихотворения';

    const images = [
        { src: poet_1_img.src, title: pageTitle },
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="През краткия си житейски път – 28 години - Христо Ботев написва 20 стихотворения"
                image={images[0].src}
                keywords="Ботев поет, ботев публицист, ботев вестници, ботев стихотворения"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Ботеви стихотворения</h2>
                            <AccordionList records={poems}/>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={botevPoetPublisherCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default BotevPoems;