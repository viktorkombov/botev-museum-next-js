import { Fragment } from 'react';
import classes from './AgedPaperReader.module.scss';
const AgedPaperReader = props => {
    let { title, content } = props.record;

    const paragraphs = content.map(paragraph => {
        return (
            <p>{paragraph.split('\n').map(p => <Fragment>{p}<br /></Fragment>)}</p>
        )
    })

    return (
        <div className={classes.wrapper}>
            <div className={classes["content-container"]}>
                <div className={classes["content"]}>
                    <h1>{title}</h1>

                    {paragraphs}

                </div>
            </div>
        </div>
    )
}

export default AgedPaperReader;