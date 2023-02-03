import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AddLink, LinkOff, FormatItalic, FormatBold, FormatUnderlined, Close, AttachFile } from '@mui/icons-material';
import { AtomicBlockUtils, EditorState, Modifier, RichUtils } from "draft-js";
import { Fragment, useState } from "react";
import decorator from "../entities/decorator";
import { useHttpClient } from "../../../../hooks/http-hook";
import ResponsiveDialog from "../../../UI/ResponsiveDialog";
import classes from './ActionButtonGroup.module.scss';
import ImageListMUI from "../../../UI/ImageListMUI";
import ImageUpload from "../../ImageUpload";
import FormButton from "../../FormButton";
import LoadingSpinner from '../../../UI/LoadingSpinner';
import MediaDialog from "../../MediaDialog";
const ActionButtonGroup = props => {
    const [showAddLinkDialog, setShowAddLinkDialog] = useState(false);
    const [addLinkInputValue, setAddLinkInputValue] = useState('');
    const [showAddFileDialog, setShowAddFileDialog] = useState(false);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const onToggleButtonToggle = (e, value) => {
        e.preventDefault();
        props.onChange(
            RichUtils.toggleInlineStyle(
                props.editorState,
                value
            )
        );
    }

    const onAddLinkClick = () => {
        setShowAddLinkDialog(true);
    };

    const onAddLinkInputChange = (e) => {
        setAddLinkInputValue(e.target.value);
    }

    const handleCloseAddLinkDialog = (applyLink) => {
        if (applyLink) {
            const editorState = props.editorState;
            if (!addLinkInputValue) {
                props.onChange(RichUtils.toggleLink(editorState, editorState.getSelection(), null));
            } else {
                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity(
                    'LINK',
                    'MUTABLE',
                    { url: addLinkInputValue }
                );
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
                props.onChange(
                    RichUtils.toggleLink(
                        newEditorState,
                        newEditorState.getSelection(),
                        entityKey
                    )
                );
            }
        }
        setShowAddLinkDialog(false);
        setAddLinkInputValue('');
    };

    const onAddFileClick = () => {
        setShowAddFileDialog(true);
    };

    const onAddTextDocument = ({ src, title }) => {
        const editorState = props.editorState;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            { url: src }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        const selection = editorState.getSelection();
        const textWithEntity = Modifier.insertText(
            contentState,
            selection,
            title,
            null,
            entityKey
        );
        let newState = EditorState.createWithContent(textWithEntity, decorator);
        const newFocusOffset = selection.getFocusOffset() + title.length;;
        const newSelection = selection.merge({ anchorOffset: newFocusOffset, focusOffset: newFocusOffset });
        const stateWithContentAndSelection = EditorState.forceSelection(newState, newSelection)
        props.onChange(stateWithContentAndSelection);
    }

    const onAddImage = file => {
        const entityKeyImage = props.editorState
            .getCurrentContent()
            .createEntity('IMAGE', 'MUTABLE', { src: file.src, alt: file.title })
            .getLastCreatedEntityKey();
        const newEditorStateImage = AtomicBlockUtils.insertAtomicBlock(
            props.editorState,
            entityKeyImage,
            ' '
        );
        props.onChange(newEditorStateImage);
    }

    const onAddFile = (file) => {
        switch (file.type) {
            case 'image/png':
            case 'image/jpeg':
            case 'image/jpg':
                onAddImage(file);
                break;
            default:
                onAddTextDocument(file);
        }
    }

    const onAddFileDialogClose = () => {
        setShowAddFileDialog(false);
    }

    const onRemoveLinkClick = () => {
        const editorState = props.editorState;
        const currentContentState = props.editorState.getCurrentContent();

        const newContentState = Modifier.applyEntity(currentContentState, editorState.getSelection(), null);
        const newEditorState = EditorState.push(editorState, newContentState, 'apply-entity');
        props.onChange(newEditorState);
    }

    const INLINE_STYLES = [
        { value: 'BOLD', iconComponent: <FormatBold /> },
        { value: 'ITALIC', iconComponent: <FormatItalic /> },
        { value: 'UNDERLINE', iconComponent: <FormatUnderlined /> },
    ];

    return (
        <Fragment>
            <ToggleButtonGroup
                aria-label="text formatting"
            >
                {
                    INLINE_STYLES.map(type =>
                        <ToggleButton
                            value={type.value}
                            key={type.value}
                            aria-label={type.value}
                            selected={props.editorState.getCurrentInlineStyle().has(type.value)}
                            onMouseDown={(e) => onToggleButtonToggle(e, type.value)}
                        >
                            {type.iconComponent}
                        </ToggleButton>
                    )
                }
                <ToggleButton aria-label="link" onMouseDown={onAddLinkClick}>
                    <AddLink />
                </ToggleButton>
                <ToggleButton aria-label="link" onMouseDown={onRemoveLinkClick}>
                    <LinkOff />
                </ToggleButton>
                <ToggleButton aria-label="file" onMouseDown={onAddFileClick}>
                    <AttachFile />
                </ToggleButton>
            </ToggleButtonGroup>

            <Dialog open={showAddLinkDialog} onClose={handleCloseAddLinkDialog} disableScrollLock>
                <DialogTitle>Добави хипервръзка</DialogTitle>
                <DialogContent>

                    <TextField
                        sx={{ minWidth: 250 }}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Хипервръзка"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={addLinkInputValue}
                        onChange={onAddLinkInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onMouseDown={() => handleCloseAddLinkDialog(false)}>Отказ</Button>
                    <Button onMouseDown={() => handleCloseAddLinkDialog(true)}>Добави</Button>
                </DialogActions>
            </Dialog>
            <MediaDialog
                open={showAddFileDialog}
                onAddFile={onAddFile}
                onAddFileDialogClose={onAddFileDialogClose}
            />
        </Fragment>
    );
}

export default ActionButtonGroup