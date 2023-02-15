import classes from './PostEditContent.module.scss';
import RichTextEditor from '../../FormElements/RichTextEditor/RichTextEditor';
import { convertToRaw, EditorState } from 'draft-js'
import FormButton from '../../FormElements/FormButton';

import decorator from '../../FormElements/RichTextEditor/entities/decorator';
import { useContext, useState } from 'react';
import { useRouter, userRouter } from 'next/router';
import { useHttpClient } from '@/hooks/http-hook';
import { useForm } from '@/hooks/form-hook';
import { AuthContext } from '@/contexts/auth-context';
import Input, { VALIDATOR_REQUIRE } from '../../FormElements/Input';
import { Link, Paper } from '@mui/material';
import { Delete, KeyboardArrowDown } from '@mui/icons-material';
import MediaDialog from '../../FormElements/MediaDialog';
import Image from 'next/image';
import { baseUrl } from '@/utils/data';

const PostEditContent = props => {
    const [showAddFileDialog, setShowAddFileDialog] = useState(false);
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const router = useRouter();

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: props.title || '',
                isValid: true
            },
            coverImage: {
                value: props.coverImage || '',
                isValid: true
            },
            content: {
                value: props.editorState ?
                    EditorState.createWithContent(props.editorState, decorator) :
                    EditorState.createEmpty(decorator),
                isValid: true
            }
        },
        false
    );

    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const editorState = convertToRaw(formState.inputs.content.value.getCurrentContent());
            const subtitle = editorState.blocks.find(block => block.text);
            const responseData = await sendRequest(
               `${baseUrl}api/novini/${props.id ? props.id : ''}`,
                props.method || 'POST',
                JSON.stringify({ title: formState.inputs.title.value, content: JSON.stringify(editorState), coverImage: formState.inputs.coverImage.value, subtitle: subtitle?.text || '' }),
                {
                    'Content-Type': 'application/json'
                }
            );
            router.replace('/bg/novini/' + responseData.ID);
        } catch (err) { 
            console.log(err);
        }
    };

    const onAddFileClick = (e) => {
        e.preventDefault();
        setShowAddFileDialog(true);
    };

    const onAddFile = (data) => {
        console.log(data);
        switch (data.type) {
            case 'image/png':
            case 'image/jpeg':
            case 'image/jpg':
                inputHandler('coverImage', data.src);
                break;
            default:
                alert('Избрали сте файл с грешен формат!');
                setShowAddFileDialog(true);
        }
    }

    const onAddFileDialogClose = () => {
        setShowAddFileDialog(false);
    }

    const removeCoverImage = (e) => {
        e.preventDefault();
        inputHandler('coverImage', '');
    }

    return (
        <div className={classes.form} >
            <h2>{props.formTitle}</h2>
            <form onSubmit={authSubmitHandler}>
                <Input
                    id="title"
                    className={classes.input}
                    placeholder="Заглавие"
                    type="text"
                    validators={[VALIDATOR_REQUIRE()]}
                    initialValue={formState.inputs.title.value}
                    onInput={inputHandler}
                />

                <RichTextEditor
                    id="content"
                    initialValue={formState.inputs.content.value}
                    onInput={inputHandler}
                />
                <Paper elevation={3} className={classes['cover-image-container']}>
                    {formState.inputs.coverImage.value ?
                        <Link
                            component="button"
                            variant="body2"
                            onClick={removeCoverImage}
                        >
                            Премахни снимката
                            <Delete fontSize="small" />
                        </Link> :
                        (<Link
                            component="button"
                            variant="body2"
                            onClick={onAddFileClick}
                        >
                            Добави снимка на корицата
                            <KeyboardArrowDown />
                        </Link>)}
                    {formState.inputs.coverImage.value && <div className={classes['preview']} >
                        <Image src={baseUrl + formState.inputs.coverImage.value} alt="Корица" fill />
                    </div>}
                </Paper>
                <FormButton type="submit">
                    {props.isEdit ? 'Редактирай' : 'Публикувай'}
                </FormButton>
            </form>

            <MediaDialog
                open={showAddFileDialog}
                onAddFile={onAddFile}
                onAddFileDialogClose={onAddFileDialogClose}
            />
        </div>
    );
}

export default PostEditContent;
