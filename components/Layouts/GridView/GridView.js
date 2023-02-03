import img from '../../../images/watch.jpg';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import classes from './GridView.module.scss';
import Card from '../../UI/Card';
import SideImageCard from '../../UI/SideImageCard';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { Fragment } from 'react';
import History from '../History';
import CarouselBootstrap from '../../UI/CarouselBootstrap';
import PageTransition from '../../UI/PageTransition';

const GridView = props => {
    return (
        <PageTransition>
            <CarouselBootstrap type="withCard" items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "150 години от смъртта на Ботев" }, { src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "150 години от смъртта на Ботев" }]}></CarouselBootstrap>
            <History>
            </History>
            <section className={classes['grid-view-wrapper']}>
                <h2>Последни новини</h2>
                <section className={classes['grid-view']}>
                    <div className={`${classes.card} ${classes['first-card']}`}>
                        <Card
                            media
                            img={img}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={img}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>

                </section>
                <h2>Октомври 2022 г.</h2>
                <section className={classes['grid-view']}>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={img}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                </section>
            </section>
        </PageTransition >
    );
}

export default GridView;