import { Fragment } from 'react';
import History from '../../History';
import classes from './PostBody.module.scss';

const PostBody = props => {
    const { children } = props;
    return (
        <Fragment>
            <section className={classes.header}>
                <History history={props.history}/>
            </section>
            <section className={classes.body}>
                {children}
            </section>
        </Fragment>
    );
}

export default PostBody;