import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { kaloferCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Memorials.module.scss';

import pametnitsi_0_img from '@/assets/uploads/pametnik-kalifer-voivoda.jpg';
import pametnitsi_1_img from '@/assets/uploads/grob-kalifer-voivoda.jpg';
import pametnitsi_2_img from '@/assets/uploads/biyust-hristo-botev.jpg';
import pametnitsi_3_img from '@/assets/uploads/pametnik-ivanka-boteva.jpg';
import pametnitsi_4_img from '@/assets/uploads/pametnik-botyo-petkov.jpg';
import pametnitsi_5_img from '@/assets/uploads/kamak-ognena-rech-.jpg';
import pametnitsi_6_img from '@/assets/uploads/voynishki-pametnik.jpg';
import pametnitsi_7_img from '@/assets/uploads/hram-uspenie-bogorodichno.jpg';
import pametnitsi_8_img from '@/assets/uploads/hram-arhangel-mihail.jpg';
import pametnitsi_9_img from '@/assets/uploads/devicheski-manastir-vavedenie-bogorodichno.jpg';
import pametnitsi_10_img from '@/assets/uploads/manastir-rozhdestsvo-bogorodichno.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';

function Memorials() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Паметници на културата';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: pametnitsi_0_img.src, title: "Паметникът на Калифер войвода, скулптор Христо Песев, 1975 г." },
        { src: pametnitsi_1_img.src, title: "Гробът на Калифер войвода – легендарният основател на града" },
        { src: pametnitsi_2_img.src, title: "Бюст-паметник на Христо Ботев, скулптор Кирил Георгиев, 1930 г." },
        { src: pametnitsi_3_img.src, title: "Паметник на майката на Ботев, скулптор проф. Иван Мандов, 1980 г." },
        { src: pametnitsi_4_img.src, title: "Паметникът на Ботьо Петков, скулптор Марко Марков, 1980 г." },
        { src: pametnitsi_5_img.src, title: "Камъкът, от който Христо Ботев произнася огнената си реч на 11 май 1867 г., намира се пред Даскал Ботевото училище" },
        { src: pametnitsi_6_img.src, title: "Войнишки паметник-чешма на загиналите във войните калоферци" },
        { src: pametnitsi_7_img.src, title: "Храм „Успение на Св. Богородица”" },
        { src: pametnitsi_8_img.src, title: "Храм „Св. Архангел Михаил”" },
        { src: pametnitsi_9_img.src, title: "Девически манастир „Св. Въведение Богородично”" },
        { src: pametnitsi_10_img.src, title: "Mъжки манастир „Св. Рождество Богородично”" }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Бюст-паметник на Христо Ботев, скулптор Кирил Георгиев, 1930 г."
                image={images[10].src}
                keywords="паметник на христо ботев, паметник калофер, паметници в калофер"
            />
            <CarouselBootstrap items={[{src: images[10].src, title: pageTitle}]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <p><strong>Паметникът на Калифер войвода, скулптор Христо Песев, 1975 г.</strong></p> <p><strong></strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                                <p><strong>Гробът на Калифер войвода – легендарният основател на града</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                                <p><strong>Бюст-паметник на Христо Ботев, скулптор Кирил Георгиев, 1930 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
                                <p><strong>Паметник на майката на Ботев, скулптор проф. Иван Мандов, 1980 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[4].src} onClick={() => onImageClick(4)} />
                                <p><strong>Паметникът на Ботьо Петков, скулптор Марко Марков, 1980 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[5].src} onClick={() => onImageClick(5)} />
                                <p><strong>Камъкът, от който Христо Ботев произнася огнената си реч на 11 май 1867 г., намира се пред Даскал Ботевото училище</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[6].src} onClick={() => onImageClick(6)} />
                                <p><strong>Войнишки паметник-чешма на загиналите във войните калоферци</strong></p>
                            </div>
                            <div style={{ padding: '2rem 0 1rem 0' }}>
                                <h3>Манасири и църкви</h3>
                                <p>В град Калофер още през епохата на Българското възраждане са изградени шест църкви, два манастира и три метоха.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[7].src} onClick={() => onImageClick(7)} />
                                <p><strong>Храм „Успение на Св. Богородица”</strong></p>
                                <p>Построен е през 1848 г. и се намира се в центъра на града. Северозападно от него, под сводеста постройка с колони, е лечебното аязмо. До него е поставена мраморна плоча, отбелязваща мястото на стария Светогорски метох и училище. В една от стаите на това училище се ражда Христо Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[8].src} onClick={() => onImageClick(8)} />
                                <p><strong>Храм „Св. Архангел Михаил”</strong></p>
                                <p>Сградата е голяма по обем, доминира над града и се вижда от пътя, влизащ в него. Графично изображение на храма илюстрира разказа за Калофер на Феликс Каниц в “Histoire de la guerre d’Orient 1877-1878 и Каниц, “Donau - Bulgarien und der Balkan”. В олтарното пространство са запазени стенописи, работени от Георги Данчов-Зографина през 1870-1871г. В сегашния си вид църквата е изградена от Уста Генчо от Трявна.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[9].src} onClick={() => onImageClick(9)} />
                                <p>В Девическия манастир „Св. Въведение Богородично”, създаден в началото на ХVІІІ се намира църква със същото име. В сегашния си вид е от 1862 г. След Освобождението е възстановен с руски средства и църквата е украсена с руски икони най-ценните, от които са копия на: Казанска , Тихвенска  и Смоленска Св. Богородица. В храма се намира аязмо, вкопано на 2,50 м. под подовото ниво. Според преданието водата му е лечебна.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[10].src} onClick={() => onImageClick(10)} />
                                <p>Извън града, в чудно красива местност, е разположен и прочутият в миналото мъжки манастир „Св. Рождество Богородично”. Той е основан в 1606 г. и става известен с храмовата си икона, която според легендата имала чудотворна сила.</p>
                            </div>
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

export default Memorials;