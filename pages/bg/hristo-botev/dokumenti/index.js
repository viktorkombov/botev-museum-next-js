import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Documents.module.scss';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

import dokumenti_0_img from '@/assets/uploads/do-grudov-1.png';
import dokumenti_1_img from '@/assets/uploads/do-grudov-2.png';
import dokumenti_2_img from '@/assets/uploads/ostavka.png';
import dokumenti_3_img from '@/assets/uploads/proshtalno-pismo.png';
import SEO from '@/components/SEO/SEO';

function Dokumenti() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Документи';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: dokumenti_0_img.src, title: 'Писмо на Христо Ботев до Грудов, Кавалджиев и Странски, 17 май 1876 г, парахода „Радецки' },
        { src: dokumenti_1_img.src, title: 'Писмо на Христо Ботев до Грудов, Кавалджиев и Странски, 17 май 1876 г, парахода „Радецки”' },
        { src: dokumenti_2_img.src, title: 'Оставката на Христо Ботев от БРК в Букурещ, 30 септември 1875 г., Букурещ' },
        { src: dokumenti_3_img.src, title: 'Прощалното писмо на Христо Ботев до семейството му, 17 май 1876 г., парахода „Радецки”' }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Документалното наследство на Христо Ботев е една от най-съществените части на цялостното му творчество. То е запазено частично и е достигнало до нас в сравнително малък обем..."
                image={images[2].src}
                keywords="Документално наследство на Христо Ботев, ботев документи"
            />
            <CarouselBootstrap items={[{src: images[2].src, title: pageTitle}]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Документи</h2>
                            <p>Документалното наследство на Христо Ботев е една от най-съществените части на цялостното му творчество. То е запазено частично и е достигнало до нас в сравнително малък обем – 120 единици. В тях се включват оригинални документи (писма, телеграми, посвещения, протоколи, джобен бележник и др.), преписи (или чернови), обнародвани текстове, чиито оригинали са неизвестни и др., писани от Христо Ботев или отправени до него.</p>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <p><strong>Писмо на Христо Ботев до Грудов, Кавалджиев и Странски, 17 май 1876 г, парахода „Радецки”</strong></p>
                                <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                            </div>
                            <div style={{ overflow: 'auto', padding: '1rem 0', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <p><strong>Оставката на Христо Ботев от БРК в Букурещ, 30 септември 1875 г., Букурещ</strong></p>
                                <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                            </div>
                            <div style={{ overflow: 'auto', padding: '1rem 0', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <p><strong>Прощалното писмо на Христо Ботев до семейството му, 17 май 1876 г., парахода „Радецки”</strong></p>
                                <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
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

export default Dokumenti;