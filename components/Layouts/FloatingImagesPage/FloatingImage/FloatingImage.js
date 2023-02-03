import Image from '../../../UI/Image';
import classes from './FloatingImage.module.scss';

const FloatingImage = props => {
    const { src, title, right, small, className } = props;
    return (
        <div className={`${right ? classes['image-wrapper-right'] : classes['image-wrapper']} ${!title ? classes['without-title'] : ''} ${small ? classes.small : ''} ${className ? className : ''}`}>
            <Image type="page" rec={{ src }} />
            {title && <div className={classes['image-title']}>{title}</div>}
        </div>
    );
}

export default FloatingImage;