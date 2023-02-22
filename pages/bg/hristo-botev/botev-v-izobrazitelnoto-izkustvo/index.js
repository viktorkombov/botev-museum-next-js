import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Paintings.module.scss';
import kartini_0_img from '@/assets/uploads/grav-laipzig.jpg';
import kartini_1_img from '@/assets/uploads/v-mehanata.jpg';
import kartini_2_img from '@/assets/uploads/slizaneto-na-chetata.jpg';
import kartini_3_img from '@/assets/uploads/gyudzhenov-botev.jpg';
import kartini_4_img from '@/assets/uploads/gechev-mramor.jpg';
import kartini_5_img from '@/assets/uploads/gerasimov-med.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function Paintings() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Ботев в изобразителното изкуство';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: kartini_0_img.src, title: 'Неизвестен автор, Христо Ботев, гравюра, 1888 г., Лайпциг'},
        { src: kartini_1_img.src, title: 'Никола Вълчев, В механата, 1957 г., м.б., платно' },
        { src: kartini_2_img.src, title: 'Димитър Гюдженов, Слизането на Ботевата чета при Козлодуй, 1975 г., м.б., платно'},
        { src: kartini_3_img.src, title: 'Димитър Гюдженов, Портрет на Христо Ботев, 1949 г., м.б., платно'},
        { src: kartini_4_img.src, title: 'Васил Гачев, Христо Ботев, мрамор, 1959 г.'},
        { src: kartini_5_img.src, title: 'Георги Герасимов, Вдъхновеният поет, медна гравюра, 1949 г.'},
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="В Национален музей „Христо Ботев” се съхраняват едни от най-известните произведения на българските творци, пресъздали образа на Ботев..."
                image={images[1].src}
                keywords="Ботев в изобразителното изкуство, ботев картини, ботев портрет"
            />
            <CarouselBootstrap items={[{src: images[1].src, title: pageTitle}]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <p>Образът на Христо Ботев е претворяван от почти всички известни български художници – живописци, графици, скулптури, плакатисти, карикатуристи. Всеки от тях се е опитвал, както се е изразил Стоян Заимов, „да характеризира Ботева с най-ярки и гъсти краски”.</p>
                            <p>В Национален музей „Христо Ботев” се съхраняват едни от най-известните произведения на българските творци, пресъздали образа на Ботев като: Димитър Гюдженов, Златю Бояджиев, Никола Вълчев, Александър Поплилов, Йоан Левиев, Георги Герасимов, Стоимен Стоилов, Васил Гачев и др. Част от тях са експонирани в Картинната галерия към музея и в постоянната му експозиция.</p>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <p><strong>Неизвестен автор, Христо Ботев, гравюра, 1888 г., Лайпциг</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                                <p><strong>Никола Вълчев, В механата, 1957 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                                <p><strong>Димитър Гюдженов, Слизането на Ботевата чета при Козлодуй, 1975 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
                                <p><strong>Димитър Гюдженов, Портрет на Христо Ботев, 1949 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[4].src} onClick={() => onImageClick(4)} />
                                <p><strong>Васил Гачев, Христо Ботев, мрамор, 1959 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src={images[5].src} onClick={() => onImageClick(5)} />
                                <p><strong>Георги Герасимов, Вдъхновеният поет, медна гравюра, 1949 г.</strong></p>
                            </div>
                        </Fragment>
                        <Fragment>
                            <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                                <CarouselBootstrap
                                    items={images}
                                    index={imageIndex}
                                    type="gallery"
                                ></CarouselBootstrap>
                            </ModalBootstrap>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle}/>
            </Post>
        </Fragment>

    );
}

export default Paintings;