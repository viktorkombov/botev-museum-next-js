import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import PostSummary from "../../../UI/PostSummary";
import classes from './PostAside.module.scss';

const PostAside = props => {
    const [posts, setPosts] = useState([]);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const {children} = props;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                var url = new URL('http://localhost:5000/api/posts')
                var params = { 'columns': ['ID', 'Title', 'Subtitle', 'Date'], orderby: 'DATE', dir: 'DESC', limit: 5, notEqualTo: props.id }
                url.search = new URLSearchParams(params).toString();

                const responseData = await sendRequest(
                    url
                );
                console.log(responseData);
                setPosts(responseData);
            } catch (err) { }
        };
        fetchPosts();

    }, []);

    return (
        <section className={classes.container}>
            <h3 className={classes.title}>Още новини</h3>
            {posts.map(post => <PostSummary key={post.ID} id={post.ID} date={post.Date} title={post.Title} subtitle={post.Subtitle} />)}
        </section>
    )
}

export default PostAside;