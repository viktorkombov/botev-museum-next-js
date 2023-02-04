import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { hristoBotevCardsContent, uploadsUrl } from '@/utils/data';
import classes from './Paintings.module.scss';

function Paintings() {
    const pageTitle = 'Ботев в изобразителното изкуство';
    return (
        <PageTransition>
            <CarouselBootstrap type="withCard" items={[{ src: `${uploadsUrl}/v-mehanata.jpg`, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <p>Образът на Христо Ботев е претворяван от почти всички известни български художници – живописци, графици, скулптури, плакатисти, карикатуристи. Всеки от тях се е опитвал, както се е изразил Стоян Заимов, „да характеризира Ботева с най-ярки и гъсти краски”.</p>
                            <p>В Национален музей „Христо Ботев” се съхраняват едни от най-известните произведения на българските творци, пресъздали образа на Ботев като: Димитър Гюдженов, Златю Бояджиев, Никола Вълчев, Александър Поплилов, Йоан Левиев, Георги Герасимов, Стоимен Стоилов, Васил Гачев и др. Част от тях са експонирани в Картинната галерия към музея и в постоянната му експозиция.</p>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/Botev-gravir.jpg" />
                                <p><strong>Неизвестен автор, Христо Ботев, гравюра, 1888 г., Лайпциг</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1387.JPG" />
                                <p><strong>Никола Вълчев, В механата, 1957 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1388.JPG" />
                                <p><strong>Димитър Гюдженов, Слизането на Ботевата чета при Козлодуй, 1975 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P3070976.JPG" />
                                <p><strong>Димитър Гюдженов, Портрет на Христо Ботев, 1949 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0078.JPG" />
                                <p><strong>Васил Гачев, Христо Ботев, мрамор, 1959 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1466.JPG" />
                                <p><strong>Георги Герасимов, Вдъхновеният поет, медна гравюра, 1949 г.</strong></p>
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle}/>
            </Post>
        </PageTransition>

    );
}

export default Paintings;