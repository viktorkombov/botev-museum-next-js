import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Gallery from '@/components/UI/Gallery';
import { museumCardsContent } from '@/utils/data';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

import muzei_0_img from '@/assets/uploads/muzey-8.jpg';
import muzei_1_img from '@/assets/uploads/muzey-10.jpg';
import muzei_2_img from '@/assets/uploads/muzey-2.jpg';
import muzei_3_img from '@/assets/uploads/muzey-14.jpg';
import muzei_4_img from '@/assets/uploads/muzey-20.jpg';
import muzei_5_img from '@/assets/uploads/muzey-19.jpg';
import SEO from '@/components/SEO/SEO';

function HBNMuseum() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Национален музей "Христо Ботев"';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: muzei_0_img.src, title: pageTitle },
        { src: muzei_1_img.src, title: "Къщата на Христо Ботев отвътре" },
        { src: muzei_2_img.src, title: "Къщата на Христо Ботев" },
        { src: muzei_3_img.src, title: "Софра" },
        { src: muzei_4_img.src, title: "Експозиционна зала" },
        { src: muzei_5_img.src, title: "Конферентна зала" },
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="В музея се съхраняват, опазват и експонират лични вещи, документи, издания, произведения на българското изобразително изкуство и др. материали, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му. "
                image={images[2].src}
                keywords="Музеят на Христо Ботев, Родната къща на Христо Ботев, Музей Ботев"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Музей', muzei: 'Национален музей "Христо Ботев"' }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Музеен комплекс</h2>
                            <p>Национален музей „Христо Ботев” е държавен културен институт с национално значение. В него се съхраняват, опазват и експонират лични вещи, документи, издания, произведения на българското изобразително изкуство и др. материали, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му. Основната дейност на музея е да издирва, изучава и популяризира движимите паметници на културата, свързани с жизниния революционен и творчески път на Ботев. За целта са създадени съответните отдели и фондове, в които се пазят над 5 000 музейни единици. Библиотеката на музея разполага с над 1 500 тома специализирана литература.</p>
                            <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                            <p>Музей „Христо Ботев” организира и участва в научни сесии и конференции от национален и регионален характер. За повишаване на интереса към родната ни история, музеят организира и приема редица тематични и художествини изложби. Така той се стреми да задоволи нарасналите интереси на многобройните си посетители.</p>
                            <FloatingImage src={images[2].src} title={images[2].title} onClick={() => onImageClick(2)} right />
                            <p>НМ „Христо Ботев”, Калофер е изграден на мястото, където се е намирала последната къща на Ботевото семейство. Музейният комплекс е разположен в парк „Ботева градина”, създаден през 1926 г. и включва следните обекти – мемориална къща-музей, експозиционна зала, паметника на Ботев от 1930 г. и паметника на Иванка Ботева - майката на поета. Цялият ансамбъл е обявен за групов паметник на културата – историческо място с национално значение.Основен елемент в комплекса е къщата, в която е живял най-дълго Ботев. Той не е роден в нея, но я нарича „роден дом, защото тук прекарва детството си. В тази къща се завръща след учението си в Одеса и учителстването в Задунаевка. В нея получава и броя от Славейковия вестник „Гайда”, в който е публикувано първото му стихотворение „Майце си”. От този дом Ботев тръгва за „черна чужбина”, за да отдаде „сили и младост” за свободата на любимото си Отечество. Къщата е разрушена при опожаряването на града през 1877 г. По инициатива на калоферското гражданство и родолюбиви българи от цялата страна, сградата е възстановена по спомени на Ботевия брат о.з. ген. Кирил Ботев и по-стари калоферци. Проектът е разработен от арх. Балтаджиев и строежът започва през 1942 г. Официално е открита като музей на 2 юни 1944 г.</p>
                            <p>Мемориалната къща-музей представлява едноетажна полумасивна сграда с четирискатен покрив и еркерно изнесен голям чардак. В нея, с етнографски материали от епохата на Възраждането, е пресъздадена обстановката, в която е израстнал Ботев. Оригинални експонати са чекръкът и шевната машина на баба Иванка.</p>
                            <FloatingImage src={images[3].src} title={images[3].title} onClick={() => onImageClick(3)} />
                            <h4>Музейният комплекс „Христо Ботев” включва:</h4>
                            <p><strong>• Мемориална къща-музей:</strong> Къщата, в която най-дълго е живяло семейството на Ботев. Възстановена през 1942-1944 г. по спомени на Ботевия брат оз. ген. Кирил Ботев и по-възрастни калоферци. Оригинални експонати в нея са чакръкът и шевната машина на баба Иванка – майката на Ботев;</p>
                            <p><strong>• Експозиционна зала:</strong> Построена през 1973 г. В експозицията преобладават фотосите и снимковият материал. Оригинални експонати са: единствените запазени лични вещи на Ботев – джобен часовник и писалищни принадлежности; печатната преса “Знаме”; печатната преса на Димитър Паничков; лични вещи на Венета и Иванка Ботеви. Други интересни експонати са макетът на парахода “Радецки” и знамето на Ботевата чета</p>
                            <FloatingImage src={images[4].src} title={images[4].title} onClick={() => onImageClick(4)} right />
                            <p><strong>• Паметникът на Христо Ботев от 1930 г.:</strong> първият паметник на Ботев в Калофер, автор Кирил Георгиев;</p>
                            <p><strong>• Паметникът на баба Иванка – майката на Ботев</strong>, авт. проф. Мандов</p>
                            <p><strong>• Мемориален парк “Ботева градина”:</strong> създаден през 1926 г. на мястото, където се е намирала къщата на Ботев; засаден с редки дървесни видове.
                                Целият музеен комплекс е обявен за групов паметник на културата – историческо място с национално значение.</p>
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
                <PostAsideWrapper cardsData={museumCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default HBNMuseum;