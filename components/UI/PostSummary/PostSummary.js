import classes from './PostSummary.module.scss';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import {convertToLocalDate} from '../../../utils/functions'

const PostSummary = props => {

    return (
        <Link className={classes['link-wrapper']} to={'/bg/novini/' + props.id}>
            <article className={`${classes.summary} ${props.isLastSummary ? classes['last-summary'] : ''}`}>
                <div className={classes.body}>
                    <div className={classes.date}><EventIcon fontSize='small' /><span>{convertToLocalDate(props.date)}</span></div>
                    <h5 className={classes.title}>{props.title}</h5>
                    <p>
                        {props.subtitle?.length > 100
                            ? props.subtitle.substring(0, 100) + '...'
                            : props.subtitle}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default PostSummary;