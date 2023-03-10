import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';

import kalofer_0_img from '@/assets/uploads/star-kalofer.jpg';
import kalofer_1_img from '@/assets/uploads/kalofer-ot-visoko.jpg';
import kalofer_2_img from '@/assets/uploads/kalofer2.jpg';
import kalofer_3_img from '@/assets/uploads/kalofer-ot-visoko2.jpg';
import kalofer_4_img from '@/assets/uploads/kalofer-priroda2.jpg';
import kalofer_5_img from '@/assets/uploads/raisko-praskalo.jpg';

import Gallery from '@/components/UI/Gallery';
import { baseUrl, kaloferCardsContent, uploadsUrl } from '@/utils/data';
import classes from './KaloferHistory.module.scss';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import SEO from '@/components/SEO/SEO';

function KaloferHistory() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'История';

    const onImageClick = (index) => {
        console.log(index)
        setImageIndex(index);
        setShowModal(true);
    };

    const images = [
        { src: kalofer_0_img.src, title: pageTitle },
        { src: kalofer_1_img.src, title: "Калофер отвисоко" },
        { src: kalofer_2_img.src, title: "Гледка в подбалканското градче" },
        { src: kalofer_3_img.src, title: "Зима в Калофер" },
        { src: kalofer_4_img.src, title: "Природата на Калофер" },
        { src: kalofer_5_img.src, title: "Райското пръскало" },
    ];

    return (
        <Fragment>
            <SEO
                title="История на Калофер"
                description="В скута на хайдушкия Балкан се гуши малко китно градче, прорязано от бистрите води на Тунджа, огласяно от песента на хилядите гайтанджийски чаркове, ухаещо на рози и здравец."
                image={images[2].src}
                keywords="kalofer, калофер, история на калофер"
            />
            <CarouselBootstrap type="withCard" items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <p><i>Ако има село по-прибрано, по-добричко и с по-окопитени жители, то е Калофер...Ръкоделно село. Жителите му са в добричко състояние, къщите му са повече двукатни, дървени и послани все домашно...калоферският гайтан и шаяк са прочути по цяло Турско за хубавина...та, според това, то е прославено в народните песни с прякор </i><strong><i>Алтън Калофер.</i></strong></p>
                            <p style={{ textAlign: "right" }}>Иван Богоров</p>
                            <FloatingImage src={images[1].src} title={images[1].title} onClick={() => onImageClick(1)} />
                            <p>В скута на хайдушкия Балкан се гуши малко китно градче, прорязано от бистрите води на Тунджа, огласяно от песента на хилядите гайтанджийски чаркове, ухаещо на рози и здравец. Градче, „по богатство, развитие, етикет и носене”, приличащо на „един малък Цариград”. Така описват възрожденския Калофер пътешествениците, преминали през него и отнесли със себе си прекрасен спомен от видяното и преживяваното.</p>
                            <p>Създаването на града, превърнал се в гордостта на Стремската долина, е свързано с легенда, обвеяна с героизъм и романтика.</p>
                            <p>Из непроходимите урви и вековни гори скитала дружината на Калифер войвода. В многобройни битки с поробителя те отстоявали българската свобода и крепели духа на народа. За да спре непрестанните набези на непокорните българи, султанът разрешил на Калифер да създаде свое селище на територията, която успее да обиколи за един ден на кон. Избрал войводата хубаво място сред гъстите гори край Тунджа, изградили юнаците му хубави къщи, грабнали си красиви сопотски моми и създали ново селище, за чудо и приказ. Легенда ли е, истина ли е – никой не знае… Но такава е съхранената в народната памет, история на китния и живописен Калофер. Градът на гордите и юначни балканджии и хубави и работни българки, през който турчин “с подкован кон и оръжие” не е можел да премине.</p>
                            <FloatingImage src={images[2].src} title={images[2].title} onClick={() => onImageClick(2)} right />
                            <p>Калофер възниква като нов град към средата на ХVІ в. Оттогава датират приписките в ръкописи и старопечатни книги, в които се споменава името на селището. По-точните писмени сведения са от края на ХVІІІ и нач. на ХІХ в. и са свързани с времето на кърджалийските нападения.</p>
                            <p>Специалните привилегии, които Калофер придобива още със самото си създаване, играят значителна роля в неговото развитие и дават възможност на жителите му да запазят чисто българския характер на селището. От него излизат 15 хайдушки дружини, които защитават имота, труда и честа на местното население. Въпреки тази закрила, богатството на града привлича многобройни кърджалийски банди, които успяват да го разграбят и опустошат два пъти – през 1799 и 1804 години.</p>
                            <p> Калофер преживява истински стопански разцвет през ХІХ век, когато предприемчивите му жители го превръщат в гайтанджийско и абаджийско средище и в един от центровете на розопроизводството в Карловския край. Едни от най-видните търговци и занаятчии в Цариград, Одеса, Букурещ и Виена били калоферци. Богатите фамилии на Тъпчилещови, Тошкович, Золотович разнасяли славата на малкия подбалкански градец, който всички наричали Алтън Калофер (Златен Калофер).</p>
                            <p>Градът дава на историята ни личности като първата българска поетеса Елена Мутева, брат й Димитър Мутев-първия българин с академично образование, първия български библиограф Иван Шопов, първата българска лекарка Анастасия Головина, касиера на БРЦК Драгой Шопов. Той е родно място и на редица политически дейци на свободна България като Георги Странски, Георги Янкулов, Димитър Тончев, Димитър Попов, Христо Калфов, Богдан Филов, Никола Начов - единствения наш академик със средно образование, втория български екзарх Йосиф І, генералите Никола Иванов – ръководил превземането на Одринската крепост, Кирил Ботев, Атила Зафиров, Генко Мархолев, Христо Мархолев, юнкер Боян Ботев. От калоферски произход, макар и роден в Бесарабия, е и един от класиците на българската литература Георги Стаматов.</p>

                            <FloatingImage src={images[3].src} title={images[3].title} onClick={() => onImageClick(3)} />
                            <p>Калоферци активно се включват и в борбата за национално освобождение на България. Те участват в четите на Хаджи Димитър и Стефан Караджа. През пролетта на 1876 г., 8 калоферци се записват в четата на Христо Ботев. При сформирането на Българското опълчение 80 постъпват в него,а по време на Руско-турската война 33-ма от тях оставят костите си за свободата на България.</p>
                            <p>Подобно на всички планинци и калоферци се отличават с религиозен дух и твърдо спазват православните традиции. В това малко планинско градче са изградени шест църкви, два манастира и три метоха /в съседно Карлово с население 20 000 църквите са само две/. В центъра се намира най-големият храм “Успение на св. Богородица”, възобновен през 1848 г. Църквата “Св. Архангел Михаил” е изградена от Уста Генчо от Трявна и и изписана от Георги Данчов. Единствената църква на десния бряг на Тунджа е “Св. Атанас”, чийто мраморен иконостас е дарен от калоферските търговци в Цариград и е донесен оттам с волски каруци. Девическият манастир “Св. Въведение Богородично” съществува от нач. на ХVІІІ в., опожаряван е два пъти по време на кърджалийските нападения. След Освобождението е възстановен с руски средства и църквата е украсена с руски икони най-ценните, от които са: Казанска св. Богородица /копие от чудотворната икона в Казанския девически манастир/, Тихвенска св. Богородица /копие от чудотворната икона в мъжкия манастир около гр. Тихвенск/ и Смоленска св. Богородица. Извън града, в чудно красива местност, е разположен и прочутият в миналото мъжки манастир „Св. Рождество Богородично”, основан в 1606 г. и известен с храмовата си икона, която според легендата имала чудотворна сила.</p>
                            <p>В навечерието на Освобождение Калофер е процъфтяващ град с 5-6 хил. жители. На 26 юли 1877 г. перлата на Стремската долина, градът получил прозвището си “Алтън Калофер” е напълно опожарен и сринат до основи. 618 души са безмилостно изклани , а през следващите месеци от студ, глад и епидемии умират общо 1100.</p>
                            <p>Отцелелите от зверствата на поробителите и ужасите на войната се завръщат и заварват родния си град в руини. И отново непримиримият български дух им помага да съградят от пепелищата нов град. Но преди да издигнат домовете си, възстановяват училището и църквите си, защото знаят, че духовността е тази сила, която крепи човека през всичките му изпитания, и ни запазва на този ветровит крастопът, като народ и държавност.</p>
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
                <PostAsideWrapper cardsData={kaloferCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export default KaloferHistory;