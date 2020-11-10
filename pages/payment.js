//  _   _  ___ _____ _____
// | \ | |/ _ \_   _| ____|
// |  \| | | | || | |  _|
// | |\  | |_| || | | |___
// |_| \_|\___/ |_| |_____|
//
// This is just for demonstration purposes and does **NOT** necessarily
// represent security best practices.

import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'next/router'
import StripeCheckout from "react-stripe-checkout";
import styles from "../styles/Payment.module.scss"



// TODO: Configure with your test mode publishable key.
const stripeApiKey = process.env.PUBLISHABLE_KEY;

// TODO: Head over to https://codesandbox.io/s/311ppyl0m1, fork it, configure
// with your test mode secret key, and update the following checkout URL using
// your forked sandbox's ID.

class Payment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product: "one-for-five",
            show: true
          };
    }
  
  

  handleClose = () => {

    console.log("App#handleClose");
  };

  handleOpen = () => {
   
    console.log(this.props.query);
    console.log("App#handleOpen");
  };

  handleProductChange = evt => {
    this.setState({ product: evt.target.value });
  };

  toggleShow = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };

  handleToken = (token, addresses) => {
    console.log("App#handleToken");
    
    console.log(token);
    console.log(addresses);
    const { product } = this.state;

    const body = new FormData();
    // Send information to determine how to charge customer:
    body.append("product", product);
    body.append("quantity", 1);

    // Send standard Stripe information:
    body.append("stripeEmail", token.email);
    body.append("stripeToken", token.id);
    body.append("stripeTokenType", token.type);

    body.append("stripeBillingName", addresses.billing_name || "");
    body.append(
      "stripeBillingAddressLine1",
      addresses.billing_address_line1 || ""
    );
    body.append("stripeBillingAddressZip", addresses.billing_address_zip || "");
    body.append(
      "stripeBillingAddressState",
      addresses.billing_address_state || ""
    );
    body.append(
      "stripeBillingAddressCity",
      addresses.billing_address_city || ""
    );
    body.append(
      "stripeBillingAddressCountry",
      addresses.billing_address_country || ""
    );
    body.append(
      "stripeBillingAddressCountryCode",
      addresses.billing_address_country_code || ""
    );

    body.append("stripeShippingName", addresses.shipping_name || "");
    body.append(
      "stripeShippingAddressLine1",
      addresses.shipping_address_line1 || ""
    );
    body.append(
      "stripeShippingAddressZip",
      addresses.shipping_address_zip || ""
    );
    body.append(
      "stripeShippingAddressState",
      addresses.shipping_address_state || ""
    );
    body.append(
      "stripeShippingAddressCity",
      addresses.shipping_address_city || ""
    );
    body.append(
      "stripeShippingAddressCountry",
      addresses.shipping_address_country || ""
    );
    body.append(
      "stripeShippingAddressCountryCode",
      addresses.shipping_address_country_code || ""
    );

    fetch(checkoutUrl, {
      method: "POST",
      body,
      mode: "cors"
    })
      .then(res => {
        console.log("response received");
        console.dir(res);
        return res.json();
      })
      .then(result => {
        console.log("result");
        console.log(result);
      })
      .catch(error => {
        console.log("error");
        console.error(
          error,
          "You may need to refresh the server sandbox. It hibernates due to inactivity."
        );
      });
  };
  static getInitialProps({query}) {
    return {query}
  }

  render() {
      
    const { product, show } = this.state;
    let amount, description, label;
    
      amount = this.props.query.price * 100
      
    
    return (
      <div className={styles.container}>
        {stripeApiKey === "pk_test_publishable_key" ? (
          <p>Configure your Stripe test mode publishable key.</p>
        ) : (
          <React.Fragment>
            <h1>
              <span aria-label="Gator image" role="img">
                🐊
              </span>
              Rhey's Art Shop
            </h1>
            <h3>Item: {this.props.query.name} Painting</h3>
            <div className="App__body">
              {show && (
                <>
                  
                  <StripeCheckout
                    allowRememberMe={false}
                    amount={amount}
                    billingAddress
                    closed={this.handleClose}
                    description={description}
                    // image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    label="Order Now"
                    locale="auto"
                    name="Rhey's Art Shop"
                    opened={this.handleOpen}
                    panelLabel="{{amount}}"
                    // shippingAddress
                    stripeKey={stripeApiKey}
                    token={this.handleToken}
                    zipCode
                  />
                </>
              )}
              <br />
              <br />
              <br />
              <br />
              <p className="text-muted">
                You may use the following for testing:
              </p>
              <ul className="text-muted">
                <li>Credit Card Number: 4242 4242 4242 4242</li>
                <li>MM/YY: Any present or future date.</li>
                <li>CVC: Any three digits, e.g., 123.</li>
              </ul>
              <p className="text-muted">
                See{" "}
                <a href="https://stripe.com/docs/testing" target="_blank">
                  Stripe Testing
                </a>{" "}
                for more options.
              </p>
              <br />
              <br />
              
            </div>
            <footer className="App__foot">
              {/*
                This button allows the StripeCheckout component to be mounted and unmounted to
                confirm that it behaves as expected.
                */}
              
            </footer>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Payment