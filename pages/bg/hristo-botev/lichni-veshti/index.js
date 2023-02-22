import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import inc from '@/images/inc.jpg'
import PageTransition from '@/components/UI/PageTransition';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { hristoBotevCardsContent } from '@/utils/data';

import veshti_0_img from '@/assets/uploads/muzey-20.jpg';
import veshti_1_img from '@/assets/uploads/dzhoben-chasovnik.jpg';
import veshti_2_img from '@/assets/uploads/pisalishtni-prinadlezhnosti.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';

function Belongings() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Лични вещи';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: veshti_1_img.src, title: "Джобният часовник на Христо Ботев" },
        { src: veshti_2_img.src, title: "Писалищните принадлежности на Христо Ботев" },
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Джобният часовник на Христо Ботев. Часовникът е принадлежал на Ботьо Петков. Той го подарява на сина си при заминаването му за втори път за Русия, когато Ботев се установява в Румъния."
                image={images[1].src}
                keywords="Лични вещи на Христо Ботев, вещи, Ботев"
            />
            <CarouselBootstrap items={[{ src: images[0].src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'Христо Ботев', pageTitle: pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem' }}>
                                <p><strong>Джобен часовник</strong></p>
                                <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <p>Джобният часовник на Христо Ботев. Часовникът е принадлежал на Ботьо Петков. Той го подарява на сина си при заминаването му за втори път за Русия, когато Ботев се установява в Румъния. През 1875 г. Ботев и Иван Драсов си разменят джобните часовници, в знак на най-искрено приятелство и по този начин тази безценна реликва е запазена. Потомците на Драсов предават часовника на Института “Ботев-Левски”, а след закриването му той е предаден, заедно с много други материали на Къща-музей “Христо Ботев”, Калофер.</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto' }}>
                                <p><strong>Писалищни принадлежности</strong></p>
                                <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                                <p>Личните писалищни принадлежности на Христо Ботев включват преса за попиване на мастилото, мастилница от синьо стъкло и поставка за перодръжки с формата на подкова. Изработени са от месинг и са използвани от поета през последните години от живота му. Запазени са от неговата майка, която по-късно ги подарява на племенника си Стефан Дрянков, от когото са откупени през 1972 г. и стават притежание на музея.</p>
                                {/* <Delimiter /> */}
                            </div>
                        </Fragment>
                        <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                            <CarouselBootstrap
                                items={images}
                                index={imageIndex}
                                type="gallery"
                            ></CarouselBootstrap>
                        </ModalBootstrap>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={hristoBotevCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default Belongings;