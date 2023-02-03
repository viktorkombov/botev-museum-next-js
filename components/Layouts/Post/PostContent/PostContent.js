import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { useHttpClient } from '../../../../hooks/http-hook';
import CarouselBootstrap from '../../../UI/CarouselBootstrap';
import Chip from '../../../UI/Chip';
import Gallery from '../../../UI/Gallery';
import Image from '../../../UI/Image';
import ModalBootstrap from '../../../UI/ModalBootstrap';
import classes from './PostContent.module.scss';

const PostContent = props => {
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [articlesData, setArticlesData] = useState([]);
    const images = [];

    const articles = articlesData.map(article => {
        const articleContentBlocks = JSON.parse(article.Content).blocks;
        const articleContentEntityMap = JSON.parse(article.Content).entityMap;
        const forRender = articleContentBlocks.map(block => {
            if (block.type === 'atomic') {
                const entity = articleContentEntityMap[block.entityRanges[0].key];
                const src = entity.data.src;
                const title = entity.data.alt;
                return (<Fragment>
                    <Image
                        type="post"
                        rec={{ src: src }}
                        onImageClick={() => console.log('kokojambo')}
                    />
                    <div className='image-title'>
                        {title}
                    </div>
                </Fragment>);
            } else {
                return <div dangerouslySetInnerHTML={{ __html: draftToHtml({ blocks: [block], entityMap: {} }) }}></div>;
            }
        });

        return (
            <>
                <h4>{article.Title}</h4>
                {forRender}
            </>
        )
    });
    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/articles`
                );
                setArticlesData(responseData)
            } catch (err) { }
        };
        fetchArtilces();
    }, []);

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };

    return (
        <Fragment>
            <h2 className={classes.heading}>
                Изложба за Христо Ботев по случай 175-годишнината от рождението му
            </h2>
            <div className={classes.chips}>
                <Chip iconLeft="author">Виктор Комбов</Chip>
                <Chip iconLeft="timePosted">12 юни 2022 г., 01:09 ч.</Chip>
                <Chip iconLeft="visited">32112</Chip>
            </div>
            <div className={classes["post-content"]}>
                {articles}

                <Gallery images={images} onImageClick={onImageClick} />
                <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                    <CarouselBootstrap
                        items={images}
                        index={imageIndex}
                        type="gallery"
                    ></CarouselBootstrap>
                </ModalBootstrap>
            </div>
        </Fragment>
    );
}
export default PostContent;