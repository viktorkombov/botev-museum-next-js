import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TablePagination from "@mui/material/TablePagination";
import SortIcon from "@mui/icons-material/Sort";
import classes from "./MasterDetailTable.module.scss";
import TablePaginator from "./TablePaginator";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import Row from "./Row";
import { CircularProgress, Tooltip } from "@mui/material";
import SearchInput from "../SearchInput";

export const cellFactory = (
  width,
  height,
  smallSizeProperties,
  otherProperties
) => {
  return styled(TableCell)(({ theme }) => ({
    width: width,
    maxWidth: width,
    padding: "0.8rem",
    height: height + "px",
    ...otherProperties,
    [theme.breakpoints.down("md")]: {
      ...smallSizeProperties,
    },
  }));
};

export default function MasterDetailTable({ originalRows, columns, filterBy = 'title', searchFieldPlaceHolder, ...props }) {
  const [expandRow, setExpandRow] = React.useState([0, false]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [expandedRows, setExpandedRows] = React.useState([]);
  const [expandAllDisabled, setExpandAllDisabled] = React.useState(true);
  const [sortedColumn, setSortedColumn] = React.useState({
    column: "",
    sortDirection: "none",
    numeric: false,
  });

  React.useEffect(() => {
      setRows(originalRows);
  }, [originalRows]);

  const isMasterDetail = props.children ? true : false;

  const collapseAll = () => {
    setExpandRow([0, false]);
    setExpandedRows([]);
    setExpandAllDisabled(true);
  };

  const handleChangePage = (event, newPage) => {
    collapseAll();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchedVal) => {
    collapseAll();
    const filteredRows = originalRows.filter(row =>  row[filterBy]?.toLowerCase().includes(searchedVal.toLowerCase()));
    setRows(filteredRows);
  };

  const createSortHandler = (col) => (event) => {
    collapseAll();
    if (sortedColumn.column === col.id) {
      const newSortDirection =
        sortedColumn.sortDirection === "none"
          ? "asc"
          : sortedColumn.sortDirection === "asc"
            ? "desc"
            : "none";
      setSortedColumn({
        ...sortedColumn,
        sortDirection: newSortDirection,
      });
    } else {
      setSortedColumn({
        column: col.id,
        sortDirection: "asc",
        numeric: col.numeric,
      });
    }
  };

  function getComparator(orderState) {
    if (orderState.sortDirection === "none") {
      return undefined;
    }

    if (!orderState.numeric) {
      return orderState.sortDirection === "asc"
        ? (a, b) =>
          a[orderState.column].localeCompare(b[orderState.column], "en", {
            numeric: true,
          })
        : (a, b) =>
          b[orderState.column].localeCompare(a[orderState.column], "en", {
            numeric: true,
          });
    } else {
      return orderState.sortDirection === "asc"
        ? (a, b) => a[orderState.column] - b[orderState.column]
        : (a, b) => b[orderState.column] - a[orderState.column];
    }
  }

  const IconButtonTooltipWrapper = (props) => {
    return (
      <Tooltip
        title={props.title}
        arrow={props.arrow}
        placement={props.placement}
      >
        <IconButton>{props.children}</IconButton>
      </Tooltip>
    );
  };

  const SortThreeStatesIcon = ({ direction }) => {
    if (direction === "none") {
      return (
        <IconButtonTooltipWrapper
          title="Сортирай във възходящ ред"
          arrow={true}
          placement="top"
        >
          <SortIcon />
        </IconButtonTooltipWrapper>
      );
    } else if (direction === "asc") {
      return (
        <IconButtonTooltipWrapper
          title="Сортирай във низходящ ред"
          arrow={true}
          placement="top"
        >
          <ArrowUpwardIcon />
        </IconButtonTooltipWrapper>
      );
    } else {
      return (
        <IconButtonTooltipWrapper
          title="Премахни сортирането"
          arrow={true}
          placement="top"
        >
          <ArrowDownwardIcon />
        </IconButtonTooltipWrapper>
      );
    }
  };

  const expandIndicatorClickHandler = (event, rowId) => {
    // setExpandRow([rowId, !expandRow[1]]);
    if (expandedRows.includes(rowId)) {
      expandedRows.splice(expandedRows.indexOf(rowId), 1);
    } else {
      expandedRows.push(rowId);
    }
    setExpandedRows(expandedRows);
    if (expandedRows.length) {
      setExpandAllDisabled(false);
    } else {
      setExpandAllDisabled(true);
    }
  };

  return (
    <div className={classes["table-wrapper"]}>
      <Paper
        sx={{
          width: "100%",
          "*": { fontFamily: '"Comfortaa", sans-serif !important' },
        }}
        elevation={1}
      >
        <SearchInput placeHolder="Търси четници по име" requestSearch={requestSearch}/>
        <TableContainer className={classes["table-container"]}>
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {isMasterDetail && <TableCell className={classes["expander-cell"]}>
                  <Tooltip title="Затвори всички редове" arrow>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={collapseAll}
                      disabled={expandAllDisabled}
                    >
                      <UnfoldLessIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>}
                {columns.map((col) => (
                  <TableCell
                    className={`${col.classesOuter} ${classes["header-cell"]} ${col.headerTextSubtitle && classes["header-cell-subtitle"]
                      }`}
                  >
                    {col.sortable ?
                      <div className={`${col.classesInner} ${classes['sorted-cell']}`}>
                        <span>{col.headerText}</span>
                        <div
                          onClick={createSortHandler({
                            id: col.id,
                            numeric: col.numeric,
                          })}
                        >
                          <SortThreeStatesIcon
                            direction={
                              sortedColumn.column === col.id
                                ? sortedColumn.sortDirection
                                : "none"
                            }
                          ></SortThreeStatesIcon>
                        </div>
                      </div>
                      : <span>{col.headerText}</span>}
                    {col.headerTextSubtitle && (
                      <div className={classes["header__text-subtitle"]}>
                        {col.headerTextSubtitle}
                      </div>
                    )}
                  </TableCell>
                ))}
                {/* <TableCell className={`${classes['years-cell']} ${classes['header-cell-subtitle']}`} align="left">
                  <div className={classes["header__text--years-old-title"]}>
                    <span>Възраст</span>
                    <div onClick={createSortHandler("yearsOld")}>
                      <SortThreeStatesIcon
                        direction={
                          orderBy === "yearsOld" ? orderYearsOld : "none"
                        }
                      ></SortThreeStatesIcon>
                    </div>
                  </div>
                  <div className={classes["header__text--years-old-subtitle"]}>
                    (към 1876 г.)
                  </div>
                </TableCell>
                <TableCell className={classes['responsive-cell']} align="center">Роден</TableCell>
                <TableCell className={classes['responsive-cell']} align="center">Починал</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length ? (
                rows
                  .slice()
                  .sort(getComparator(sortedColumn))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <Row
                      key={row.id}
                      row={row}
                      expandRow={expandRow}
                      columns={columns}
                      expanderCellClass={classes["expander-cell"]}
                      isMasterDetail={isMasterDetail}
                      onExpandIndicatorClick={(event) =>
                        expandIndicatorClickHandler(event, row.id)
                      }
                    // ResponsiveCell={ResponsiveCell}
                    >{isMasterDetail && React.cloneElement(props.children, { detail: row })}</Row>
                  ))
              ) : (
                <TableRow sx={{ height: 450, border: "none" }}>
                  <TableCell
                    sx={{ pb: 0, pt: 0, textAlign: "center" }}
                    colSpan={6}
                  >
                    {false ? (
                      <CircularProgress />
                    ) : (
                      <h4>Не е открит резултат</h4>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes["table-pagination"]}
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          labelRowsPerPage="Брой редове"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginator}
        />
      </Paper>
    </div>
  );
}
