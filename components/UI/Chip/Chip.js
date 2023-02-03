import { AccessTime, RemoveRedEye, VerifiedUser } from '@mui/icons-material';
import classes from './Chip.module.scss';

const Chip = props => {
    const content = 'Виктор Комбов';
    let iconLeft;
    switch (props.iconLeft) {
        case 'author':
            iconLeft = <VerifiedUser />;
            break;
        case 'timePosted':
            iconLeft = <AccessTime />;
            break;
        case 'visited':
            iconLeft = <RemoveRedEye />;
            break;
        default:
            iconLeft = null;
    }



    return (
        <div className={classes['chip-primary']}>
            {iconLeft && <div className={classes['icon__author']}>
                {iconLeft}
            </div>}
            <div className={classes['chip__content']}><span>{props.children}</span> </div>
        </div>
    );
}

export default Chip;