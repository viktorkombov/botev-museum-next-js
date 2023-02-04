import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import CustomizedTimeLine from '@/components/UI/CustomizedTimeLine';
import Gallery from '@/components/UI/Gallery';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Letopis.module.scss';

function Letopis() {
    const pageTitle = 'Летопис';
    const images = [
        {
            src: "https://muzeibotev.com/clients/152/files/images/sn_5%20semeistvo.jpg",
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
        <PageTransition>
            <CarouselBootstrap items={[{ src: `${uploadsUrl}/kalofer-ot-visoko2.jpg`, title: pageTitle }]} />
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment >
                            <h2>{pageTitle}</h2>
                            <CustomizedTimeLine />
                            <h4>Галерия:</h4>
                        </Fragment>
                        <Gallery images={images} />
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </PageTransition>

    );
}

export default Letopis;