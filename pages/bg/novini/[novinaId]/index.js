/* eslint-disable @next/next/no-img-element */
import { convertFromRaw } from 'draft-js';
import { useEffect, useState } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import { Fragment } from 'react';
import Chip from '@/components/UI/Chip';
import { convertToLocalDate } from '@/utils/functions';
import Post from '@/components/Layouts/Post'
import { convertToHTML } from 'draft-convert';
import classes from './Novina.module.scss';
import { useRouter } from 'next/router';
import PostBody from '@/components/Layouts/Post/PostBody';
import ModalBootstrap from '@/components/UI/ModalBootstrap';
import PostAside from '@/components/Layouts/Post/PostAside';
import LoadingSpinner from '@/components/UI/LoadingSpinner';
import { baseUrl, museumCardsContent } from '@/utils/data';
import SEO from '@/components/SEO/SEO';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';

function Novina(props) {
    const { postData, novinaId } = props;
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const images = [];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }, []);

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };


    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.' + classes.anchor).forEach(anchor => {
                anchor.addEventListener('click', (e) => {

                    if (anchor.href.includes(baseUrl)) {
                        if (anchor.href.includes('uploads/')) {
                            anchor.href.replace('/bg/novini', '');
                            return;
                        }

                        e.preventDefault();
                        router.replace(anchor.href?.replace(baseUrl, ''))
                    }


                });
            });
            document.querySelectorAll('.' + classes['image-wrapper']).forEach((image, i) => {
                image.addEventListener('click', () => {
                    onImageClick(i);
                });
            });
        }, 500);

    }, []);

    const postContent = JSON.parse(postData?.Content);

    const html = postContent ? convertToHTML({
        blockToHTML: (block) => {
            if (block.type === 'PARAGRAPH') {
                return <p />;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                entity.data.url = entity.data.url.startsWith('http') ? entity.data.url : (baseUrl + entity.data.url);
                return <a className={classes.anchor} href={entity.data.url}>{originalText}</a>;
            } else if (entity.type === 'IMAGE') {
                images.push({ src: baseUrl + entity.data.src, title: entity.data.alt });
                return (<div>
                    <div className={classes['image-wrapper']}>
                        <img
                            src={baseUrl + "/" + entity.data.src}
                            alt={entity.data.alt}
                        />
                    </div>
                    <div className='image-title'>
                        {entity.data.alt}
                    </div>
                </div>);
            }
            return originalText;
        }
    })(convertFromRaw(postContent)) : '';

    console.log(images);
    return (
        <Fragment>
            <SEO
                title={postData?.Title}
                description={postData?.Subtitle}
                image={postData?.CoverImage}
                keywords={postData?.Keywords}
            />
            {postData ? (<Fragment>
                <CarouselBootstrap items={[{ src: baseUrl + postData.CoverImage, title: postData.Title }]}></CarouselBootstrap>
                <Post>
                    {!loading ? (
                        <PostBody history={{ nachalo: 'Начало', novini: 'Новини', currentPage: postData.Title }}>
                            <Fragment>
                                <section className={classes.heading}>
                                    <h1>{postData.Title}</h1>
                                    <div className={classes.chips}>
                                        <Chip iconLeft="timePosted">{convertToLocalDate(postData.Date)}</Chip>
                                        <Chip iconLeft="visited">{postData.Count}</Chip>
                                    </div>
                                </section>
                                <div dangerouslySetInnerHTML={{ __html: html }} className={classes.content}></div>
                                <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                                    <CarouselBootstrap
                                        items={images}
                                        index={imageIndex}
                                        type="gallery"
                                    ></CarouselBootstrap>
                                </ModalBootstrap>
                            </Fragment>
                        </PostBody>
                    ) : <LoadingSpinner />}
                    <PostAsideWrapper cardsData={museumCardsContent} />

                </Post>
            </Fragment>) : <h2>Страницата не е открита</h2>}
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    const novinaId = context.query.novinaId;
    try {
        const mainArticle = await fetch(
            `${baseUrl}api/novini/${novinaId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await mainArticle.json();
        return {
            props: {
                postData: responseData,
                novinaId
            }
        };
    } catch (err) {
        return {
            props: {
                postData: {}
            }
        }
    }
}

export default Novina;