import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import inc from '@/images/inc.jpg'
import PageTransition from '@/components/UI/PageTransition';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { hristoBotevCardsContent } from '@/utils/data';

function Belongings() {
    const pageTitle = 'Лични вещи';
    return (
        <PageTransition>
            <CarouselBootstrap items={[{ src: inc, title: pageTitle }]}></CarouselBootstrap>
            <Post>
            <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem'}}>
                                <p><strong>Джобен часовник</strong></p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_55-1djoben%20chasovnik.JPG" title="Джобният часовник на Хр. Ботев" />
                                <p>Джобният часовник на Христо Ботев. Часовникът е принадлежал на Ботьо Петков. Той го подарява на сина си при заминаването му за втори път за Русия, когато Ботев се установява в Румъния. През 1875 г. Ботев и Иван Драсов си разменят джобните часовници, в знак на най-искрено приятелство и по този начин тази безценна реликва е запазена. Потомците на Драсов предават часовника на Института “Ботев-Левски”, а след закриването му той е предаден, заедно с много други материали на Къща-музей “Христо Ботев”, Калофер.</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto'}}>
                                <p><strong>Пишещи принадлежности</strong></p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/pic_6%20pisalishtni%20botevi%20prinadlejnosti.JPG" title="Пишещите принадлежности на Хр. Ботев" />
                                <p>Личните писалищни принадлежности на Христо Ботев включват преса за попиване на мастилото, мастилница от синьо стъкло и поставка за перодръжки с формата на подкова. Изработени са от месинг и са използвани от поета през последните години от живота му. Запазени са от неговата майка, която по-късно ги подарява на племенника си Стефан Дрянков, от когото са откупени през 1972 г. и стават притежание на музея.</p>
                                {/* <Delimiter /> */}
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </PageTransition>

    );
}

export default Belongings;