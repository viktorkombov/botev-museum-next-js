import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { kaloferCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Landmarks.module.scss';

function Landmarks() {
    const pageTitle = 'Природа и туризъм';
    const images = [
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280968.JPG",
            title: `жовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
        Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.[6]
        През 1854 година Ботьо Петков не успява да се споразумее с калоферската община за заплащането си и се премества в Карлово. Там семейството живее в къщата на майка му в Табашката махала, а Христо Ботев тръгва на училище, като негов учител е баща му. През 1858 година Ботьо Петков обвинява управата на карловската община, че се опитва да си присвои пари, завещани за училището, след което се връща в Калофер. Общината се опитва неуспешно да го настани в къща на живеещия в Цариград търговец Христо Тъпчилещов, след което семейството се настанява в къща на хаджи Нестор. След връщането им в Калофер Христо Ботев постъпва в местното трикласно училище, където учител е баща му.[7]
        В Одеса и връщане в Калофер Датите са по Юлианския календар (стар стил), о`,
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/nm_16.JPG",
            title: "Никола Войновски",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG",
            title: "Никола Обретанов",
        },
        {
            src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG",
            title: "Никола Войновски",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280968.JPG",
            title: "Никола Обретанов",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/nm_16.JPG",
            title: "Никола Войновски",
        },
    ];
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: `${uploadsUrl}/kalofer-priroda2.jpg`, title: pageTitle }]}></CarouselBootstrap>
            <Post>
            <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P7010034.JPG" />
                                <p>Калофер е едно от най-живописните Подбалкански градчета с красива природа и гостоприемни жители.</p>
                                <p>Околностите на града предоставят прекрасна възможност за отдих, сред зеленина и свеж планински въздух. Бреговете на двете реки  - Тунджа и Бяла река са идеално място за пикник, а разходката на кон или колело по горските пътища е истинска наслада за очите и душата.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/PA175225.JPG" />
                                <p><strong>Екопътека „Бяла река”:</strong> Намира се на около 8 км. северозападно от Калофер, близо до Мъжкия манастир. Тя е част от комплекса „Бяла река”, който включва още бивак и детски център за оцеляване сред природата „Джендема”.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/PA050733.JPG" />
                                <p><strong>Бивак „Бяла река”:</strong> Предлага бивакуване (къмпингуване) по брега на Бяла река. Обзаведен е с маси, пейки, огнища и WC. Бивакът е изходен пункт за преход до х. „Рай” и вр. Ботев.</p>
                                <p><strong> Бивак „Кирик”:</strong> Намира се на 3 км. северно от Калофер по пътя за м. „Паниците”, в близост до лечебния извор „Св. Кирик”. Предлага бивакуване (къмпингуване) край бреговете на р. Тунджа. Разполага с 10 комплекта маси с пейки и детски кът.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P8160073.JPG" />
                                <p>Резерват „Джендема</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/praskaloto-zaoblena.jpg" />
                                <p><strong>Водопад „Райското пръскало”</strong></p>
                                <p>Калофер е изходен пункт за покоряване на най-високия връх в Стара планина – вр. Ботев (2 376 м.) и най-високия водопад на Балканския полуостров – „Райското пръскало” (124 м.)</p>
                                <p>Маршрутът е изцяло в защитената територия на НП „Централен Балкан”. Тръгва от м. „Паниците” (7 км. северно от Калофер), преминава през местностите „Поника”, „Параджик”, „Каменливеца”, „Рогачева гора” и „Малък Купен” и след около 4 часа достига до х. „Рай”, в подножието на „Райското пръскало”. Пътеката е добре маркирана с табели, лентова маркировка в синьо и бяло и е с много места за отдих. Хижа „Рай” разполага със 112 легла, кухня, лавка и баня.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P8292494.JPG" />
                                <p><strong>вр. Ботев</strong></p>
                                <p>От х. „Рай” по панорамната „Тарзанова пътека” (зелено-бяла лентова маркировка) за около 3 ч. се достига до вр. Ботев. От върха може да се стигне за 4 ч. до х. „Плевен”, за 4.5 ч. до х. „Тъжа” и за 4 ч. до х. „Левски”. На вр. Ботев НЯМА места за пренощуване.</p>
                                <p>Калофер разполага с множество семейни хотели, къщи за гости и вили извън града. Всички те са с различен интериор – от типичния възрожденски до модерния , но каквото и да изберете ще се насладите на традиционна и съвременна българска кухня, неподправено гостоприемство и ще имате незабравими преживявания.</p>
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={kaloferCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export default Landmarks;