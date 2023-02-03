import React, { useRef, useState, useEffect } from 'react';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';

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

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            props.onFileLoad()
            props.changeUploadFilePreview(fileReader.result);
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
            formData.append('image', formState.inputs.image.value);
            const responseData = await sendRequest(
                'http://localhost:5000/api/uploads',
                'POST',
                formData
            );

            props.onChange({src: responseData.src, title: responseData.title});
            props.changeUploadFilePreview('');
        } catch (err) { }
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return (
        <div>
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
                    <img src={props.filePreviewUrl} alt="Preview" />
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
                                style={{marginBottom: '1rem'}}
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
        </div>
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
