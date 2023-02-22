import { Link as MaterialLink } from '@mui/material';
import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import TwoColumnsView from '@/components/Layouts/TwoColumnsView';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import MasterDetailTable from '@/components/UI/MasterDetailTable';
import DetailContent from '@/components/UI/MasterDetailTable/DetailContent';
import classes from './BoteviChetnitsi.module.scss';
import Link from 'next/link';

import chetnitsi_0_img from '@/assets/uploads/slizaneto-na-chetata.jpg';
import chetnitsi_1_img from '@/assets/uploads/zahari-stoyanov-biografia.jpg';
import chetnitsi_2_img from '@/assets/uploads/radka-stoyanova-biografia.jpg';

import chetnitsi_3_img from '@/assets/uploads/fotografia-2.jpg';
import chetnitsi_4_img from '@/assets/uploads/savov.jpg';
import chetnitsi_5_img from '@/assets/uploads/simov.jpg';
import chetnitsi_6_img from '@/assets/uploads/apostolov.jpg';
import chetnitsi_7_img from '@/assets/uploads/voynovski.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function BoteviChetnitsi() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Ботеви четници';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: chetnitsi_0_img.src, title: pageTitle },
        { src: chetnitsi_1_img.src },
        { src: chetnitsi_2_img.src }
    ];

    function createData(id, imageUrl, name, years, born, died, content) {
        return {
            id,
            imageUrl,
            name,
            years,
            born,
            died,
            content,
        };
    }

    const originalRows = [
        createData(
            1,
            chetnitsi_3_img.src,
            "Христо Ботев Петков",
            28,
            { date: "6 януари, 1848 г.", place: "Калофер" },
            { date: "2 юни, 1876 г.", place: "Врачански балкан" },
            `Христо Ботьов Петков, известен като Христо Ботев, е български революционер, поет и публицист. Смятан е за национален герой и един от най-видните българи на Възрожденския период.`
        ),
        createData(
            2,
            chetnitsi_7_img.src,
            "Никола Войновски",
            26,
            { date: "9 ноември 1849 г.", place: "Бойновци" },
            { date: "15 юни 1876 г.", place: "Шипково" },
            'Войновски е избран за войвода на четата и под негово ръководство тя води последния си бой в района на с. Лютиброд. Остатъкът от дружината се разпада на части. По това време към него се присъединяват Димитър Тодоров – Димитрото и още няколко оцелели четници от Ботевата чета и тръгват към Троянския балкан. С 15 души Войновски се добира до Троянския балкан. На 13 юни 1876 г. в района на с. Шипково четата е разбита окончателно. Никола Войновски е убит на 15 юни /28 юни по нов стил/ 1876 г., ударен в гърдите. Смъртоносно ранен успява да пропълзи десетина метра, като подкрепял своите другари с думите:"Дръжте се, момчета!" Така разказва Димитър Тодоров, който е бил ранен в ръката и е станал свидетел на гибелта на Никола Войновски.'
        ),
        createData(
            3,
            chetnitsi_6_img.src,
            "Георги Апостолов Минчев",
            22,
            { date: "юни 1853 г.", place: "Стара Загора" },
            { date: "21 май 1876 г.", place: "Лютиброд" },
            "Георги Апостолов е роден е през юни 1853 г. в семейството на богат търговец на абаджийска стока и откупвач на натуралния десятък от Ески Заара. Завършва училище в родния си град. Бил е счетоводител в търговска кантора и търговец. Член на Старозагорския частен революционен комитет на ВРО, основан от Васил Левски. Участва в подготовката на Старозагорското въстание (1875). След неуспеха му избягва в Румъния."
        ),
        createData(
            4,
            chetnitsi_4_img.src,
            "Давид Савов Тодоров",
            42,
            { date: "около 1834 г.", place: "Враца" },
            { date: "18 май 1876 г.", place: "Милин камък" },
            `Давид Тодоров е един от около 20-те четници в Ботевата чета от Враца и областта, които в името на борбата за освобождението на България, изоставят семейства, търговия, занаят. На 18 май 1876 г. геройски загива в престрелка с турската войска на възвишението Милин камък преди да достигне Врачанския Балкан.`
        ),
        createData(
            5,
            chetnitsi_5_img.src,
            "Никола Симов - Куруто",
            31,
            { date: "около 1845 г.", place: "Ески Джумая" },
            { date: "30 май 1876 г.", place: "Милин камък" },
            `Роден е около 1845 г. в Ески Джумая, където се прехранва с дребна търговия и развива революционна дейност. Получава смъртна присъда от турската власт и бяга в Румъния. Работи в печатницата на Любен Каравелов в Букурещ и се сприятелява с Христо Ботев.

            Ранен е (и вероятно доубит от турците) на 18 май (стар стил, 30 май нов стил) 1876 г. на хълма Милин камък заедно с поп Сава Катрафилов. Знамето е поето от Димитър Стефанов – Казака от Сливен, който се заклева, целувайки дръжката на знамето със следа от кръвта на Никола Симов.`
        )
    ];

    const columns = [
        {
            id: "name",
            headerText: "Име",
            sortable: true,
            numeric: false,
            avatar: true,
            classesOuter: `${classes["name-cell"]}`,
            classesInner: `${classes["header__text--name-title"]}`,
        },
        {
            id: "years",
            headerText: "Години",
            headerTextSubtitle: "(Kъм 1876 г.)",
            sortable: true,
            numeric: true,
            classesOuter: `${classes["years-cell"]}`,
            classesInner: `${classes["header__text--years-old-title"]}`,
        },
        {
            id: "born",
            headerText: "Роден",
            objectType: true,
            classesOuter: `${classes["responsive-cell"]}`,
            classesRowInner: classes['row-inner']
        },
        {
            id: "died",
            headerText: "Починал",
            objectType: true,
            classesOuter: `${classes["responsive-cell"]}`,
            classesRowInner: classes['row-inner']
        },
    ];


    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Спомените на оцелелите Ботеви четници са записани и издадени между 1900-1930 г. Най-голям принос в съставянето на първите списъци на четата имат Захари Стоянов ... "
                image={images[0].src}
                keywords="ботеви четници, четата на христо ботев"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <TwoColumnsView history={{ nachalo: 'Начало', 'boteva-cheta': 'Ботева чета', 'istoriya': pageTitle }} table>
                <h2>{pageTitle}</h2>
                <FloatingImagesPage>
                    <Fragment>
                        <h3>Източници</h3>
                        <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} right />
                        <p>Спомените на оцелелите Ботеви четници са записани и издадени между 1900-1930 г. Най-голям принос в съставянето на първите списъци на четата имат Захари Стоянов, Андрей Матеев, Никола Обретенов, Илия Цанов, Г. Димитров, Никола Кючуков и Димитър Страшимиров.</p>
                        <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                        <p>Най-пълният и исторически достоверен списък на четата, е дело на Радка Стоянова, но и в него много от Ботевите четници са известни само с имената си, без по-подробни данни за живота им, без запазени снимки. Според този списък Ботевите четници са 205-ма.</p>
                        <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                            <CarouselBootstrap
                                items={images}
                                index={imageIndex}
                                type="gallery"
                            ></CarouselBootstrap>
                        </ModalBootstrap>
                    </Fragment>
                </FloatingImagesPage>
                <Fragment>
                    <h3>Състав на Ботевата чета</h3>
                    <MasterDetailTable originalRows={originalRows} columns={columns} filterBy="name">
                        <DetailContent />
                    </MasterDetailTable>
                    <br />
                    <MaterialLink component={Link} href="/bg/boteva-cheta/istoria">Ботева чета - история и боен път</MaterialLink>
                </Fragment>
            </TwoColumnsView>
        </Fragment>
    )
}

export default BoteviChetnitsi;