import { Fragment, useEffect } from 'react';
import TwoCardsView from '@/components/Layouts/TwoCardsView';
import img from '@/images/museum.jpg';
import inc from '@/images/inc.jpg';
import classes from './BotevaChetaHomePage.module.scss';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import botevDetachment0 from '@/images/botev-detachment/botev-detachment0.jpg';
import { uploadsUrl } from '@/utils/data';
import LoadingSpinner from '@/components/UI/LoadingSpinner';
import { useState } from 'react';

const BotevaChetaHomePage = props => {
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: `${uploadsUrl}/slizaneto-na-chetata.jpg`, title: "Ботева чета" }]} />
            <TwoCardsView
                className={classes.wrapper}
                links={['/bg/boteva-cheta/botevi-chetnitsi', '/bg/boteva-cheta/istoria']}
                images={[`${uploadsUrl}/slizaneto-na-chetata.jpg`, `${uploadsUrl}/radetzki.jpg`]}
                titles={['Ботеви четници', 'Ботева чета - история и боен път']}
                contents={['На 11 или 12 ноември 1875 г. започват заседанията на Гюргевския комитет. Решено е да се подготви въстание в България, което да се обяви на 18 април 1876 г. ...' , 'Спомените на оцелелите Ботеви четници са записани и издадени между 1900-1930 г. Най-голям принос в съставянето на първите списъци на четата имат Захари Стоянов ...']}
            >
                <h2>Ботева чета - история, боен път, участници</h2>
                <section className={classes.content}>
                    <FloatingImage src={botevDetachment0} />
                    <p>През април 1876 година изтерзаният, клан и бесен, измъчван и обругаван български народ въстава, за да покаже на себе си и на света, че не желае повече да бъде роб. Отново на дневен ред пред световната дипломация е поставен за разрешаване „българският въпрос”. Този път българите не са пасивни наблюдатели, а сами пишат кървавите страници на новата си история. Въстанието от Април &quot;76-та е най-ярката проява на българското националноосвободително движение, а подвигът на Ботевата чета – върховният епилог на героичната Априлска епопея.</p>
                    <p><i>
                        „Захваща се вече драмата на Балканският полуостров! ...,българският бунт е влязал вече в своите права и борбата се е захванала със сичката своя отчаяност. Касапницата ще да бъде страшна и отвратителна, жертвите ще да бъдат безбройни и от двете страни. Но треперете, тирани! Полудейте, дипломати!...Тука е гласният, отчаяният и мъжественият седемилионен български народ...който днес въстава и иска от светът едно от тие две неща: или свобода, или смърт!”
                    </i></p>
                    <p className={classes.signature}><strong>Христо Ботев,</strong></p>
                    <p className={classes.signature}><strong>в. „Нова България”, г. І, бр. 1, 5 май 1876 г.</strong></p>
                </section>
            </TwoCardsView>
        </Fragment>
    );
}

export default BotevaChetaHomePage;