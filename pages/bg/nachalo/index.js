import { Fragment, useEffect, useState } from 'react';
import watchImg from '@/images/watch.jpg';
import museumImg from '@/images/museum.jpg';
import incImg from '@/images/inc.jpg';
import classes from './Home.module.scss';
import { AccessTime, Campaign, CampaignRounded, LocalActivity } from '@mui/icons-material';
import { Button as ButtonMaterial } from '@mui/material';
import Button from '@/components/UI/Button/Button';
import ThreeCardsView from '@/components/Layouts/ThreeCardsView/ThreeCardsView';
import TwoCardsView from '@/components/Layouts/TwoCardsView';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import Delimiter from '@/components/UI/Delimiter';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import Link from 'next/link';
import { useHttpClient } from '@/hooks/http-hook';
import { uploadsUrl, baseUrl } from '@/utils/data';
// import RichTextEditor from '@/components/FormElements/RichTextEditor';

function Home(props) {
    const [posts, setPosts] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                var url = new URL(`${baseUrl}api/novini`)
                var params = { 'columns': ['ID', 'Title', 'CoverImage', 'Subtitle', 'Count', 'Date'], orderby: 'DATE', dir: 'DESC', limit: 3 }
                url.search = new URLSearchParams(params).toString();

                const responseData = await sendRequest(
                    url
                );

                setPosts(responseData);
            } catch (err) { }
        };
        fetchArtilces();
    }, []);

    return (
        <Fragment>
            <PageTransition>
                <CarouselBootstrap card={{ title: 'Добре дошли в Национален музей “Христо Ботев” - гр. Калофер', content: 'Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.', button: 'Виж повече...', link: '/bg/dobre-doshli' }}
                    items={[{ src: museumImg, title: 'Национален музей "Христо Ботев"', subtitle: "Разгледайте нашия сайт, за да научите повече за музея на Ботев в Калофер", link: "/bg/muzei/muzei-hristo-botev" }, { src: watchImg, title: "Джобен часовник", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/bg/hristo-botev/lichni-veshti" }, { src: incImg, title: "Пишещи принадлежности", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/bg/hristo-botev/lichni-veshti", }]}></CarouselBootstrap>

                <section className={classes.home}>
                    <section className={`${classes.section1} ${classes['first-section']}`}>
                        <section className={`${classes.section1} ${classes.welcome} ${classes['section--dark']}`}>
                            <article>
                                <h4>Добре дошли в Национален музей “Христо Ботев” - гр. Калофер</h4>
                                <p>Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.</p>
                                <Button>Виж повече...</Button>
                            </article>
                            <Delimiter white className={classes['first-section-delimiter']} />
                        </section>
                        <SectionHeader id="content" className={classes['first-section-header']} >
                            <h2>Актуално</h2>
                            <article>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td><AccessTime /> Работно време</td>
                                            <td>-</td>
                                            <td>всеки ден от 8.00 до 17.00 ч.</td>
                                        </tr>
                                        <tr>
                                            <td><LocalActivity /> Билети</td>
                                            <td>-</td>
                                            <td><div>за възрастни - 4 лв.,</div><div>за деца и пенсионери - 2 лв.</div></td>
                                        </tr>
                                        <tr>
                                            <td><CampaignRounded /> Беседа</td>
                                            <td>-</td>
                                            <td>15 лв. (30 мин.)</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Виж още <Link href="/bg/za-nas/za-posetiteli"><strong className={classes.link}>тук</strong></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                        </SectionHeader>
                        {/* <section className={classes.body}></section> */}
                        <h1>Актуално</h1>
                        <ThreeCardsView cards={posts} className={classes['three-cards-view']}>
                            <div className={classes['first-section-more-link']}>
                                <ButtonMaterial component={Link} className="button" href="/bg/novini" variant="outlined">Виж още новини</ButtonMaterial>
                            </div>
                        </ThreeCardsView>
                        <Delimiter />
                    </section>
                    <TwoCardsView whiteHeader
                        links={['/bg/muzei/muzei-hristo-botev', '/bg/muzei/daskal-botevo-uchilishte']}
                        images={[`${uploadsUrl}/muzey-1.jpg`, `${uploadsUrl}/uchilishte-1.jpg`]}
                        titles={['Национален музей "Христо Ботев"', 'Даскал Ботево училище']}
                        contents={['В него се съхраняват експонати, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му ... ', ' Училището е изградено по инициатива на Ботьо Петков – бащата на Христо Ботев, изцяло с дарения и доброволната помощ на калоферци ... ']}
                    >
                        <h3>Музеен комплекс</h3>
                        <Delimiter white />
                    </TwoCardsView>
                    <section className={`${classes.section1} ${classes['text-section']}`}>
                        <SectionHeader>
                            <h3>За музея на Христо Ботев</h3>
                        </SectionHeader>
                        <section className={classes['text-container']}>
                            <p>
                                Христо Ботев е роден на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911). Бащата на Ботев Ботьо Петков е учител, книжовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство. Освен Христо Ботев, двамата имат още осем децa.
                            </p>
                            <p>
                                Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.

                            </p>
                        </section>
                        <Delimiter />
                    </section>
                </section>
            </PageTransition>
        </Fragment >
    );
}

export default Home;