import { Fragment } from 'react';
import classes from './DetailText.module.scss';

const DetailText = ({ detail }) => {
    const content = detail.content.split('\n');

    return (
        <Fragment>
            <div style={{ height: '1rem' }}></div>
            <h5 className={classes['detail__content-heading']}>{detail.title}</h5>
            {content.map(p => <p className={classes['detail__content-body']}>
                {p}
            </p>)}
            <div style={{ height: '1rem' }}></div>

        </Fragment>
    )
}

export default DetailText;