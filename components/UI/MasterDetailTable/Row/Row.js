import React from "react";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";

const Row = (props) => {
    const {
        row,
        onExpandIndicatorClick,
        columns,
        expanderCellClass,
        isMasterDetail,
    } = props;
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (props.expandRow[0] !== row.id) {
            setOpen(false);
        }
    }, [props.expandRow]);

    const expandRow = (e) => {
        if (!isMasterDetail) { return; }
        e.stopPropagation();
        setOpen(!open);
        onExpandIndicatorClick();
    };

    return (
        <React.Fragment>
            <TableRow onClick={expandRow} hover sx={{ "& > *": { borderBottom: "unset" } }}>
                {isMasterDetail && (
                    <TableCell className={expanderCellClass}>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={expandRow}
                        >
                            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                        </IconButton>
                    </TableCell>
                )}
                {columns.map((col) => {
                    return col.id ? (
                        <TableCell align="left" className={col.classesOuter}>
                            {!col.avatar ? (
                                col.objectType ? (
                                    Object.values(row[col.id]).map((value) => (
                                        <div className={col.classesRowInner}>{value}</div>
                                    ))
                                ) : (
                                    <div className={col.classesRowInner}>{row[col.id]}</div>
                                )
                            ) : (
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    { }
                                    <Avatar sx={{ width: 56, height: 56 }} src={row.imageUrl}>
                                        {row[col.id].slice(0, 1)}
                                    </Avatar>
                                    <span style={{ marginLeft: "1rem" }}>{row[col.id]}</span>
                                </Box>
                            )}
                        </TableCell>
                    ) : (
                        <TableCell>
                            <div className={col.classesRowInner}>{col.template(row)}</div>
                        </TableCell>
                    );
                })}
            </TableRow>
            <TableRow>
                <TableCell sx={{ pb: 0, pt: 0 }} colSpan={6}>
                    <Collapse sx={{ transition: "none" }} in={open}>
                        {props.children}
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default Row;
