import { Fragment } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { museumCardsContent } from '@/utils/data';
import welcome_1_img from '@/assets/uploads/botev1.jpg';
import SEO from '@/components/SEO/SEO';

function Welcome() {
    const pageTitle = 'Приветстваме ви в нашия сайт';

    const images = [
        { src: welcome_1_img.src, title: pageTitle }
    ];

    return (
        <Fragment>
            <SEO
                title={'Добре дошли в музея на Христо Ботев'}
                description="Приветстваме ви в нашия сайт!"
                image={images[0].src}
                keywords="музей ботев"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', pageTitle: 'Добре дошли' }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>Добре дошли в сайта на Музей &quot;Христо Ботев&quot;, гр. Калофер!</h2>
                            <div style={{ paddingBottom: '2rem', position: 'relative' }}>
                                {/* <p><strong>Добре дошли!</strong></p> */}
                                <p>Тук ще намерите исторически данни за патрона на музея - гениален поет, публицист, мислител, хуманист, револиционер и войвода.</p>
                                <p><i>Актуална информация за музейните обекти и постоянните експозиции, за дейността на музея, за предстоящи събития, за историята и забележителностите на град Калофер и пленяващата му природа. Вярваме, че ще ви бъдем полезни!</i></p>
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={museumCardsContent} currentPageTitle={'Даскал Ботево училище'} />
            </Post>
        </Fragment>

    );
}

export default Welcome;