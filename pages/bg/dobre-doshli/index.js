import { Fragment } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { museumCardsContent } from '@/utils/data';


import classes from './Welcome.module.scss';

function Welcome() {
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: "https://static.dir.bg/uploads/images/2019/01/08/1633107/768x.jpg?_=1546936270", title: 'Приветстваме ви нашия сайт' }]}></CarouselBootstrap>
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
                <PostAsideWrapper cardsData={museumCardsContent} currentPageTitle={'Даскал Ботево училище'}/>
            </Post>
        </Fragment>

    );
}

export default Welcome;