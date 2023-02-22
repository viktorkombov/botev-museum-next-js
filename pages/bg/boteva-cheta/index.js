import { Fragment, useState } from 'react';
import TwoCardsView from '@/components/Layouts/TwoCardsView';
import classes from './BotevaChetaHomePage.module.scss';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';

import cheta_0_img from '@/assets/uploads/slizaneto-na-chetata.jpg';
import cheta_1_img from '@/assets/uploads/radetzki.jpg';

import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function BotevaChetaHomePage() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);
    const pageTitle = 'Ботева чета';
    const images = [
        { src: cheta_0_img.src, title: pageTitle },
        { src: cheta_1_img.src },
    ];



    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="През април 1876 година изтерзаният, клан и бесен, измъчван и обругаван български народ въстава, за да покаже на себе си и на света..."
                image={images[0].src}
                keywords="Ботеви четници, Ботева чета - история и боен път"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <TwoCardsView
                className={classes.wrapper}
                links={['/bg/boteva-cheta/botevi-chetnitsi', '/bg/boteva-cheta/istoria']}
                images={[images[0].src, images[1].src]}
                titles={['Ботеви четници', 'Ботева чета - история и боен път']}
                contents={['Спомените на оцелелите Ботеви четници са записани и издадени между 1900-1930 г. Най-голям принос в съставянето на първите списъци на четата имат Захари Стоянов ...', 'На 11 или 12 ноември 1875 г. започват заседанията на Гюргевския комитет. Решено е да се подготви въстание в България, което да се обяви на 18 април 1876 г. ...']}
            >
                <h2>Ботева чета - история, боен път, участници</h2>
                <section className={classes.content}>
                    <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                    <p>През април 1876 година изтерзаният, клан и бесен, измъчван и обругаван български народ въстава, за да покаже на себе си и на света, че не желае повече да бъде роб. Отново на дневен ред пред световната дипломация е поставен за разрешаване „българският въпрос”. Този път българите не са пасивни наблюдатели, а сами пишат кървавите страници на новата си история. Въстанието от Април &quot;76-та е най-ярката проява на българското националноосвободително движение, а подвигът на Ботевата чета – върховният епилог на героичната Априлска епопея.</p>
                    <p><i>
                        „Захваща се вече драмата на Балканският полуостров! ...,българският бунт е влязал вече в своите права и борбата се е захванала със сичката своя отчаяност. Касапницата ще да бъде страшна и отвратителна, жертвите ще да бъдат безбройни и от двете страни. Но треперете, тирани! Полудейте, дипломати!...Тука е гласният, отчаяният и мъжественият седемилионен български народ...който днес въстава и иска от светът едно от тие две неща: или свобода, или смърт!”
                    </i></p>
                    <p className={classes.signature}><strong>Христо Ботев,</strong></p>
                    <p className={classes.signature}><strong>в. „Нова България”, г. І, бр. 1, 5 май 1876 г.</strong></p>
                </section>
            </TwoCardsView>
            <Fragment>
                <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                    <CarouselBootstrap
                        items={images}
                        index={imageIndex}
                        type="gallery"
                    ></CarouselBootstrap>
                </ModalBootstrap>
            </Fragment>
        </Fragment>
    );
}

export default BotevaChetaHomePage;