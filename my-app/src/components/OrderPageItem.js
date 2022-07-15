import React from "react";
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link} from "react-router-dom"

const OrderPageItem = (props) => {
      let link = `/orders/${props.ID}`
  return (
    <div className="orderPageItem">
      <span className="orderedDate">Was ordered on <span className={"orderedTime"}>{props.orderedDate} </span></span>
      <span className="oderId">{"ID:"} <span className="orderedID">{props.ID }</span></span> <br/>
      <span className={"toOrder"}><Link to={link}><Button variant="contained" className={"toOrder"} endIcon={<NavigateNextIcon />}>

        To Order
      </Button></Link></span>
    </div>
  )
}

export default OrderPageItem