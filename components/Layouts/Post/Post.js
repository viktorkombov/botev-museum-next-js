import { Children } from 'react';
import Aside from '../Aside';
import PostAside from './PostAside';
import PostBody from './PostBody';
import PostContent from './PostContent';
import SimplePost from './SimplePost';
import PostSummary from '../../UI/PostSummary';
import classes from './Post.module.scss';

const Post = props => {
    const children = Children.toArray(props.children);
    const heading = props.heading || 'Новини';
    const summaries = Array(10).fill({
        date: '2.09.2022 г.',
        title: 'Новина',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur quia odit ex earum vel?'
    });
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