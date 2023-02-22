import classes from './Novini.module.scss';
import Card from '@/components/UI/Card';
import { Pagination, Skeleton } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { baseUrl } from '@/utils/data';
import { sendRequest } from '@/utils/httpRequest';
import SectionHeader from '@/components/UI/SectionHeader';
import LoadingSpinner from '@/components/UI/LoadingSpinner';
import SEO from '@/components/SEO/SEO';
import houseMuseumIMG from '@/assets/uploads/muzey-11.jpg';


function GridView({ totalRecords }) {
    const [isLoading, setIsLoading] = useState(true);
    const [initialTransition, setInitialTransition] = useState(true);
    const [novini, setNovini] = useState([]);
    const pageTitle = 'Новини'

    async function fetchArticles(page = 1) {
        const skip = (page - 1) * 10;
        try {
            var url = new URL(`${baseUrl}api/novini`)
            var params = { 'columns': ['ID', 'Title', 'CoverImage', 'Subtitle', 'Count', 'Date'], orderby: 'DATE', dir: 'DESC', limit: skip + ',' + 10 }
            url.search = new URLSearchParams(params).toString();

            const responseData = await sendRequest(
                url
            );

            setNovini(responseData);
            setIsLoading(false);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArticles();
        setTimeout(() => {
            setInitialTransition(false);
        }, 300)
    }, []);


    const onPageChange = (e, page) => {
        setIsLoading(true);
        fetchArticles(page);
    }
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Новини - Музей „Христо Ботев”"
                image={houseMuseumIMG.src}
                keywords="музей христо новини, ботев актуално, актуално, новини"
            />
            {initialTransition && <LoadingSpinner asOverlay />}
            <SectionHeader style={{ paddingTop: '12rem' }}>
                <h2>Последни новини</h2>
            </SectionHeader>
            <section className={classes['grid-view-wrapper']}>
                <h2>Най-новото от музея</h2>
                {isLoading ? (<section className={classes['grid-view']}>
                    {Array(10).fill(null).map((n, i) =>
                        <Skeleton key={i} className={`${classes.card} ${classes.skeleton}`} height="100%" />)}
                </section>)
                    :
                    (<section className={classes['grid-view']}>
                        {novini.map(novina => (
                            <div key={novina.ID} className={classes.card}>
                                <Card
                                    link={`/bg/novini/${novina.ID}`}
                                    media
                                    img={baseUrl + novina.CoverImage}
                                    title={novina.Title}
                                    content={novina.Subtitle}
                                    count={novina.Count}
                                    date={novina.Date}
                                    button="Виж повече..."
                                />
                            </div>
                        ))}
                    </section>)}
                <div className={classes.paging}>
                    <Pagination count={Math.ceil(totalRecords / 10)} onChange={onPageChange} />
                </div>
            </section>
        </Fragment >
    );
}

export async function getServerSideProps(context) {
    try {
        var url = new URL(`${baseUrl}api/novini`)
        var params = { 'columns': ['COUNT(*)'] }
        url.search = new URLSearchParams(params).toString();

        const mainArticle = await fetch(
            url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await mainArticle.json();
        return {
            props: {
                totalRecords: responseData[0]['COUNT(*)'],
            }
        };
    } catch (err) {
        return {
            props: {
                totalRecords: 0
            }
        }
    }
}

export default GridView;