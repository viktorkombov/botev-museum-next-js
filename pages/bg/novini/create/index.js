import { Fragment, useEffect, useState } from 'react';
import PostEditContent from '@/components/UI/PostEditContent';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import classes from './NewPost.module.scss';
import LoadingSpinner from '@/components/UI/LoadingSpinner';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

function NewPost() {
    const [isLoading, setIsLoading] = useState(true);
    const [session, loading] = useSession();
    const router = useRouter();
    const novinaId = router.query.novinaId;

  
    useEffect(() => {
        if (session) {
            setTimeout(() => {
                setIsLoading(false);
              }, 300);
        } else {
            router.replace('/bg/login')
        }
    }, []);

    return (
        <Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            <SectionHeader style={{paddingTop: '12rem'}}>
                <h2>Нова публикация</h2>
            </SectionHeader>
            <PostEditContent />
        </Fragment>
    );
}

export default NewPost;