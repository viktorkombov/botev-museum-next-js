import classes from './Delimiter.module.scss';

const Delimiter = props => {
    const {white, fullWidth} = props;
    return (
        <div className={`${classes.delimiter} ${white && classes['delimiter--white']} ${fullWidth ? classes['full-width'] : ''}`}></div>
    );
}

export default Delimiter;