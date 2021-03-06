import React , {useState, useContext} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Context} from '../Context/CreateContext';
import Loading from '../Loading/Loading';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width : 200,
    height : 80,
    margin : 10,
    backgroundColor : '#f3f3f3',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Status() {
  const [state , setState] = useContext(Context);
  const classes = useStyles();
  const theme = useTheme();



  return (
    <div className="">
      <Card className={classes.root}>
         <div className={classes.details}>
           <CardContent className={classes.content}>
             <Typography component="h5" variant="h5">
               Status
             </Typography>
             <Typography variant="subtitle1" color="textSecondary">
                {state.status === "waiting" ? <Loading/> : " Transaction " +  state.status.charAt(0).toUpperCase() + state.status.slice(1)  }
             </Typography>
           </CardContent>
         </div>
       </Card>
  </div>  )
}
