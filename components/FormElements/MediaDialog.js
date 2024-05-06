import { baseUrl } from '@/utils/data';
import { Close } from '@mui/icons-material';
import { IconButton, Pagination } from '@mui/material';
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
    const [totalRecords, setTotalRecords] = useState(0);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const fetchTotalRecords = async () => {
        try {
            var url = new URL(`${baseUrl}api/uploads`)
            var params = { 'columns': ['COUNT(*)'] }
            url.search = new URLSearchParams(params).toString();

            const mainArticle = await fetch(
                url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await mainArticle.json();
            setTotalRecords(responseData[0]['COUNT(*)']);
        } catch (error) {

        }
    }

    const fetchMedia = async (page = 1) => {
        const skip = (page - 1) * 10;
        try {
            var url = new URL(`${baseUrl}api/uploads`)
            var params = { orderby: 'DATE', dir: 'DESC', limit: skip + ',' + 10 }
            url.search = new URLSearchParams(params).toString();
            const images = await sendRequest(
                url,
                'GET'
            );
            if (images) {
                setImages(images);
            } else {
                throw new Error('Images were not found!')
            }
        } catch (err) {
        }
    }

    useEffect(() => {
        if (props.open && props.open !== open) {
            fetchTotalRecords();
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

    const onPageChange = (e, page) => {
        // setIsLoading(true);
        fetchMedia(page);
    }

    return (
        <ResponsiveDialog title="Файлове" open={open} onClose={onAddFileDialogClose}>
            <div className={classes['file-dialog-wrapper']}>
                {!isLoading ? <ImageListMUI images={images} onChange={onActiveFileChange} activeImage={activeFile} /> : <LoadingSpinner />}
                <div className={classes.paging}>
                    <Pagination count={Math.ceil(totalRecords / 10)} onChange={onPageChange} />
                </div>
            </div>
            <div className={classes['file-dialog-action-buttons']}>
                <ImageUpload onChange={fetchMedia} changeUploadFilePreview={changeUploadFilePreview} filePreviewUrl={filePreviewUrl} onFileLoad={() => setShowApplyButton(false)} />
                {showApplyButton ? (
                    <div className={classes['file-dialog-action-button']}>
                        <FormButton onMouseDown={applyFile} disabled={!activeFile.src}>
                            Приложи избрания файл
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