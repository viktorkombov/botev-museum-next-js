import { Fragment } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import classes from './WelcomeEN.module.scss';
import Image from 'next/image';
import welcome_0_img from '@/assets/uploads/biyust-hristo-botev.jpg';
import welcome_1_img from '@/assets/uploads/botev1.jpg';
import SEO from '@/components/SEO/SEO';

function WelcomeEN() {
    const pageTitle = 'Welcome';

    const images = [
        { src: welcome_0_img.src, title: pageTitle },
        { src: welcome_1_img.src }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Welcome to Hristo Botev Museum!"
                image={images[0].src}
                keywords="hristo botev museum welcome"
            />
            <CarouselBootstrap items={[images[0]]} en></CarouselBootstrap>
            <SectionHeader id="content">
                <h2>Welcome to Hristo Botev Museum!</h2>
            </SectionHeader>
            <section className={classes.content}>
                <p>
                    Welcome to the website of the National Museum &quot;Hristo Botev&quot; Kalofer. In it you will find historical data cartridge of the museum - a brilliant poet, journalist, philosopher, humanist, and revolitsioner leader.
                </p>
                <p><i>
                    Date information about museum objects and permanent exhibitions for the museum for upcoming events, the history and sights of Kalofer and captivating scenery. Believe will be helpful!
                </i></p>
                <div className={classes['image-wrapper']}>
                    <Image src={images[1].src} alt="Image" fill />
                </div>
            </section>
        </Fragment>
    );
}

export default WelcomeEN;