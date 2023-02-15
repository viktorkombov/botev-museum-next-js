import { Children } from 'react';
import Aside from '../Aside';
import SimplePost from './SimplePost';
import classes from './Post.module.scss';

const Post = props => {
    const children = Children.toArray(props.children);
    return <section className={`${classes.article} post`}>
        <SimplePost>
            {children[0]}
        </SimplePost>
        <Aside>
            {children[1]}
        </Aside>
    </section>
}

export default Post;