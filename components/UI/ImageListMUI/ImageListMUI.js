import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import classes from './ImageListMUI.module.scss';
import Image from 'next/image';
import { baseUrl } from '@/utils/data';

export default function ImageListMUI(props) {
    const { activeImage } = props;

    const onImageClick = (image) => {
        props.onChange(image);
    }

    const setMedia = (item) => {
        switch (item.type) {
            case 'application/pdf':
                return (<Image
                    className={classes['app-image']}
                    src={`http://localhost:3000/uploads/pdf.png`}
                    srcSet={`http://localhost:3000/uploads/pdf.png`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => onImageClick({ src: item.src, title: item.title, type: item.type })}
                    fill />)

            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                return (<Image
                    className={classes['app-image']}
                    src={`http://localhost:5000/uploads/docx.png`}
                    srcSet={`http://localhost:5000/uploads/docx.png`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => onImageClick({ src: item.src, title: item.title, type: item.type })}
                    fill />)
            default: return (<Image
                src={`${baseUrl}${item.src}`}
                srcSet={`${baseUrl}${item.src}`}
                alt={item.title}
                loading="lazy"
                onClick={() => onImageClick({ src: item.src, title: item.title, type: item.type })}
                fill />)
        }
    }
    return (
        <ImageList sx={{ width: "100%", maxWidth: "100%" }} cols={3} rowHeight={164}>
            {props.images.map((item) => (
                <ImageListItem key={item.src} className={`${classes.image} ${activeImage.src === item.src ? classes['active-image'] : ''}`}>
                    <div className={classes['image-wrapper']}>{setMedia(item)}</div>
                    <div className={classes.title}>{item.title}</div>
                    <div className={classes['chosen-image-badge']}>
                        <div>
                            Избран файл
                        </div>
                    </div>

                </ImageListItem>

            ))}
        </ImageList>
    );
}