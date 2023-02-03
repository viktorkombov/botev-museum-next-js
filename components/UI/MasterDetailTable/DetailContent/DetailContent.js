import Box from '@mui/material/Box';
import classes from './DetailContent.module.scss';

const DetailContent = ({ detail }) => {
    return (
        <Box className={classes.wrapper} sx={{ margin: 1 }}>
            <div style={{ height: '1rem' }}></div>
            {detail.imageUrl && <div className={classes['image-wrapper']}>
                <img src={detail.imageUrl} alt="снимка" />
            </div>}
            <div>
                <h5 className={classes['detail__content-heading']}>{detail.name}</h5>
                {(detail.born || detail.died) && <div className={classes['detail__content-dates']}>
                    <p className={classes['first-letter']}>роден: <strong>{detail.born.date}, {detail.born.place}</strong></p>
                    <p>починал: <strong>{detail.died.date}, {detail.died.place}</strong></p>
                </div>}
                <p className={classes['detail__content-body']}>
                    {detail.content}
                </p>
            </div>
            <div style={{ height: '1rem' }}></div>
        </Box>
    );
}

export default DetailContent;