import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import classes from './AccordionList.module.scss';
import SearchInput from '../SearchInput';
import { useState } from 'react';
import AgedPaperReader from '../AgedPaperReader';

const AccordionList = props => {
    const [records, setRecords] = useState(props.records);
    const [expandedPanels, setExpandedPanels] = useState([]);

    const requestSearch = (searchedVal) => {
        setExpandedPanels([]);
        const filteredRows = props.records.filter((rec) => {
            return rec.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRecords(filteredRows);
    };

    const handleChange = (id) => (event, expanded) => {
        let currExpanded;
        if (expanded) {
            currExpanded = expandedPanels.concat(id);
        } else {
            currExpanded = expandedPanels.filter(expandedPandelId => expandedPandelId !== id);
        }
        setExpandedPanels(currExpanded);
    };

    return (
        <Paper
            sx={{
                width: "100%",
                minHeight: `calc(${props.records.length + 1} * 47px)`,
                "*": { fontFamily: '"Comfortaa", sans-serif !important' },
            }}
            elevation={1}
        >
            <SearchInput placeHolder="Търси по заглавие" requestSearch={requestSearch} />
            {records.length ? records.map((rec, i) => (
                <Accordion key={rec.title} disableGutters TransitionProps={{ timeout: 0 }} expanded={expandedPanels.includes(`panel${rec.title}`)} onChange={handleChange(`panel${rec.title}`)}>
                    <AccordionSummary
                        sx={{
                            bgcolor: '#F8F8F8',
                            flexDirection: 'row-reverse',
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                transform: 'rotate(90deg)',
                            },
                            '& .MuiAccordionSummary-content': {
                                marginLeft: '1rem',
                            },
                        }}
                        className={expandedPanels.includes(`panel${rec.title}`) ? classes.active : ''}
                        focusRipple
                        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                        aria-controls={`panel${i + 1}a-content`}
                        id={`panel${i + 1}a-header`}
                    >
                        <div className={classes['summary-background']}></div>
                        <Typography sx={{ zIndex: 1, width: '40%', flexShrink: 0, mr: '1rem', lineHeight: 'inherit'}}>{rec.title}</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 'inherit' }}>Букурещ, 1872 г.</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{bgcolor: '#faf0e6', p: 0}}>
                        <AgedPaperReader record={rec}/>
                    </AccordionDetails>
                </Accordion>
            )) : <div className={classes['no-results']}><p>Няма открити резултати</p></div>}
        </Paper>
    )
}

export default AccordionList;