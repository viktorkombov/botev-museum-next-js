import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Gallery from '@/components/UI/Gallery';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent } from '@/utils/data';

import rodoslovie_0_img from '@/assets/uploads/rodoslovno-darvo.jpg';
import rodoslovie_1_img from '@/assets/uploads/ivanka-boteva.jpg';
import rodoslovie_2_img from '@/assets/uploads/botyo-petkov.jpg';

import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';


function Rodoslovie() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Родословие';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: rodoslovie_0_img.src, title: pageTitle },
        { src: rodoslovie_1_img.src, title: "Ивана Ботева Петкова" },
        { src: rodoslovie_2_img.src, title: "Ботьо Петков" }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Майката на Ботев, по баща Ивана Стайкова Дрянкова, е родена в Калофер в семейството на Стайко Дрянков и Тота Бурмова. „Хубавата като калоферка” Ивана, през 1846 г. се омъжва за Ботьо Петков."
                image={images[0].src}
                keywords="родословие, христо ботев родословие, христо ботев семейство"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', rodoslovie: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment >
                            <h2>{pageTitle}</h2>
                            <div style={{ overflowY: 'auto' }}>
                                <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                                <p><strong>Ивана Ботева Петкова (около 1830-1911)</strong></p>
                                <p>Майката на Ботев, по баща Ивана Стайкова Дрянкова, е родена в Калофер в семейството на Стайко Дрянков и Тота Бурмова. „Хубавата като калоферка” Ивана, през 1846 г. се омъжва за Ботьо Петков.</p>
                                <p>Ражда 9 деца, които възпитава с любов и дух на преклонение към всичко българско.</p>
                                <p>Доживява старините си при своя син Кирил. Умира през 1911 г. в София.</p>
                            </div>
                            <br />
                            <div style={{ overflowY: 'auto' }}>
                                <FloatingImage src={images[2].src} title={images[2].title} onClick={() => onImageClick(2)} right />
                                <p><strong>Ботьо Петков (1815-1869)</strong></p>
                                <p>Бащата на Христо Ботев няма запазена фотография. Портретите му са правени по спомени на негови съвременници.Ботьо Петков е виден възрожденски учител, книжовник, преводач и просветен деец. Роден е в Карлово. През 1839 г. е условен за учител в Калофер,откъдето през 1841 г. е изпратен да  продължи образованието си в Одеската духовна семинария. По негова инициатива през 1848 г. в Калофер е построено и открито прочутото Мъжко класно училище.</p>
                                <p>Наред с усилената си учителска работа се посвещава и на книжовна дейност. Той е активен обществен деец и се включва в борбата за независимост на Българската православна църква. Ботьо Петков умира от туберкулоза на 29 август 1869 г.</p>
                            </div>
                            <br />
                            <h2>Братя и сестри</h2>
                            <p>В семейството се раждат 9 деца – 7 момчета и две момичета. Тота и двамата Генковци умират в детска възраст.</p>
                            <p><strong>Ана (около 1850 – 1867)</strong></p>
                            <p>Омъжва се рано за калофереца Христо Груев. Умира при раждането на сина си Тодор. Няколко месеца по-късно умира и детето й.</p>
                            <p><strong>Петко (1852-1872)</strong></p>
                            <p>Учи в Мъжкото класно училище в Калофер. На 11 годишна възраст се разболява от костна туберкулоза и остава прикован на легло до края на дните си.</p>
                            <p><strong>Стефан (1854-1890)</strong></p>
                            <p>Завършва Мъжкото класно училище в Калофер. Учи в гимназията в гр. Табор, Чехия. Учителства в Панагюрище.</p>
                            <p>До 1887 г. живее и работи в Румъния. Завръща се в България и се установява в Пловдив. Умира от туберкулоза на 15 април 1890 г., без да остави потомство.</p>
                            <p><strong>Кирил (1856-1944)</strong></p>
                            <p>Завършва Мъжкото класно училище в Калофер. Учи в католическата гимназия в Одрин, а от лятото на 1874 г. емигирира при Христо Ботев в Румъния. Четник в четата на големия си брат..Заловен и осъден от турския съд в Русе на 15 години затвор. След Освобождението се посвещава на военна кариера. Достига до чин генерал-лейтенант от Българската армия.</p>
                            <p>Умира на 4 февруари 1944 г. в с. Студена, Пернишко. Той единствен от Ботевите братя оставя потомство.</p>
                            <p><strong>Боян (1866-1885)</strong></p>
                            <p>През лятото на 1875 г., заедно с майка си и брат си Стефан, заминава за Румъния. Учи в българското училище в Букурещ. След Освобождението постъпва във Военното училище в София.</p>
                            <p>Участва в Сръбско-българската война (1885 г.). На 7 ноември е ранен в боевете при Сливница. Умира от раните си на 10 ноември 1885 г. Посмъртно е произведен в чин подпоручик.</p>
                            <h4>Галерия:</h4>
                        </Fragment>
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
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default Rodoslovie;