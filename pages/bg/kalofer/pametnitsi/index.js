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
import classes from './Memorials.module.scss';

function Memorials() {
    const pageTitle = 'Паметници и паметни места';
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
            <CarouselBootstrap type="withCard" items={[{ src: `${uploadsUrl}/pametnik-ivanka-boteva.jpg`, title: pageTitle }]}></CarouselBootstrap>
            <Post>
            <PostBody history={{ nachalo: 'Начало', null: 'Калофер', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_3.JPG" />
                                <p><strong>Паметникът на Калифер войвода, скулптор Христо Песев, 1975 г.</strong></p> <p><strong></strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0213.JPG" />
                                <p><strong>Гробът на Калифер войвода – легендарният основател на града</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0083.JPG" />
                                <p><strong>Бюст-паметник на Христо Ботев, скулптор Кирил Георгиев, 1930 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IM001261.JPG" />
                                <p><strong>Паметник на майката на Ботев, скулптор проф. Иван Мандов, 1980 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0119.JPG" />
                                <p><strong>Паметникът на Ботьо Петков, скулптор Марко Марков, 1980 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_10%20kamuk%20pred%20uchilishteto.jpg" />
                                <p><strong>Камъкът, от който Христо Ботев произнася огнената си реч на 11 май 1867 г., намира се пред Даскал Ботевото училище</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0088.JPG" />
                                <p><strong>Войнишки паметник-чешма на загиналите във войните калоферци</strong></p>
                            </div>
                            <div style={{padding: '2rem 0 1rem 0'}}>
                                <h3>Манасири и църкви</h3>
                                <p>В град Калофер още през епохата на Българското възраждане са изградени шест църкви, два манастира и три метоха.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IM001271.JPG" />
                                <p><strong>Храм „Успение на Св. Богородица”</strong></p>
                                <p>Построен е през 1848 г. и се намира се в центъра на града. Северозападно от него, под сводеста постройка с колони, е лечебното аязмо. До него е поставена мраморна плоча, отбелязваща мястото на стария Светогорски метох и училище. В една от стаите на това училище се ражда Христо Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P5083846.JPG" />
                                <p><strong>Храм „Св. Архангел Михаил”</strong></p>
                                <p>Сградата е голяма по обем, доминира над града и се вижда от пътя, влизащ в него. Графично изображение на храма илюстрира разказа за Калофер на Феликс Каниц в “Histoire de la guerre d’Orient 1877-1878 и Каниц, “Donau - Bulgarien und der Balkan”. В олтарното пространство са запазени стенописи, работени от Георги Данчов-Зографина през 1870-1871г. В сегашния си вид църквата е изградена от Уста Генчо от Трявна.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P4243552.JPG" />
                                <p>В Девическия манастир „Св. Въведение Богородично”, създаден в началото на ХVІІІ се намира църква със същото име. В сегашния си вид е от 1862 г. След Освобождението е възстановен с руски средства и църквата е украсена с руски икони най-ценните, от които са копия на: Казанска , Тихвенска  и Смоленска Св. Богородица. В храма се намира аязмо, вкопано на 2,50 м. под подовото ниво. Според преданието водата му е лечебна.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/PA288405.JPG" />
                                <p>Извън града, в чудно красива местност, е разположен и прочутият в миналото мъжки манастир „Св. Рождество Богородично”. Той е основан в 1606 г. и става известен с храмовата си икона, която според легендата имала чудотворна сила.</p>
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={kaloferCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export default Memorials;