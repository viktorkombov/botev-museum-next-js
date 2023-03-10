import { baseUrl } from "@/utils/data";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import PostSummary from "../../../UI/PostSummary";
import classes from './PostAside.module.scss';

const PostAside = props => {
    const [posts, setPosts] = useState([]);
    const { error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        setTimeout(() => {
            const fetchPosts = async () => {
                try {
                    var url = new URL(baseUrl + 'api/novini')
                    var params = { 'columns': ['ID', 'Title', 'Subtitle', 'Date'], orderby: 'DATE', dir: 'DESC', limit: 5, notEqualTo: props.id }
                    url.search = new URLSearchParams(params).toString();
                    const responseData = await sendRequest(
                        url
                    );
                    console.log(responseData)
                    setPosts(responseData);
                } catch (err) { }
            };
            fetchPosts();
        }, 200)
    }, []);

    return (
        <section className={classes.container}>
            <h3 className={classes.title}>Още новини</h3>
            {posts.map(post => <PostSummary key={post.ID} id={post.ID} date={post.Date} title={post.Title} subtitle={post.Subtitle} />)}
        </section>
    )
}

export default PostAside;