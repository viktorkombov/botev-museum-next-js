import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputBase, Paper } from "@mui/material";
import { useRef, useState } from "react";
import classes from './SearchInput.module.scss';


const SearchInput = props => {
    const inputRef = useRef(null);
    const { requestSearch, placeHolder } = props;
    
    const clearInput = () => {
        requestSearch('');
        inputRef.current.value = "";
    }
    return (
        <Paper className={classes["search-input-wrapper"]} elevation={0}>
            <InputBase
                className={classes["search-input"]}
                placeholder={placeHolder || "Търси четници по име"}
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(searchVal) => requestSearch(searchVal.target.value)}
                inputRef={inputRef}
            />
            {inputRef.current?.value ? <IconButton type="button" sx={{ mr: "1rem" }} aria-label="search" onClick={clearInput}>
                <ClearIcon />
            </IconButton> : <IconButton type="button" sx={{ mr: "1rem" }} aria-label="search">
                <SearchIcon />
            </IconButton>}
        </Paper>
    );
}

export default SearchInput;