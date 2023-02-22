import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';

import houseMuseumIMG from '@/assets/uploads/muzey-8.jpg';
import SEO from '@/components/SEO/SEO';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { aboutUsCardsContent } from '@/utils/data';

import izdania_0_img from '@/assets/uploads/broshura_muzei-1.png';
import izdania_1_img from '@/assets/uploads/broshura_kalofer-1.png';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function Publications() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Издания';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: izdania_0_img.src },
        { src: izdania_1_img.src }
    ];
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Издания на Музей „Христо Ботев”"
                image={izdania_0_img.src}
                keywords="музей христо ботев издания"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>Издания</h2>
                            <p>Музеят е издател на рекламно-информационни брошури, които се разпространяват на щанда на музея.</p>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[0].src} title={images[0].title} onClick={() => onImageClick(0)} />
                                <p><strong>„Национален музей „Христо Ботев”</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                                <p><strong>„Калофер. Градът на Ботев – твърдина на българщината”</strong></p>
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
                <PostAsideWrapper cardsData={aboutUsCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default Publications;