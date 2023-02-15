import { Fragment } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import classes from './WelcomeEN.module.scss';
import Image from 'next/image';

function WelcomeEN() {
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: "https://static.dir.bg/uploads/images/2019/01/08/1633107/768x.jpg?_=1546936270", title: "Welcome" }]}></CarouselBootstrap>

            <SectionHeader>
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
                    <Image src="https://muzeibotev.com/clients/152/files/images/934698_555896467786323_1042209498_n.jpg" alt="" fill />
                </div>
            </section>
        </Fragment>
    );
}

export default WelcomeEN;