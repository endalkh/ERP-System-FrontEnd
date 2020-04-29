import React, { Component } from "react";
import { Button, withStyles, Paper, IconButton, Typography, Grid } from "@material-ui/core";

import { Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, getStatus } from "../../../store/order/action";
import { getSiv } from "../../../store/Siv/action";
import PrintIcon from "@material-ui/icons/Print";
import SearchBar from '../../SearchBar/SearchBar'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SIV from './Printable_SIV';
import { PDFDownloadLink } from "@react-pdf/renderer";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
const styles = (theme) => ({
  table: {
    maxHeight: 100,
    // padding: 20
  },
  tableRow: {
    // padding: 15
  },
  container: {
    padding: 20,
  },
  paper: {
    padding: 20,
    height: "auto",
    borderRadius: 20,
  },
  spacer: {
    margin: 20,
  },
  recentitems: {
    padding: 20,
    paddingBottom: 20,
  },
  header: {
    marginLeft: 100,
  },
});

class ViewAllOrders extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { classes } = this.props;
    const createdOrders = this.props.orders ? this.props.orders.filter((order) => { return order.status === "Created" || order.status === "Issued" }) : "";

    return (
      <>
        <SearchBar />
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <TableContainer style={{
              height: 900
            }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow className={classes.table}>
                    <TableCell><b>Order #</b></TableCell>
                    <TableCell><b>Company</b></TableCell>
                    <TableCell align='center'><b>Sales Person</b></TableCell>
                    <TableCell align='center'><b>Shipment Address</b></TableCell>
                    <TableCell align='center'><b>Order Date</b></TableCell>
                    <TableCell align='center'><b>Status</b></TableCell>
                    <TableCell align='center'><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {createdOrders ? createdOrders.map((order) => (
                    <TableRow key={order.orderNumber}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell>{order.company}</TableCell>
                      <TableCell align='center'>{order.salesPerson}</TableCell>
                      <TableCell align='center'>{order.shipmentAddress}</TableCell>
                      <TableCell align='center' >{order.orderDate}</TableCell>
                      {order.status === "Issued" ? null : (
                        <TableCell align='center'>
                          <IconButton>
                            <Link
                              to={{
                                pathname: "/siv",
                                state: { order: order.orderNumber },
                              }}>
                              <PrintIcon />
                            </Link>
                          </IconButton>
                        </TableCell>

                      )}
                      <TableCell align='center'>
                        <VisibilityRoundedIcon />
                      </TableCell>


                    </TableRow>
                  )) : ""}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
  sivs: state.invoiceReducer.sivs,
  siv_item: state.invoiceReducer.siv_item,
});

export default connect(mapStateToProps, { getOrders, getStatus, getSiv })(
  withStyles(styles)(ViewAllOrders)
);
