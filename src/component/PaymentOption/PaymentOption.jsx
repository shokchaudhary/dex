import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root : {width : 345, margin : "10px"},
  media : {height : 140,},

})

function PaymentOption() {
  const classes = useStyles();

  var cards = [
    {
      title : "Account To Account Transfer" ,
      images : require("./images/AcctoAcc.jpg").default,
      description : "Transfer Your Value From Account To Account , Be Alert",
      Status  : "disabled",
    } ,
    {
      title : "Server To Account Transfer" ,
      images : require("./images/serverToAcc.jpg").default,
      description : "Transfer Your Value From Server  To Account , Be Alert",
      Status  : "disabled",
    },
    {
      title : "Server  To Server Transfer" ,
      images : require("./images/serverToServer.webp").default,
      description : "Transfer Your Value From Server To Server , Be Alert",
      Status  : "disabled",
    },
    {
      title : "Dex Wallet Transfer",
      images : require("./images/wallet-svgrepo-com.svg").default,
      description : "Dex Wallet is a secure way  , Go Ahead",
      Status  : false,
    }
  ]

  var mappedContent = cards.map((item , index )=>(
    <div className="card-area">
    <Card className={classes.root} key={index}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.images} title={item.title}/>
        <CardContent>
          <Typography gutterBottom variant="h5">{item.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled={item.Status}>Visit</Button>
      </CardActions>
    </Card>
  </div>
  )
  )

  return (
    <div className="flex justify-around mt-10 flex-wrap">
      {mappedContent}
    </div>
  )
}

export default PaymentOption
