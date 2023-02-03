import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function ResponsiveDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const children = React.Children.toArray(props.children);

    return (
        <div>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={props.onClose}
                disableScrollLock
                aria-labelledby="customized-dialog-title"
                open={props.open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={props.onClose}>
                    {props.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {children[0]}
                </DialogContent>
                <DialogActions sx={{width: '100%'}}>
                    {children[1]}
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}