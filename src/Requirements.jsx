import React from "react";
import img from '../src/assets/profile.png'

const Requirements = ( {theme} ) => {
  const handlePayment = async () => {
    const options = {
      key: "testKey Here", // Enter the Key ID generated from the Dashboard
      amount: 50000, // Amount is in currency subunits. Default is paise
      currency: "INR",
      name: "Aryan Bajpai",
      description: "Test Transaction",
      image: {img},
      // order_id: data.id, // Order ID created by Razorpay
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Aryan Bajpai",
        email: "your-email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <section className="bg-gray-500 p-4 text-white w-[70%] mx-auto rounded-md text-xl">
        <div className="my-2">1. Create a React app (npm OR yarn).</div>
        <div className="my-2">
          2. Install React-Razorpay:{" "}
          <span className="font-semibold">
            npm i react-razorpay / yarn add react-razorpay
          </span>
        </div>
        <div>
          3. Add script of Razorpay in index.html to be able to use Razorpay.
          <p className={`mx-5 my-2 p-3 ${theme === true ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}  rounded-md`}>
            src = "https://checkout.razorpay.com/v1/checkout.js"
          </p>
        </div>
        <div>
          4. Define a function that handles Payment and sends required
          information as Options to Razorpay and use this function to make
          Payments.
        </div>
      </section>
      <div
        onClick={handlePayment}
        className={`bg-green-500 mt-4 text-xl px-4 py-2 rounded-lg ${theme === true ? 'text-white' : 'text-gray-800'} mx-auto w-[220px] text-center cursor-pointer`}
      >
        Pay Now Rs. 500/-
      </div>
    </>
  );
};

export default Requirements;
