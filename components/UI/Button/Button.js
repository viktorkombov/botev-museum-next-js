import { Info } from '@mui/icons-material';
import classes from './Button.module.scss';

const Button = props => {

    return (
        <button className={classes.button} onClick={props.onButtonClicked}>
            <span className={classes['button-content']}>{props.children}</span>
            <span style={{ marginLeft: "1rem" }}>
                <Info/>
            </span>
        </button>
    );
}

export default Button;