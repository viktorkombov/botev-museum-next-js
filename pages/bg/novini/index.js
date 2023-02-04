import img from '@/images/watch.jpg';
import image from '@/images/museum.jpg';
import image1 from '@/images/uchilishte.jpg';
import classes from './Novini.module.scss';
import Card from '@/components/UI/Card';
import History from '@/components/Layouts/History';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { Pagination, Skeleton } from '@mui/material';
import { useState } from 'react';

function GridView() {
    const [isLoading, setIsLoading] = useState(true);
    const onPageChange = (e, page) => {
        setIsLoading(!isLoading)
    }
    return (
        <PageTransition>
            <CarouselBootstrap type="withCard" items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "150 години от смъртта на Ботев" }, { src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "150 години от смъртта на Ботев" }]}></CarouselBootstrap>
            <History>
            </History>
            <section className={classes['grid-view-wrapper']}>
                <h2>Последни новини</h2>
                {isLoading ? (<section className={classes['grid-view']}>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                            <Skeleton className={`${classes.card} ${classes.skeleton}`} height="100%"/>
                </section>)
                :
                (<section className={classes['grid-view']}>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={img}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={img}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            link="asd"
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                </section>)}
                <div className={classes.paging}>
                    <Pagination count={10} onChange={onPageChange}/>
                </div>
            </section>
        </PageTransition >
    );
}

export default GridView;