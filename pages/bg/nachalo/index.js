import { Fragment, useEffect, useState } from 'react';
import watchImg from '@/assets/uploads/watch.jpg';
import museumImg from '@/assets/uploads/muzey-1.jpg';
import uchilishteImg from '@/assets/uploads/uchilishte-1.jpg';
import incImg from '@/assets/uploads/inc.jpg';
import classes from './Home.module.scss';
import { AccessTime, CampaignRounded, LocalActivity } from '@mui/icons-material';
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
import Head from 'next/head';
import SEO from '@/components/SEO/SEO';
// import RichTextEditor from '@/components/FormElements/RichTextEditor';

function Home(props) {
    const [posts, setPosts] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                var url = new URL(`${baseUrl}api/novini`)
                var params = { 'columns': ['ID', 'Title', 'CoverImage', 'Subtitle', 'Count', 'Date'], orderby: 'DATE', dir: 'DESC', limit: 3 };
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
            <SEO
                title="Начало"
                description="Сайтът на Национален музей “Христо Ботев”"
                image={museumImg.src}
                keywords="Родната къща на Христо Ботев, Къща музей “Христо Ботев”"
            />
            <CarouselBootstrap card={{ title: 'Добре дошли в Национален музей “Христо Ботев” - гр. Калофер', content: 'Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.', button: 'Виж повече...', link: '/bg/dobre-doshli' }}
                items={[{ src: museumImg.src, title: 'Национален музей "Христо Ботев"', subtitle: "Разгледайте нашия сайт, за да научите повече за музея на Ботев в Калофер", link: "/bg/muzei/muzei-hristo-botev" }, { src: watchImg.src, title: "Джобен часовник", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/bg/hristo-botev/lichni-veshti" }, { src: incImg.src, title: "Писалищни принадлежности", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/bg/hristo-botev/lichni-veshti", }]}></CarouselBootstrap>

            <section className={classes.home}>
                <section className={`${classes.section1} ${classes['first-section']}`}>
                    <section className={`${classes.section1} ${classes.welcome} ${classes['section--dark']}`}>
                        <article>
                            <h4>Добре дошли в Национален музей “Христо Ботев” - гр. Калофер</h4>
                            <p>Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.</p>
                            <Link href="/bg/dobre-doshli"><Button>Виж повече...</Button></Link>
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
                                        <td>всеки ден от 8.30 до 17.00 ч.</td>
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
                    links={['/bg/muzei/muzei-hristo-botev', '/bg/muzei/uchilishte']}
                    images={[museumImg, uchilishteImg]}
                    titles={['Национален музей "Христо Ботев"', 'Даскал Ботево училище']}
                    contents={['В него се съхраняват експонати, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му ... ', ' Училището е изградено по инициатива на Ботьо Петков – бащата на Христо Ботев, изцяло с дарения и доброволната помощ на калоферци ... ']}
                >
                    <h3>Музеен комплекс</h3>
                    <Delimiter white />
                </TwoCardsView>
                <section className={`${classes.section1} ${classes['text-section']}`}>
                    <SectionHeader>
                        <h3>Добре дошли в сайта на Музей &quot;Христо Ботев&quot;, гр. Калофер!</h3>
                    </SectionHeader>
                    <section className={classes['text-container']}>
                        <p>Тук ще намерите исторически данни за патрона на музея - гениален поет, публицист, мислител, хуманист, револиционер и войвода.</p>
                        <p><i>Актуална информация за музейните обекти и постоянните експозиции, за дейността на музея, за предстоящи събития, за историята и забележителностите на град Калофер и пленяващата му природа. Вярваме, че ще ви бъдем полезни!</i></p>
                        <p>НМ „Христо Ботев”, Калофер е изграден на мястото, където се е намирала последната къща на Ботевото семейство. Музейният комплекс е разположен в парк „Ботева градина”, създаден през 1926 г. и включва следните обекти – мемориална къща-музей, експозиционна зала, паметника на Ботев от 1930 г. и паметника на Иванка Ботева - майката на поета. Цялият ансамбъл е обявен за групов паметник на културата – историческо място с национално значение.Основен елемент в комплекса е къщата, в която е живял най-дълго Ботев. Той не е роден в нея, но я нарича „роден дом, защото тук прекарва детството си. В тази къща се завръща след учението си в Одеса и учителстването в Задунаевка. В нея получава и броя от Славейковия вестник „Гайда”, в който е публикувано първото му стихотворение „Майце си”. От този дом Ботев тръгва за „черна чужбина”, за да отдаде „сили и младост” за свободата на любимото си Отечество. Къщата е разрушена при опожаряването на града през 1877 г. По инициатива на калоферското гражданство и родолюбиви българи от цялата страна, сградата е възстановена по спомени на Ботевия брат о.з. ген. Кирил Ботев и по-стари калоферци. Проектът е разработен от арх. Балтаджиев и строежът започва през 1942 г. Официално е открита като музей на 2 юни 1944 г.</p>
                    </section>
                    <Delimiter />
                </section>
            </section>
        </Fragment >
    );
}

export default Home;