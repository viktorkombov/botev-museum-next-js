import React from "react";
import {
    Box,
    Zoom,
    Fab,
} from "@mui/material";
import { ConstructionOutlined, KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
      });
    

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#scroll-to-top',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 4,
                }}
            >
                <Fab
                    onClick={handleClick}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    )
}

export default ScrollTop;