import { Fragment, useEffect, useState } from 'react';
import PostEditContent from '@/components/UI/PostEditContent';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import classes from './NewPost.module.scss';
import LoadingSpinner from '@/components/UI/LoadingSpinner';

function NewPost() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
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