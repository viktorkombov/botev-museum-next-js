import { Link } from 'react-router-dom';
import classes from './History.module.scss';

const History = props => {
    const lang = !props.en ? 'bg' : 'en';
    const propsClasses = props.className ? props.className : '';

    const path = props.history ?
        Object.entries(props.history).map((entries, i, arr) => {
            if (i === arr.length - 1) {
                return <span key={entries[1]}> <strong>{entries[1]}</strong></span>
            }

            if (entries[0] === 'null') {
                return <span key={entries[1]}> {entries[1]} &gt; </span>
            }

            return <span key={entries[1]}><Link href={`/${lang}/${entries[0]}`}>{entries[1]}</Link> &gt; </span>
        })
        : null;
    return (
        <section id="content" className={`${classes.header} ${propsClasses}`}>
            <div className={classes["header-container"]}>
                <article>
                    <div>{path}</div>
                </article>
            </div>
        </section>
    )
}

export default History;