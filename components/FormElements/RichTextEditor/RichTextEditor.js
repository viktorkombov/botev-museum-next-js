import 'draft-js/dist/Draft.css';
import { AddLink, Close, LinkOff } from '@mui/icons-material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ImageIcon from '@mui/icons-material/Image';
import { IconButton, ToggleButtonGroup, ToggleButton, Paper, Dialog, DialogContent, DialogTitle, TextField, DialogActions, Button } from '@mui/material';
import { AtomicBlockUtils, RichUtils, convertToRaw, Editor, EditorState, Modifier } from 'draft-js';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useHttpClient } from '../../../hooks/http-hook';
import ImageListMUI from '../../UI/ImageListMUI';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import ModalBootstrap from '../../UI/ModalBootstrap';
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer";
import FormButton from '../FormButton';
import ImageUpload from '../ImageUpload';
import classes from './RichTextEditor.module.scss';
import addLinkPluginPlugin from './entities/AddLink';
import ActionButtonGroup from './EditorsControls/ActionButtonGroup';
import decorator from './entities/decorator';
import { validate } from '../Input';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
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

function RichTextEditor(props) {
    const [editorState, setEditorState] = useState(props.initialValue)
    const { id, onInput } = props;

    useEffect(() => {
        onInput(id, editorState);
    }, [id, editorState, onInput]);

    const editor = useRef(null);

    const onChange = state => {
        setEditorState(state);
    };

    function focusEditor(e) {
        if (e.target.tagName?.toLowerCase() === 'input') {
            return;
        }
        editor.current.focus();
    }
    const handleReturn = (e) => {
        if (e.shiftKey) {
            onChange(RichUtils.insertSoftNewline(editorState));
            return 'handled';
        }
        return 'not-handled';
    }

    const handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return true;
        }
        return false;
    };

    return (
        <Paper
            sx={{
                width: "100%",
                "*": { fontFamily: '"Comfortaa", sans-serif !important' },
                mb: '1rem',
                p: '1rem',
                pt: 0,
                minHeight: '25rem',
                maxHeight: '25rem',
                overflow: 'auto'
            }}
            className={classes['editor-wrapper']}
            onClick={focusEditor}
            elevation={3}
        >
            <div className={classes['toggle-buttons']}>
                <ActionButtonGroup editor={editor} editorState={editorState} onChange={onChange} />
            </div>
            <Editor
                blockRendererFn={mediaBlockRenderer}
                ref={editor}
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                handleReturn={handleReturn}
                onChange={onChange}
                placeholder="Въведи съдържанието на публикацията"
            />


        </Paper>
    );
}

export default RichTextEditor;
