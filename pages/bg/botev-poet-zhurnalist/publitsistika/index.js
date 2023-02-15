import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import classes from './Newspapers.module.scss';

function Newspapers() {
    return (
        <Fragment>
            <CarouselBootstrap type="withCard" items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "150 години от смъртта на Ботев" }, { src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "150 години от смъртта на Ботев" }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Ботевите вестници</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_16vestnik.jpg" />
                                <p>в. „Дума на българските емигранти”</p>
                                <p>На 10 юни 1871 г. в Браила излиза брой 1 на първия самостоятелен Ботев вестник, с мотото <strong><i>„Истината е свята, свободата е мила”.</i></strong> Във в. „Дума на българските емигранти” са публикувани едни от най-ярките публицистични творби на Христо Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_18vestnik.jpg" />
                                <p>в. „Будилник”, г. І, бр. 1, 1май 1873 г.</p>
                                <p>Едновременно с участието си в списването на в. „Независимост”, Христо Ботев започва издаването и на втория си самостоятелен вестник „Будилник”. Карикатурите в него са идейно и текстово внушени от Ботев. Те са дело на полския художник Хенрих Дембицки, приятел на Ботев и революционерите от кръга на „младите”. Във вестника Ботев публикува най-добрите си фейлетони.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/Zname.jpg" />
                                <p>в. „Знаме”, г. І, бр.1 от 8 декември 1874</p>
                                <p>Вестникът е редактиран и издаван от Ботев и се превръща в орган на българската национална революция. В него намират най-пълен израз обществено-политическите, философските и естетическите възгледи на Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_47pechatnata%20presa%20botevi%20vestnici.jpg" />
                                <p>Печатната преса „Знаме”</p>
                                <p>На нея са отпечатвани броевете на в. „Знаме” от бр. 11, с нова заглавка и първият брой на последния Ботев вестник „Нова България”. След Освобождението Киро Тулешков откупува отново печатната преса и я пренася в България. От 1960 г. е на територията на Калофер, в музея на Ботев.</p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/Nova-bylgaria.jpg" />
                                <p>в. „Нова България”, г. І, бр. 1, 5 май 1876 г.</p>
                                <p>Последният, четвърти вестник, основан и редактиран от Христо Ботев. Той редактира само брой 1. След смъртта му вестникът е продължен от съмишлениците му.</p>
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAside>
                    <h3 className={classes.heading}>Виж още</h3>
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                </PostAside>
            </Post>
        </Fragment>

    );
}

export default Newspapers;