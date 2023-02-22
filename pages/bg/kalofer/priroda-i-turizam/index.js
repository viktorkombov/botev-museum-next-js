import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { kaloferCardsContent, uploadsUrl } from '@/utils/data';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';

import priroda_1_img from '@/assets/uploads/kalofer-priroda.jpg';
import priroda_2_img from '@/assets/uploads/kalofer-ekopateka.jpg';
import priroda_3_img from '@/assets/uploads/kalofer-bivak.jpg';
import priroda_4_img from '@/assets/uploads/raisko-praskalo.jpg';
import priroda_5_img from '@/assets/uploads/dzhendema.jpg';
import priroda_6_img from '@/assets/uploads/vrah-botev.jpg';
import SEO from '@/components/SEO/SEO';

function Landmarks() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Природа и туризъм';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: priroda_1_img.src, title: pageTitle },
        { src: priroda_2_img.src, title: "Екопътека „Бяла река”" },
        { src: priroda_3_img.src, title: "Бивак „Бяла река”" },
        { src: priroda_4_img.src, title: "Резерват „Джендема”" },
        { src: priroda_5_img.src, title: "Водопад „Райското пръскало”" },
        { src: priroda_6_img.src, title: "вр. Ботев" }

    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Калофер е едно от най-живописните Подбалкански градчета с красива природа и гостоприемни жители."
                image={images[2].src}
                keywords="калофер природа, райско пръскало, бяла река, екопътека бяла река, джендема"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>
            <Post>
            <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <p>Калофер е едно от най-живописните Подбалкански градчета с красива природа и гостоприемни жители.</p>
                                <p>Околностите на града предоставят прекрасна възможност за отдих, сред зеленина и свеж планински въздух. Бреговете на двете реки  - Тунджа и Бяла река са идеално място за пикник, а разходката на кон или колело по горските пътища е истинска наслада за очите и душата.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                                <p><strong>Екопътека „Бяла река”:</strong> Намира се на около 8 км. северозападно от Калофер, близо до Мъжкия манастир. Тя е част от комплекса „Бяла река”, който включва още бивак и детски център за оцеляване сред природата „Джендема”.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                                <p><strong>Бивак „Бяла река”:</strong> Предлага бивакуване (къмпингуване) по брега на Бяла река. Обзаведен е с маси, пейки, огнища и WC. Бивакът е изходен пункт за преход до х. „Рай” и вр. Ботев.</p>
                                <p><strong> Бивак „Кирик”:</strong> Намира се на 3 км. северно от Калофер по пътя за м. „Паниците”, в близост до лечебния извор „Св. Кирик”. Предлага бивакуване (къмпингуване) край бреговете на р. Тунджа. Разполага с 10 комплекта маси с пейки и детски кът.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
                                <p>Резерват „Джендема”</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[4].src} onClick={() => onImageClick(4)} />
                                <p><strong>Водопад „Райското пръскало”</strong></p>
                                <p>Калофер е изходен пункт за покоряване на най-високия връх в Стара планина – вр. Ботев (2 376 м.) и най-високия водопад на Балканския полуостров – „Райското пръскало” (124 м.)</p>
                                <p>Маршрутът е изцяло в защитената територия на НП „Централен Балкан”. Тръгва от м. „Паниците” (7 км. северно от Калофер), преминава през местностите „Поника”, „Параджик”, „Каменливеца”, „Рогачева гора” и „Малък Купен” и след около 4 часа достига до х. „Рай”, в подножието на „Райското пръскало”. Пътеката е добре маркирана с табели, лентова маркировка в синьо и бяло и е с много места за отдих. Хижа „Рай” разполага със 112 легла, кухня, лавка и баня.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                            <FloatingImage src={images[5].src} onClick={() => onImageClick(5)} />
                                <p><strong>вр. Ботев</strong></p>
                                <p>От х. „Рай” по панорамната „Тарзанова пътека” (зелено-бяла лентова маркировка) за около 3 ч. се достига до вр. Ботев. От върха може да се стигне за 4 ч. до х. „Плевен”, за 4.5 ч. до х. „Тъжа” и за 4 ч. до х. „Левски”. На вр. Ботев НЯМА места за пренощуване.</p>
                                <p>Калофер разполага с множество семейни хотели, къщи за гости и вили извън града. Всички те са с различен интериор – от типичния възрожденски до модерния , но каквото и да изберете ще се насладите на традиционна и съвременна българска кухня, неподправено гостоприемство и ще имате незабравими преживявания.</p>
                            </div>
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

export default Landmarks;