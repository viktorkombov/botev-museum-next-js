import React, { forwardRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormButton from "@/components/FormElements/FormButton";
import Input, { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/components/FormElements/Input";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "@/contexts/auth-context";
import { useForm } from "@/hooks/form-hook";
import { useHttpClient } from "@/hooks/http-hook";
import classes from './Auth.module.scss';
import SectionHeader from "@/components/UI/SectionHeader";
import { signIn, useSession } from 'next-auth/client'
import MuiAlert from '@mui/material/Alert';
import { Paper, Snackbar } from "@mui/material";

function Auth() {
    const auth = useContext(AuthContext);
    const router = useRouter();
    const [isIntialLoading, setIsInitialLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [session, loading] = useSession();


    useEffect(() => {
        if (!session) {
            setTimeout(() => {
                setIsInitialLoading(false);
            }, 300)
        } else {
            router.replace('/bg/dashboard')
        }
    }, []);
    const [formState, inputHandler, setFormData] = useForm(
        {
            username: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const authSubmitHandler = async event => {
        event.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username: formState.inputs.username.value,
            password: formState.inputs.password.value
        });

        if (!result.error) {
            router.replace('/bg/dashboard');
        } else {
            handleSnackbarOpen('???????????????? ?? ???????????? ?????? ?????? ????????????!')
        }
    };

    const handleSnackbarOpen = (message) => {
        setErrorMessage(message);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <React.Fragment>
            <SectionHeader style={{ paddingTop: '12rem' }}>
                <h2>?????????????????????????? ????????</h2>
            </SectionHeader>
            {(isLoading || isIntialLoading) && <LoadingSpinner asOverlay />}
            <div className={classes.wrapper}>
                <Paper elevation={4} sx={{ p: "1.5rem" }}>
                    <h2>???????????????? ?????????????? ????</h2>
                    <hr />
                    <form onSubmit={authSubmitHandler}>
                        <Input
                            id="username"
                            type="text"
                            label="?????????????????????????? ??????"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="????????, ???????????????? ???????????? ?????????????????????????? ??????"
                            onInput={inputHandler}
                        />
                        <Input
                            id="password"
                            type="password"
                            label="????????????"
                            validators={[VALIDATOR_MINLENGTH(6)]}
                            errorText="???????????????? ???????????? ???? ?????????????? ???????? 6 ??????????????."
                            onInput={inputHandler}
                        />
                        <p style={{ color: 'red', fontSize: '1.2rem' }}><strong>{error}</strong></p>
                        <FormButton type="submit" disabled={!formState.isValid}>
                            ????????
                        </FormButton>
                    </form>
                </Paper>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </div>
        </React.Fragment>
    );
}

export default Auth;