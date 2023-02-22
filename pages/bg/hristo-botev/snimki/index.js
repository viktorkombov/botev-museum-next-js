import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Delimiter from '@/components/UI/Delimiter';
import Gallery from '@/components/UI/Gallery';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Photographs.module.scss';

import snimka_0_img from '@/assets/uploads/fotografia-1.png';
import snimka_1_img from '@/assets/uploads/fotografia-2.jpg';
import snimka_2_img from '@/assets/uploads/fotografia-3.png';
import snimka_3_img from '@/assets/uploads/fotografia-4.jpg';

import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function Photographs() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Снимки на Ботев';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: snimka_0_img.src, title: "Христо Ботев, май 1875 г., Букурещ." },
        { src: snimka_1_img.src, title: "Христо Ботев с българи ученици в Одеса, краят на април 1865 г." },
        { src: snimka_2_img.src, title: "Христо Ботев, Никола Славков и Иван Драсов, септември 1875 г., Букурещ" },
        { src: snimka_3_img.src, title: "Христо Ботев и братята му Стефан, Кирил и Боян, април или май 1876 г." }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Най-известната фотография на Ботев е правена в ателието на фотографа Тома Хитров. От нея са запазени най-много копия."
                image={images[3].src}
                keywords="снимки на ботев, снимки на христо ботев, снимка на ботев"
            />
            <CarouselBootstrap items={[{ src: images[3].src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p><strong>Най-Известната снимка</strong></p>
                                <FloatingImage src={images[0].src} title={images[0].title} onClick={() => onImageClick(0)} />
                                <p>Най-известната фотография на Ботев е правена в ателието на фотографа Тома Хитров. От нея са запазени най-много копия.</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto', padding: '1rem 0', position: 'relative' }}>
                                <p><strong>Най-ранната снимка</strong></p>
                                <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                                <p>Първата, най-малко известна фотография на Христо Ботев.</p>
                                <p>Ботев е първият, седнал в дясно.</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto', padding: '1rem 0', position: 'relative' }}>
                                <p><strong>Христо Ботев със сподвижници</strong></p>
                                <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                                <p>Христо Ботев, Никола Славков и Иван Драсов, септември 1875 г., Букурещ</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto', paddingTop: '1rem', position: 'relative' }}>
                                <p><strong>Последната снимка</strong></p>
                                <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
                                <p>Христо Ботев и братята му Стефан, Кирил и Боян, април или май 1876 г.</p>
                                <p>Toва е последната снимка на Христо Ботев.</p>
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
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>
    );
}

export default Photographs;