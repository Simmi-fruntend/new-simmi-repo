import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Introduction.module.scss";
// import image1 from "../../../assests/image3.png";
// import image2 from "../../../assests/image4.png";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const Introduction = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });


  const apiUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    const headers = {
      "Content-type": "Application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .get(`${apiUrl}/carousel`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setData(posts);

        setError({
          status: false,
          msg: "",
          type: "",
        });
      })
      .catch((err) => {
        // if (err.response.status === 404) {
        setError({
          status: true,
          msg: err.message,
          type: "error",
        });
        // }
      });
  }, []);

  const loadScript=(src)=> {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const displayRazorpay=async(e) =>{
    e.preventDefault()
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }


    // const result = await axios.post("http://localhost:3000/payment/orders");
    
    // if (!result) {
      //   alert("Server error. Are you online?");
      //   return;
      // }
    // creating a new donation
    //appending form data from here
    const formData = new FormData();
    // formData.append("name", this.state.popupName);
    // formData.append("email", this.state.popupEmail);
    // formData.append("amount", this.state.amount);
    // formData.append("anonymously", this.state.popupDonate);
    // formData.append("anonymously","True");
    // // formData.append("indian", this.state.popupIndian);
    // formData.append("indian", 'True');
    // formData.append("country_code", this.state.popupCountry);
    // formData.append("currency", this.state.choosecurrency);
    // formData.append("tip", this.state.tipamount);
    // formData.append("phone_number", this.state.popupPhone);
    formData.append("name", "Mudit Kapoor");
    formData.append("email", "muditk441@gmail.com");
    formData.append("amount", 5000);
    formData.append("anonymously",'True');
    // formData.append("indian", this.state.popupIndian);
    formData.append("indian", 'True');
    formData.append("country_code", 91);
    formData.append("currency", 'INR');
    formData.append("tip", 2000);
    formData.append("phone_number", 8791615052);
    let result = await axios.post(
      "http://127.0.0.1:8000/api/razorpay_order",
      // "https://httpbin.org/post",
      formData,
      {
        headers: {
          Authorization:
          'Bearer ' + localStorage.getItem('apitoken'),
          Accept: "application/json",
        },
      }
    );
    let data = result.data;
    console.log(data);


    
    


    const order_id = data.orderId;
    console.log(order_id)
      //static order id now 
    const options = {
      key_id: 'rzp_test_p7QukLMtggo6LE', // Enter the Key ID generated from the Dashboard
      // key_id: process.env.REACT_APP_RAZORPAY_SECRET, // Enter the Key ID generated from the Dashboard
      // key_secret:process.env.REACT_APP_RAZORPAY_KEY_ID,
      key_secret:'kaME4MgYqXHYFT7ustAX5t2W',
      amount: 5000,
      currency: "INR",
      name: 'Mudit Kapoor',
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      // order_id: 'order_K0R4qsZiAuyHiJ',
      handler: async function (response) {
        const data = {
          // razorpay_order_id: order_id,
          // order_id: 'order_K0R4qsZiAuyHiJ',
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await axios.post(
          // "http://api/razorpay.com/v1/orders",
          "http://127.0.0.1:8000/api/razorpay_callback",
          // "https://httpbin.org/post",
          data
        );

        alert(result.data.status);
      },
      prefill: {
        // name: this.state.popupName,
        // email: this.state.popupEmail,
        // contact: this.state.popupPhone,
        name: "Mudit Kapoor",
        email: "muditk441@gmail.com",
        contact: 8719615052,
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className={classes.introduction}>
      <Typography variant="h3" component="h1">
        Let’s Make <span>Better Future</span>
      </Typography>
      <Typography variant="subtitle1" component="p">
        We look forward to alleviate poverty and enhance the dignty of poor in
        the world by addressing basic, but neglected issues of poor.
      </Typography>
      <div className={classes.donateNow}>
        <Button onClick={displayRazorpay}>Donate Now</Button>
      </div>

      {/* Carousal */}

      <div className={classes.carousal1}>
        {!error.status && (
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators carousal1-indicator">
              {data.map((item, i) => {
                return (
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""}
                    aria-current={i === 0 && "true"}
                    aria-label={`Slide ${data.length}`}
                    key={i}
                  ></button>
                );
              })}
            </div>
            <div className="carousel-inner">
              {data.map((item, i) => {
                const active = i === 0 ? "active" : "";

                return (
                  <div className={`carousel-item ${active}`} key={item.id}>
                    <img
                      src={`http://127.0.0.1:8000${item.carousel_img}`}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Chat with us */}

        {/* <div className={classes.chatWithUs}>
          <Button>Chat with Us</Button>
          <span className={classes.chatTale}></span>
        </div> */}
      </div>
    </div>
  );
};

export default Introduction;
