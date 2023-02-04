import { Fragment, useEffect, useState } from 'react';
import watchImg from '@/images/watch.jpg';
import museumImg from '@/images/museum.jpg';
import incImg from '@/images/inc.jpg';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import Delimiter from '@/components/UI/Delimiter';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import Link from 'next/link';

import classes from '@/pages/bg/nachalo/Home.module.scss';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import Button from '@/components/UI/Button';

function HomeEN (props) {
    return (<Fragment>
        <PageTransition>
            <CarouselBootstrap
                en
                type="withCard"
                card={{ title: 'Welcome to the website of the National Museum "Hristo Botev" Kalofer', content: 'In it you will find historical data cartridge of the museum - a brilliant poet, journalist, philosopher, humanist, and revolitsioner leader.', button: 'More...', link: '/en/welcome' }}
                items={[{ src: museumImg }]}
            >
            </CarouselBootstrap>

            <section className={classes.home}>
                <section className={`${classes.section1} ${classes['text-section']} `}>
                    <section className={`${classes.section1} ${classes.welcome} ${classes['section--dark']}`}>

                        <article>
                            <h4>Welcome to the website of the National Museum &quot;Hristo Botev&quot; Kalofer</h4>
                            <p>In it you will find historical data cartridge of the museum - a brilliant poet, journalist, philosopher, humanist, and revolitsioner leader.</p>
                            <Link href='/en/welcome'><Button>More...</Button></Link>
                        </article>
                        <Delimiter white className={classes['first-section-delimiter']} />
                    </section>
                    <SectionHeader id="content">
                        <h3>About Hristo Botev</h3>
                    </SectionHeader>


                    <section className={classes['text-container']}>
                        <p>
                            Hrìsto Bòtev (6 January 1848 [O.S. 25 December 1847] – 1 June [O.S. 20 May] 1876), born Hristo Botyov Petkov , was a Bulgarian poet and national revolutionary. Botev is widely considered by Bulgarians to be a symbolic historical figure and national hero.
                        </p>
                        <FloatingImage src="https://muzeibotev.com/clients/152/files/images/Botev-gravir.jpg" title="Hristo Botev" />
                        <p>
                            Botev was born in Kalofer (some historians suggested that he was born in Karlovo and after several days was brought to Kalofer). His father, Botyo Petkov (1815–1869), was a teacher and one of the most significant figures of the late period of the Bulgarian National Revival towards the end of the Ottoman occupation.[1] He had a strong influence on his son during the latter&quot;s youth. In 1863, after completing his elementary education in Kalofer, Botev was sent by his father to a high school in Odessa. While there, he was deeply impressed by the work of the liberal Russian poets of the day.
                        </p>
                        <p>
                            He left high school in 1865 and spent the next two years teaching in Odessa and Bessarabia. In the meantime he began creating his first poetic works and also established strong connections with the Russian and Polish revolutionary movement. His political views soon started to take shape. Botev returned to Kalofer at the beginning of 1867, where he temporarily replaced his ill father as a teacher.[2] In May, during the festivities celebrating Saints Cyril and Methodius (it was his father who first organised at the end of the school year such festivities which today correspond to Bulgaria&quot;s national holiday on 24 May), he made a public speech against the Ottoman authorities and the wealthy Bulgarians (whom he alleged were collaborating with the Ottomans).
                        </p>
                        <p>
                            Botev was pressed into leaving the town as a result. He initially decided he would return to Russia, but due to lack of money instead opted for Romania, at the time an asylum for many Bulgarian exiles.
                        </p>
                    </section>
                    <Delimiter />
                </section>
            </section>
        </PageTransition>
    </Fragment >);
}

export default HomeEN;