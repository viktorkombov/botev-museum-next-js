import { Fragment, useState } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import classes from './Newspapers.module.scss';
import kartini_0_img from '@/assets/uploads/vestnik-duma.jpg';
import kartini_1_img from '@/assets/uploads/vestnik-budilnik.jpg';
import kartini_2_img from '@/assets/uploads/vestnik-zname.jpg';
import kartini_3_img from '@/assets/uploads/pechatna-presa.jpg';
import kartini_4_img from '@/assets/uploads/vestnik-nova-bulgaria.jpg';
import SEO from '@/components/SEO/SEO';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import Gallery from '@/components/UI/Gallery';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { botevPoetPublisherCardsContent } from '@/utils/data';

function Newspapers() {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(false);

    const pageTitle = 'Ботевите вестници';

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };
    const images = [
        { src: kartini_0_img.src, title: 'в. „Дума на българските емигранти”' },
        { src: kartini_1_img.src, title: 'в. „Будилник”, г. І, бр. 1, 1май 1873 г.' },
        { src: kartini_2_img.src, title: 'в. „Знаме”, г. І, бр.1 от 8 декември 1874' },
        { src: kartini_3_img.src, title: 'Печатната преса „Знаме”' },
        { src: kartini_4_img.src, title: 'в. „Нова България”, г. І, бр. 1, 5 май 1876 г.' }];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Христо Ботев издава 4 самостоятелни вестника. Той е съредактор и най-ценен сътрудник на Любен Каравелов при издаването на вестниците „Свобода” и „Независимост”."
                image={images[1].src}
                keywords="Ботеви вестници, ботев вестник, ботев журналист, ботев публицист"
            />
            <CarouselBootstrap items={[{ src: images[1].src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Ботевите вестници</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[0].src} onClick={() => onImageClick(0)} />
                                <p>в. „Дума на българските емигранти”</p>
                                <p>На 10 юни 1871 г. в Браила излиза брой 1 на първия самостоятелен Ботев вестник, с мотото <strong><i>„Истината е свята, свободата е мила”.</i></strong> Във в. „Дума на българските емигранти” са публикувани едни от най-ярките публицистични творби на Христо Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[1].src} onClick={() => onImageClick(1)} />
                                <p>в. „Будилник”, г. І, бр. 1, 1май 1873 г.</p>
                                <p>Едновременно с участието си в списването на в. „Независимост”, Христо Ботев започва издаването и на втория си самостоятелен вестник „Будилник”. Карикатурите в него са идейно и текстово внушени от Ботев. Те са дело на полския художник Хенрих Дембицки, приятел на Ботев и революционерите от кръга на „младите”. Във вестника Ботев публикува най-добрите си фейлетони.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[2].src} onClick={() => onImageClick(2)} />
                                <p>в. „Знаме”, г. І, бр.1 от 8 декември 1874</p>
                                <p>Вестникът е редактиран и издаван от Ботев и се превръща в орган на българската национална революция. В него намират най-пълен израз обществено-политическите, философските и естетическите възгледи на Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[3].src} onClick={() => onImageClick(3)} />
                                <p>Печатната преса „Знаме”</p>
                                <p>На нея са отпечатвани броевете на в. „Знаме” от бр. 11, с нова заглавка и първият брой на последния Ботев вестник „Нова България”. След Освобождението Киро Тулешков откупува отново печатната преса и я пренася в България. От 1960 г. е на територията на Калофер, в музея на Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src={images[4].src} onClick={() => onImageClick(4)} />
                                <p>в. „Нова България”, г. І, бр. 1, 5 май 1876 г.</p>
                                <p>Последният, четвърти вестник, основан и редактиран от Христо Ботев. Той редактира само брой 1. След смъртта му вестникът е продължен от съмишлениците му.</p>
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
                <PostAsideWrapper cardsData={botevPoetPublisherCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export default Newspapers;