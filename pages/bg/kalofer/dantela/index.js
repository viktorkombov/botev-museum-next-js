import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Gallery from '@/components/UI/Gallery';
import { kaloferCardsContent, uploadsUrl } from '@/utils/data';
import classes from './KaloferskaDantela.module.scss';

function KaloferskaDantela() {
    const pageTitle = 'Калоферска дантела';
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
            <CarouselBootstrap type="withCard" items={[{ src: `${uploadsUrl}/kaloferska-dantela.jpg`, title: pageTitle }]}></CarouselBootstrap>
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
                        <Gallery images={images} />
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={kaloferCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default KaloferskaDantela;