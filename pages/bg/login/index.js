import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormButton from "@/components/FormElements/FormButton";
import Input, { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/components/FormElements/Input";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "@/contexts/auth-context";
import { useForm } from "@/hooks/form-hook";
import { useHttpClient } from "@/hooks/http-hook";
import classes from './Auth.module.scss';
import SectionHeader from "@/components/UI/SectionHeader";

function Auth() {
    const auth = useContext(AuthContext);
    const router = useRouter();
    const [isIntialLoading, setIsInitialLoading] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        setTimeout(() => {
            setIsInitialLoading(false);
        }, 300)
    }, [])

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
        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/users/login',
                'POST',
                JSON.stringify({
                    username: formState.inputs.username.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.token);
            router.replace('/bg/profile')
        } catch (err) { }
    };

    return (
        <React.Fragment>
            <SectionHeader style={{ paddingTop: '12rem' }}>
                <h2>Потребителски вход</h2>
            </SectionHeader>
            {(isLoading || isIntialLoading) && <LoadingSpinner asOverlay />}
            <div className={classes.wrapper}>
                <h2>Въведете данните си</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    <Input
                        id="username"
                        type="text"
                        label="Потребителско име"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Моля, въведете вашето потребителско име"
                        onInput={inputHandler}
                    />
                    <Input
                        id="password"
                        type="password"
                        label="Парола"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Паролата трябва да съдържа поне 6 символа."
                        onInput={inputHandler}
                    />
                    <p style={{ color: 'red', fontSize: '1.2rem' }}><strong>{error}</strong></p>
                    <FormButton type="submit" disabled={!formState.isValid}>
                        Вход
                    </FormButton>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Auth;