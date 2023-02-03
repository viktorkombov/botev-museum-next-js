import classes from './IconRounded.module.scss';

const IconRounded = ({ link, icon, lang, large, onClick}) => (
    <a href={link} onClick={onClick}>
        <div className={`${classes['icon-circle']} ${lang ? classes['icon-circle-lang'] : ''} ${large ? classes.large : ''}`}>
            {!lang ? icon : <div className={classes.lang}>{icon}</div>}
        </div>
    </a>
);

export default IconRounded