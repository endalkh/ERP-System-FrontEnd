import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, IconButton, TextField } from '@material-ui/core';
import SearchBar from '../../SearchBar/SearchBar'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
const styles = theme => ({
    table: {
        maxHeight: 100,
        padding: 20
    },
    tableRow: {
        padding: 15
    },
    container: {
        padding: 20,
    },
    paper: {
        padding: 40,
        height: 'auto',
        borderRadius: 20
    },
    spacer: {
        margin: 20,
    },
    recentOrders: {
        padding: 20,
        paddingBottom: 20
    },
    spacer: {
        margin: 10,
        marginBottom: 30
    },
    header: {
        marginLeft: 100
    }
});

function createData(name, calories, fat, carbs, protein, Actions) {
    return { name, calories, fat, carbs, protein, Actions };
}

class ViewAllOrders extends React.Component {
    render() {
        const { classes } = this.props;
        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        return (
            <>
                <div className={classes.container}>
                    <Grid container display='flex'
                        justify="space-between"
                        xs={12}
                        style={{
                            padding: 20,
                            // paddingBottom: 20,

                        }}>
                        <Grid item className={classes.header}>
                            <Typography variant='h5' color="textSecondary">
                                <b>Orders</b>
                            </Typography>
                        </Grid>
                        <Grid item style={{
                            display: 'flex',
                            justify: 'flex-end'
                        }}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                    <div >
                    </div>
                    {/* <Divider className={classes.spacer}></Divider>
                        <Level /> */}
                    <Divider className={classes.spacer}></Divider>
                    <Paper className={classes.paper}>

                        <TableContainer>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow className={classes.table}>
                                        <TableCell className={classes.table}><b>ID</b></TableCell>

                                        <TableCell className={classes.table}><b>Item Name</b></TableCell>
                                        <TableCell align="right"><b>Quantity</b></TableCell>
                                        <TableCell align="right"><b>Price/Unit</b></TableCell>
                                        <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
                                        <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell>
                                        <TableCell align="center"><b>Actions</b></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell className={classes.tableRow} component="th" scope="row">
                                                #
                                        </TableCell>
                                            <TableCell className={classes.tableRow} component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="center">

                                                <Grid item style={{
                                                    marginLeft: 30
                                                }}>
                                                    <IconButton>
                                                        <VisibilityIcon />

                                                    </IconButton>

                                                </Grid>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(ViewAllOrders);
