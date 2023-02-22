import { Fragment, useState } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Gallery from '@/components/UI/Gallery';
import { kaloferCardsContent, uploadsUrl } from '@/utils/data';

import muzei_0_img from '@/assets/uploads/kaloferska-dantela.jpg';
import muzei_1_img from '@/assets/uploads/kaloferska-dantela2.jpg';
import muzei_2_img from '@/assets/uploads/kaloferska-dantela3.jpg';
import muzei_3_img from '@/assets/uploads/kaloferska-dantela4.jpg';
import muzei_4_img from '@/assets/uploads/kaloferska-dantela5.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';

function KaloferskaDantela() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Калоферска дантела';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: muzei_0_img.src, title: pageTitle },
        { src: muzei_1_img.src },
        { src: muzei_2_img.src },
        { src: muzei_3_img.src },
        { src: muzei_4_img.src }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Повече от 100 години са изминали от появата на едно от най-фините женски ръкоделия, наречено с право „бялата магия” – калоферската дантела. За това време тя не само се е съхранила, но е претърпяла и развитие, като от занаят, осигуряващ прехраната на калоферки, се е превърнала в изкуство."
                image={images[0].src}
                keywords="калоферска дантела, калофер, дантела"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Калоферска дантела</h2>
                            <p>Повече от 100 години са изминали от появата на едно от най-фините женски ръкоделия, наречено с право „бялата магия” – калоферската дантела. За това време тя не само се е съхранила, но е претърпяла и развитие, като от занаят, осигуряващ прехраната на калоферки, се е превърнала в изкуство.</p>
                            <p>Дантелите, плетени със совалки на цилиндър се изработват предимно в Западна Европа и са по-известни като „брюкселски”. Именно на базата на брюкселската дантела се развива и калоферската. Техниката на изплитането е еднаква, но и тук българката е изразила своите възгледи за красиво, като е заимствала направо от прекрасната ни природа. Така се появяват типично българските мотиви – рози, еделвайси, листа, лалета, слънчогледи, които придават нов и различен вид на „брюкселската” дантела и я превръща в „калоферска”.</p>
                            <p>През 1910 г. в Калофер се открива първото и единствено в страната ни Дантелено училище „Трудолюбие”.  Училището е с двугодишен курс на обучение и се издържа от Калоферското общинско управление, Калоферската дружба в София и Женското дружество „Просвещение” в града. В това училище са получили знания и професионални умения в създаването и изработването на совалков тип дантела около 1 800 жени и момичета.</p>
                            <p>В годините от създаването на Дантеленото училище до Втората световна война дантеленото производство носи значителни приходи, както за самите плетачки, така и за Калофер и допринася за стопанското му развитие. През 1935 г. Дантеленото училище е закрито. Изработването на дантелите се пренася изцяло в домашни условия. Умението за създаване и плетене на дантелите се предава от майка на дъщеря, от баба на внучка.</p>
                            <p>През последното десетилетие, интересът към калоферската дантела отново се възражда. От 1999 г. ежегодно, на 15 август в деня на големия християнски празник -  Успение на Пресвета Богородица, се провежда Празникът на калоферската дантела. В него взимат участие плетачки на совалкова дантела от цялата страна, а също и гости от Англия, Шотландия и Белгия.</p>
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

export default KaloferskaDantela;