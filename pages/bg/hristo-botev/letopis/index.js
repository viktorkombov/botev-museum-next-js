import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import CustomizedTimeLine from '@/components/UI/CustomizedTimeLine';
import Gallery from '@/components/UI/Gallery';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Letopis.module.scss';

import letopis_0_img from '@/assets/uploads/muzey-2.jpg';
import letopis_1_img from '@/assets/uploads/odesa-1.jpg';
import letopis_2_img from '@/assets/uploads/odesa-2.jpg';
import letopis_3_img from '@/assets/uploads/vestnik-duma.jpg';
import letopis_4_img from '@/assets/uploads/vestnik-zname.jpg';
import letopis_5_img from '@/assets/uploads/vestnik-nova-bulgaria.jpg';
import letopis_6_img from '@/assets/uploads/slizaneto-na-chetata.jpg';


import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function Letopis() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Летопис';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        {
            src: letopis_0_img.src,
            title: 'Къщата на Христо Ботев'
        },
        {
            src: letopis_1_img.src,
            title: 'Ботев заминава за Одеса',
        },
        {
            src: letopis_2_img.src,
            title: 'ІІ Одеска мъжка гимназия'
        },
        {
            src: letopis_3_img.src,
            title: 'в. “Дума на българските емигранти”',
        },
        {
            src: letopis_4_img.src,
            title: 'в. “Знаме”',
        },
        {
            src: letopis_5_img.src,
            title: 'в. “Нова България”'
        },
        {
            src: letopis_6_img.src,
            title: 'Ботевата четата слиза край Козлодуй'
        },
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="В музея се съхраняват, опазват и експонират лични вещи, документи, издания, произведения на българското изобразително изкуство и др. материали, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му. "
                image={images[6].src}
                keywords="Музеят на Христо Ботев, Родната къща на Христо Ботев, Музей Ботев"
            />
            <CarouselBootstrap items={[{ src: letopis_0_img.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment >
                            <h2>{pageTitle}</h2>
                            <p> Христо Ботев е роден на 25 декември 1847 г. (н. с. 6 януари 1848 г.) в една
                                от стаите на старото килийно училище, намиращо се до църквата „Св.
                                Богородица”. Той е първородият син в семейството на Ботьо Петков и
                                Ивана Дрянкова.</p>
                            <p><i>„В Тракия, в село Калофер, Пловдивски окръг, се е родил Христо Ботйов
                                Петков, от родители чисто българи и православни. Това се случило на
                                знаменит ден, навръх Рождество Христово, 25 декември 1847 г...По тая
                                причина, че се е родил на Рождество, според българския обичай турили му
                                името Христо, именник на спасителя.”</i></p>
                                <p style={{textAlign: 'right', paddingBottom: '2rem'}}><strong><i>Захари Стоянов, „Христо Ботйов. Опит за биография”</i></strong></p>
                            <CustomizedTimeLine onImageClick={onImageClick} images={images} />
                            <br />
                            <h4>Галерия:</h4>
                            <Fragment>
                                <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                                    <CarouselBootstrap
                                        items={images}
                                        index={imageIndex}
                                        type="gallery"
                                    ></CarouselBootstrap>
                                </ModalBootstrap>
                                <Gallery images={images} onImageClick={onImageClick} />
                            </Fragment>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default Letopis;