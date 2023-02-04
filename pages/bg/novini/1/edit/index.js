import { convertFromRaw } from 'draft-js';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PostEditContent from '@/components/UI/PostEditContent';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import { useHttpClient } from '@/hooks/http-hook';
import classes from './EditPost.module.scss';

const EditPost = props => {
    const [post, setPost] = useState({
        ID: '',
        Title: '',
        Content: ''
    });
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const postId = useRouter().query.postId;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/posts/${postId}`
                );
                responseData.Content = convertFromRaw(responseData.Content);
                setPost(responseData);
            } catch (err) { console.log(err) }
        };
        fetchPosts();
    }, [postId]);

    return (
        <Fragment>
            <SectionHeader>

            </SectionHeader>
            <SectionHeader>

            </SectionHeader>
            <SectionHeader>
                <h2>Редактиране на публикация</h2>
            </SectionHeader>
            {post.ID && <PostEditContent formTitle="Редактиране на публикация" id={post.ID} title={post.Title} editorState={post.Content} coverImage={post.CoverImage} method="PUT" />}

        </Fragment>
    )
}

export default EditPost;