import { baseUrl } from '@/utils/data';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHttpClient } from '../../hooks/http-hook';
import ImageListMUI from '../UI/ImageListMUI';
import LoadingSpinner from '../UI/LoadingSpinner';
import ResponsiveDialog from '../UI/ResponsiveDialog';
import FormButton from './FormButton';
import ImageUpload from './ImageUpload';
import classes from './MediaDialog.module.scss';

const MediaDialog = props => {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [activeFile, setActiveFile] = useState({ src: '', title: '' });
    const [filePreviewUrl, setFilePreviewUrl] = useState();
    const [showApplyButton, setShowApplyButton] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const fetchMedia = async () => {
        try {
            var url = new URL(`${baseUrl}api/uploads`)
            var params = { orderby: 'DATE', dir: 'DESC' }
            url.search = new URLSearchParams(params).toString();
            const images = await sendRequest(
                url,
                'GET'
            );
            setImages(images);
        } catch (err) {
        }
    }

    useEffect(() => {
        if (props.open && props.open !== open) {
            fetchMedia();
        }
        setOpen(props.open);
    }, [props.open]);

    const onActiveFileChange = async updatedValue => {
        setActiveFile(file => ({
            ...file,
            ...updatedValue
        }));
    }

    const applyFile = () => {
        requestAnimationFrame(() => {
            props.onAddFile(activeFile);
        });
        const updatedValue = { src: '', title: '' };
        setActiveFile(file => ({
            ...file,
            ...updatedValue
        }));
        props.onAddFileDialogClose();
        setOpen(false);
    }

    const onAddFileDialogClose = () => {
        props.onAddFileDialogClose();
        setOpen(false);
        setFilePreviewUrl('');
        setShowApplyButton(true);
        const updatedValue = { src: '', title: '' };
        setActiveFile(file => ({
            ...file,
            ...updatedValue
        }));
    }

    const changeUploadFilePreview = (url) => {
        setFilePreviewUrl(url);

        if (!url) {
            setShowApplyButton(true);
        }
    }


    return (
        <ResponsiveDialog title="??????????????" open={open} onClose={onAddFileDialogClose}>
            <div className={classes['file-dialog-wrapper']}>
                {!isLoading ? <ImageListMUI images={images} onChange={onActiveFileChange} activeImage={activeFile} /> : <LoadingSpinner />}
            </div>
            <div className={classes['file-dialog-action-buttons']}>
                <ImageUpload onChange={fetchMedia} changeUploadFilePreview={changeUploadFilePreview} filePreviewUrl={filePreviewUrl} onFileLoad={() => setShowApplyButton(false)} />
                {showApplyButton ? (
                    <div className={classes['file-dialog-action-button']}>
                        <FormButton onMouseDown={applyFile} disabled={!activeFile.src}>
                            ?????????????? ???????????????? ????????
                        </FormButton>
                    </div>
                ) : (
                    <IconButton onClick={() => changeUploadFilePreview('')} className={classes['file-dialog-close-button']}>
                        <Close />
                    </IconButton>
                )}
            </div>
        </ResponsiveDialog>
    );
}

export default MediaDialog;