import { convertFromRaw } from 'draft-js';
import { useEffect, useState } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { useHttpClient } from '@/hooks/http-hook';
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
import { baseUrl } from '@/utils/data';

function Novina(props) {
    const [postData, setPostData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const router = useRouter();
    const postId = router.query.postId;
    const images = [];

    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                const mainArticle = await sendRequest(
                    `http://localhost:5000/api/posts/${postId}`
                );
                setPostData(mainArticle);
            } catch (err) { }
        };
        fetchArtilces();
    }, []);

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };


    useEffect(() => {
        document.querySelectorAll('.' + classes.anchor).forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                if (anchor.href.includes(baseUrl)) {
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
    }, [postData, router]);

    const postContent = postData.Content;
    console.log(postData);

    const html = postContent ? convertToHTML({
        blockToHTML: (block) => {
            if (block.type === 'PARAGRAPH') {
                return <p />;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a className={classes.anchor} href={entity.data.url}>{originalText}</a>;
            } else if (entity.type === 'IMAGE') {
                images.push({ src: 'http://localhost:5000/' + entity.data.src, title: entity.data.alt });
                return (<div>
                    <div className={classes['image-wrapper']}>
                        <img
                            src={'http://localhost:5000/' + entity.data.src}
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
        <PageTransition>
            <CarouselBootstrap items={[{ src: 'http://localhost:5000/' + postData.CoverImage, title: postData.Title }]}></CarouselBootstrap>
            {/* <PostEditContent /> */}
            <Post>
                {!isLoading ? (
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
                <PostAside id={postId} />
            </Post>
        </PageTransition>

    );
}

export default Novina;