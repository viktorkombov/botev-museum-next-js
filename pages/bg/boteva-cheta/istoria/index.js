import { Link as MaterialLink } from '@mui/material';
import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import TwoColumnsView from '@/components/Layouts/TwoColumnsView';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import dynamic from "next/dynamic";
import Link from 'next/link';

import pohod_0_img from '@/assets/uploads/radetzki.jpg';
import pohod_1_img from '@/assets/uploads/cheta-1.jpg';
import pohod_2_img from '@/assets/uploads/lobno_myasto.jpg';
import pohod_3_img from '@/assets/uploads/okolchitsa.jpg';

import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';

const MyAwesomeMap = dynamic(() => import("@/components/UI/LefletMap/LefletMap"), { ssr:false });

function BotevaCheta() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Ботева чета - история, боен път, участници"';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: pohod_0_img.src, title: "Параходът „Радецки”" },
        { src: pohod_1_img.src, title: "Мястото, където четата слиза на българския бряг" },
        { src: pohod_2_img.src, title: "Лобното място на Христо Ботев" },
        { src: pohod_3_img.src, title: "Паметникът на връх Околчица, изграден през 1939 г." }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="На 11 или 12 ноември 1875 г. започват заседанията на Гюргевския комитет. Решено е да се подготви въстание в България, което да се обяви на 18 април 1876 г. Страната е разделена на четири революционни окръга Трети революционен окръг с център Враца се обръща за помощ към българската емиграция в Румъния. Трябвало да бъде сформирана"
                image={images[0].src}
                keywords="ботев, чета, история"
            />
            <CarouselBootstrap items={[{src: images[0].src, title: pageTitle }]}></CarouselBootstrap>
            <TwoColumnsView history={{ nachalo: 'Начало', 'boteva-cheta': 'Ботева чета', 'istoriya': 'Ботева чета - история и боен път' }}>
                <h2>Ботева чета - история и боен път</h2>
                <FloatingImagesPage>
                    <Fragment>
                        <h2>История</h2>
                        <p>На 11 или 12 ноември 1875 г. започват заседанията на Гюргевския комитет. Решено е да се подготви въстание в България, което да се обяви на 18 април 1876 г. Страната е разделена на четири революционни окръга Трети революционен окръг с център Враца се обръща за помощ към българската емиграция в Румъния. Трябвало да бъде сформирана <Link href="/bg/boteva-cheta/botevi-chetnitsi">чета от около 200 човека</Link>, която да внесе по-ново и модерно оръжие в страната и да помогне на въстаниците във Врачанско.</p>
                        <p>За ръководители на тази чета били поканени старите и опитни войводи Филип Тотю и Панайот Хитов, но те категорично отказват това предводителство. Тогава сам Ботев предлага да стане войвода. Всички го приемат с отворени обятия, защото са съзнавали, „че за такава велика работа, каквато е да се води чета, трябва и велик човек”.</p>
                        <FloatingImage src={images[0].src} title={images[0].title} onClick={() => onImageClick(0)} />
                        <p>Така някога е изглеждала местността Фунията на Козлодуйския бряг, където по обед на 17/29 май четата слиза на българска земя.</p>
                        <p>На 16 и 17 май 1876 г. Христо Ботев и „200 души български юнаци”, от различни румънски пристанища, се качват на борда на австрийския параход „Радецки”. Принуждават капитана Дагоберт Енглендер да спре близо до Козлодуй, където четата слиза и момчетата целуват „свещената земя на Майка България”. Оттам с усилен ход се отправят за Враца, но по пътя си не получават подкрепа.</p>
                        <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} right />
                        <p>На 18 май четниците приемат първото си продължително сражение на възвишението Милин камък. През същата нощ разкъсват обкръжението и се изтеглят в местността Веслец.. Правят неуспешни опити да се свържат с революционните дейци във Враца. Рано сутринта на 20 май четата заема позиции около трите върха Камарата, Купена и Околчица.</p>
                        <p>Водят сражение с редовна турска войска - срещу 205-мата са вдигнати на крак над 4000-а редовна и нередовна турска войска. Ботев, с ядрото на четата е под връх Камарата. Привечер, на 20 май (н. ст. 1 юни) 1876 г. след стихване на боя, в подножието на югоизточния склон на вр. Камарата, прострелян в сърцето загива гениалният поет и войвода Христо Ботев.</p>
                        <FloatingImage src={images[2].src} title={images[2].title} onClick={() => onImageClick(2)} />
                        <p>След смъртта на Ботев четата се разделя на три части, някои от тях продължават да водят сражения. Преследването на Ботевите четници продължава около един месец във Врачанския балкан. Тези, които са заловени, за първи път в историята на турското правосъдие са съдени.</p>
                        <p>Организирани им са два процеса - в Русе и София. Защитава ги талантливият адвокат Илия Цанов. Той спасява много четнически глави от бесилото. Осъдените са изпратени на заточение в едни от най-тежките затвори-крепости в Диарбекир.</p>
                        <p>Тези, които оцеляват се завръщат в страната по силата на Сан Стефански договор.</p>
                        <FloatingImage src={images[3].src} title={images[3].title} onClick={() => onImageClick(3)} right />
                        <p>Мястото за издигане на паметника е определено през 1901 г. с акт на Първата официална комисия за уточняване позициите на Ботевата чета в сражението на 20 май (1 юни) 1876 г. Решено е паметникът да се издигне не на Камарата, а на Околчица <strong><i>„като на място видно, лично, достъпно и близо до последното сражение”.</i></strong> </p>
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
                <Fragment>
                    <h3>Бойният път на четата</h3>
                    <div style={{ height: '500px' }}>
                       <MyAwesomeMap/>
                    </div>
                    <br />
                    <MaterialLink component={Link} href="/bg/boteva-cheta/botevi-chetnitsi">Състав на Ботевата чета</MaterialLink>
                </Fragment>
            </TwoColumnsView>
        </Fragment>
    )
}

export default BotevaCheta;