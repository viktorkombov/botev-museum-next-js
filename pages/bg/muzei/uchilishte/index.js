import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { museumCardsContent } from '@/utils/data';
import classes from './School.module.scss';

import uchilishte_0_img from '@/assets/uploads/uchilishte-1.jpg';
import uchilishte_1_img from '@/assets/uploads/uchilishte-5.jpg';
import uchilishte_2_img from '@/assets/uploads/uchilishte-2.jpg';
import uchilishte_3_img from '@/assets/uploads/uchilishte-7.jpeg';
import uchilishte_4_img from '@/assets/uploads/uchilishte-3.jpg';
import uchilishte_5_img from '@/assets/uploads/uchilishte-6.jpg';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';

function School() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Даскал Ботево училище';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: uchilishte_0_img.src, title: pageTitle },
        { src: uchilishte_1_img.src, title: "Даскал Ботевото училище" },
        { src: uchilishte_2_img.src, title: "Училището отвътре" },
        { src: uchilishte_3_img.src, title: "Глобус" },
        { src: uchilishte_4_img.src, title: "Класна стая" },
        { src: uchilishte_5_img.src, title: "Даскал Ботевото училище" },
    ];


    return (
        <PageTransition>
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Музей', pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <p>Икономическият просперитет, относителната политическа самостоятелност и преди всичко “окопитените”, честни и работливи калоферци допринасят за обособяването на градеца в средище на Българското национално Възраждане. Повишеното материалното благосъстояние на една част от населението и щедрите дарения на калоферските търговци и занаятчии, позволяват отделянето на значителни средства за развитието образованието.</p>
                            <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                            <p>Музей „Христо Ботев” организира и участва в научни сесии и конференции от национален и регионален характер. За повишаване на интереса към родната ни история, музеят организира и приема редица тематични и художествини изложби. Така той се стреми да задоволи нарасналите интереси на многобройните си посетители.</p>
                            <FloatingImage src={images[2].src} title={images[2].title} onClick={() => onImageClick(2)} right />
                            <p>Килийни училища в Калофер се отварят още от 1820 г. Няколко години след създаването на Габровското училище през 1839 г. с помощтта на калоферските търговци от Одеса е открито взаимно мъжко училище в двора на църквата „Св.Богородица”. През 1848 г. е завършен строежът на новото мъжко четирикласно училище, а старото е превърнато в девическо. Училището е изградено по инициатива на Ботьо Петков – бащата на Христо Ботев, изцяло с дарения и доброволната помощ на калоферци. Добре подготвените учители, някои от тях и изтъкнати книжовници, издигат Калоферското училище между първите в страната. През училището било като учители или ученици преминават редица видни български възрожденци: Ботьо Петков, главен учител до 1869 г., Димитър Фингов, Иван Чунчев, Спас Съйков, Никола Касапски, Иван Вазов, Христо Ботев, акад. Никола Начов и много други.</p>
                            <p>Калофер не изостава и по отношение на девическото образование. Ежегодно в Девическото училище се учат около 200 ученички, а учителките са около 5. Сред тях са Парашкева Шушулова, Анастасия Узунова, Рахил Барак-Душанова. Ученичка на Ботьо Петков е и създателката на първото българско светско девическо училище – Анастасия Димитрова.</p>
                            <FloatingImage src={images[3].src} title={images[3].title} onClick={() => onImageClick(3)} />
                            <p>На 26 юли 1877 г., по време на Руско-турската Освободителна война Калофер е напълно опожарен. Училището, библиотеката и целият му архив са унищожени. След Освобождението сградта е възстановена и училището отново приема жадните за знания млади калоферци.</p>
                            <p>През 1980 г. външният вид на сградата е възстановен във вида от 1865 г. и училището е превърнато в музей. В нея е разположена постоянната експозиция „Просветното дело в Калофер през епохата на Възраждането” , която проследява развитието на просветното дело в България и конкретно в Калофер. На втория етаж са показани възстановки на стаи от Взаимно и Класно училище, както и Учителската и Общинската стаи.</p>
                            <FloatingImage src={images[4].src} title={images[4].title} onClick={() => onImageClick(4)} right />
                            <p>На първия етаж се намира Художественият отдел на НМ „Христо Ботев”. В изложбата са експонирани оригинални произведения на български творци, пресъздали образа на Ботев върху платно и камък. Галерията притежава творби на Димитър Гюдженов, Златю Бояджиев, Йоан Левиев, Александър Поплилов и др.</p>
                            <p>Пред сградата се намира историческият камък, от който Ботев произнася паметната си реч на 11 май 1867 г.</p>
                            <p>Обслужва се от служителите на НМ „Христо Ботев” и работи с работното време на музея. Таксите за посещения се заплащат на касата на музея.</p>
                            <p>При предварителна заявка в стаята на Взаимното училище се провеждат „Уроци по родолюбие”.</p>
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
                            <Gallery images={images} onImageClick={onImageClick}/>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={museumCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </PageTransition>
    );
}

export default School;