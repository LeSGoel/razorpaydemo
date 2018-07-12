import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    amount: 0
  };

  constructor() {
    super()
    this.changeAmount = this.changeAmount.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
  }

  changeAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  openCheckout() {
    let options = {
      "key": "rzp_test_TTlrQjIQHBhBXO",
      "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
      "name": "Merchant Name",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function (response) {
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": "Harshil Mathur",
        "email": ""
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#F37254"
      }
    };
   
    let rzp = new Razorpay(options);
    rzp.open();
  }

  render() {
    return ( <div>
      <input type = 'text'
      onChange = {
        this.changeAmount
      }
      /> 
      <button onClick = {
        this.openCheckout
      } > Pay Rs. {
        this.state.amount / 100
      } </button>  </div>
    )
  }
}
export default App;
