import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import LatestSales from './LatestSales';
import Budget from './Budget/Budget';
import TotalUsers from './Budget/TotalUsers';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import UsersByDevice from '../Budget/UsersByDevice';
import TasksProgress from './Budget/TasksProgress';
import Container from '@material-ui/core/Container';


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  difference: {
    // marginTop: 10,
    marginLeft: 90,
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: "#00970F",
    marginLeft: 90
  },
  differenceValue: {
    color: "#00970F",
    marginRight: 10
  },
  budgetTracking: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 290,
    borderRadius: 20
  },
  toolbar: {

    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    // background: '#11669F',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',

    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    borderRadius: 16,
    boxShadow: 0,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  fixedNotificationHeight: {
    height: 350,
  },
}));

export default function HomeNavBar() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onMouseEnter={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            EATH
          </Typography>
          <IconButton color="inherit"
            style={{ marginRight: 10 }}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <img src={require('../../Assets/ww.jpg')}
            style={{ width: 35, height: 35, borderRadius: 60 / 2, boxShadow: 190, marginRight: 10 }}
            alt="YRUGAY"
          />

          <Typography variant="h8" color="inherit">
            Samuel Kassa
          </Typography>
          <IconButton color="inherit">
            <ArrowDropDownIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
      </Drawer> */}

      <main>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={5}
            >

              <Typography style={{
                fontSize: 30,
                color: '#818181',
              }}>
                Some Category Goes Here
          </Typography>

            </Grid>
            <Grid item xs={6} style={{
              // marginLeft: 100
            }}>

              <Typography style={{
                fontSize: 20,
                color: '#818181',
                // marginLeft: 50
              }}>
                Total Sales
      </Typography>
              <Typography style={{
                fontSize: 30,
                color: '#000000',
                marginLeft: 50
              }}>
                7,465,363.5 ETB
              </Typography>
              <div className={classes.difference}>
                <ArrowUpwardIcon className={classes.differenceIcon} />
                <Typography
                  className={classes.differenceValue}
                  variant="body2"
                >
                  87%
          </Typography>
                <Typography
                  className={classes.caption}
                  variant="caption"
                >
                  Compared to Last Year
          </Typography>
              </div>

            </Grid>
            <Grid item xs={12} >

              <LatestSales />

            </Grid>

            <Grid item xs={12} >

              <Typography style={{
                fontSize: 20,
                color: '#818181',
              }}>
                Some Category Goes Here
          </Typography>

            </Grid>

            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Budget />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.budgetTracking}>
                <TotalUsers />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.budgetTracking}>
                <TasksProgress />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Budget />
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.budgetTracking}>
                <TotalUsers />
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Budget />
              </Paper>
            </Grid>

            <Grid item xs={12} >

              <Typography style={{
                fontSize: 20,
                color: '#818181',
              }}>
                Some Category Goes Hereee
            </Typography>

            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={1} lg={3}
            >
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>


    </div>
  );
}
