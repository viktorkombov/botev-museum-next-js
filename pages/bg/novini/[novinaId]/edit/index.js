import { convertFromRaw } from 'draft-js';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PostEditContent from '@/components/UI/PostEditContent';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import { useHttpClient } from '@/hooks/http-hook';
import classes from './EditPost.module.scss';
import { baseUrl } from '@/utils/data';
import { useSession } from 'next-auth/client';

const EditPost = props => {
    const [post, setPost] = useState({
        ID: '',
        Title: '',
        Content: ''
    });
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [session, loading] = useSession();
    const router = useRouter();
    const novinaId = router.query.novinaId;

    useEffect(() => {
        if (!session) {
            router.replace('/bg/login')
        }
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const responseData = await sendRequest(
                    `${baseUrl}api/novini/${novinaId}`
                );
                responseData.Content = convertFromRaw(JSON.parse(responseData.Content));
                setPost(responseData);
            } catch (err) { console.log(err) }
        };
        fetchPosts();
    }, [novinaId]);

    return (
        <Fragment>
            <SectionHeader style={{paddingTop: '12rem'}}>
                <h2>Редактиране на публикация</h2>
            </SectionHeader>
            {post.ID && <PostEditContent isEdit formTitle="Редактиране на публикация" id={post.ID} title={post.Title} editorState={post.Content} coverImage={post.CoverImage} method="PUT" />}

        </Fragment>
    )
}

export default EditPost;