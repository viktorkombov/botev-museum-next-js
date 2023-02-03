import { useEffect } from 'react';
import { useReducer } from 'react';
import { Input as MaterialInput } from '@mui/material';
import classes from './Input.module.scss';

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value, validators) => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
            isValid = isValid && value.trim().length <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
            isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
            isValid = isValid && +value <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
    }
    return isValid;
};

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            };
        }
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };
    return (
        <div
            className={`${classes['input-wrapper']} ${!inputState.isValid &&
                inputState.isTouched &&
                'form-control--invalid'}`}
            style={props.style}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <MaterialInput
                className={`${classes.input} ${props.className ? props.className : ''}`}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input;