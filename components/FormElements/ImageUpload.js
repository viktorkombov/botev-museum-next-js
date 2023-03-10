import { baseUrl } from '@/utils/data';
import Image from 'next/image';
import React, { useRef, useState, useEffect, Fragment } from 'react';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import LoadingSpinner from '../UI/LoadingSpinner';

import FormButton from './FormButton';
import classes from './ImageUpload.module.scss';
import Input, { VALIDATOR_REQUIRE } from './Input';

// const ImageUpload = props => {
//     const [file, setFile] = useState();
//     const [isValid, setIsValid] = useState(false);

//     const filePickerRef = useRef();

//     const pickedHandler = event => {
//         let pickedFile;
//         let fileIsValid = isValid;
//         if (event.target.files && event.target.files.length === 1) {
//             pickedFile = event.target.files[0];
//             setFile(pickedFile);
//             setIsValid(true);
//             fileIsValid = true;
//         } else {
//             setIsValid(false);
//             fileIsValid = false;
//         }
//         props.onInput(props.id, pickedFile, fileIsValid);
//     };

//     const pickImageHandler = () => {
//         filePickerRef.current.click();
//     };

//     return (
//         <div className={classes['image-upload-wrapper']}>
//             <input
//                 id={props.id}
//                 ref={filePickerRef}
//                 style={{ display: 'none' }}
//                 type="file"
//                 accept=".jpg,.png,.jpeg"
//                 onChange={pickedHandler}
//             />
//             <div className={classes['form-button-wrapper']}>
//                 <FormButton type="button" onClick={pickImageHandler}>
//                     Добави снимка
//                 </FormButton>
//             </div>
//         </div>
//     );
// };

// export default ImageUpload;

const ImageUpload = props => {
    const [file, setFile] = useState();
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }
        setLoading(true);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            props.onFileLoad();
            if (!file.type.includes('image')) {
                if (file.type.includes('pdf')) {
                    props.changeUploadFilePreview(`${baseUrl}uploads/pdf.png`);
                    return;
                } else {
                    props.changeUploadFilePreview(`${baseUrl}uploads/docx.png`);
                    return;
                }
            }
            props.changeUploadFilePreview(fileReader.result);
            setLoading(false);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();


    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const pickedHandler = event => {
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        inputHandler('image', pickedFile, fileIsValid);
    };

    const imageUploadHandler = async event => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const formData = new FormData();
            formData.append('title', formState.inputs.title.value);
            formData.append('file', formState.inputs.image.value);
            const responseData = await sendRequest(
                `${baseUrl}api/uploads`,
                'POST',
                formData
            );

            props.onChange({ src: responseData.src, title: responseData.title });
            props.changeUploadFilePreview('');
        } catch (err) { }
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return (
        <Fragment>
            {!loading ? (<div>
                <input
                    id="image"
                    ref={filePickerRef}
                    style={{ display: 'none' }}
                    type="file"
                    accept=".jpg,.png,.jpeg, .pdf, .doc, .docx"
                    onChange={pickedHandler}
                />
                <div className={`image-upload ${props.center && 'center'}`}>
                    {props.filePreviewUrl && <div className={classes['preview']} >
                        <Image src={props.filePreviewUrl} alt="Preview" fill />
                    </div>}
                    {props.filePreviewUrl
                        ? (
                            <form onSubmit={imageUploadHandler}>
                                <Input
                                    element="input"
                                    id="title"
                                    type="text"
                                    label="Заглавие"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Моля, въведете заглавие."
                                    onInput={inputHandler}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <FormButton type="submit" disabled={!formState.isValid}>
                                    Качи файл
                                </FormButton>
                            </form>
                        )
                        : (
                            <FormButton type="button" onClick={pickImageHandler}>
                                Добави файл
                            </FormButton>
                        )}
                </div>
                {!isValid && <p>{props.errorText}</p>}
            </div>) : <LoadingSpinner/>}
        </Fragment>
    );
};

export default ImageUpload;


// import React, { useRef, useState, useEffect } from 'react';

// import FormButton from './FormButton';
// import classes from './ImageUpload.module.scss';
// import { Form } from 'react-bootstrap';
// import Input from './Input';

// const ImageUpload = props => {
//     const [file, setFile] = useState();
//     const [isValid, setIsValid] = useState(false);

//     const filePickerRef = useRef();

//     const pickedHandler = event => {
//         let pickedFile;
//         let fileIsValid = isValid;
//         if (event.target.files && event.target.files.length === 1) {
//             pickedFile = event.target.files[0];
//             setFile(pickedFile);
//             setIsValid(true);
//             fileIsValid = true;
//         } else {
//             setIsValid(false);
//             fileIsValid = false;
//         }
//         props.onInput(props.id, pickedFile, fileIsValid);
//     };

//     const pickImageHandler = () => {
//         filePickerRef.current.click();
//     };

//     return (
//         <div className={classes['image-upload-wrapper']}>
//             <input
//                 id={props.id}
//                 ref={filePickerRef}
//                 style={{ display: 'none' }}
//                 type="file"
//                 accept=".jpg,.png,.jpeg"
//                 onChange={pickedHandler}
//             />
//             <div className={classes['form-button-wrapper']}>
//                 <FormButton type="button" onClick={pickImageHandler}>
//                     Добави снимка
//                 </FormButton>
//             </div>
//         </div>
//     );
// };

// export default ImageUpload;
