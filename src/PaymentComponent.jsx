import React from "react";
import { useRazorpay } from "react-razorpay";

const PaymentComponent = ( {theme}) => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
    const options = {
      key: "testKey here",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <main>
      <section
        className={`p-4 ${
          theme ? "bg-gray-500" : "bg-gray-800"
        } text-white rounded-md text-xl`}
      >
        <div className="my-2 font-semibold text-2xl text-center">Add Razorpay using useRazorpay Hook of react-razorpay library </div>
        <div className="my-2">1. Create a React app (npm OR yarn).</div>
        <div className="my-2">
          2. Install React-Razorpay:{" "}
          <span className="font-semibold">
            npm i react-razorpay / yarn add react-razorpay
          </span>
        </div>
        <div className="my-2">
          3. Import useRazorpay Hook to load the Razorpay script and manage the loading state and errors.
        </div>
        <div>
          4. Define a function to handle Payment and send required information
          to Razorpay.
        </div>
      </section>
      <div
        onClick={handlePayment}
        className={`bg-green-500 mt-4 text-xl px-4 py-2 rounded-full ${
          theme ? "text-white" : "text-gray-800"
        } mx-auto w-[180px] text-center cursor-pointer`}
      >
        PAY NOW
      </div>
    </main>
  );
};

export default PaymentComponent;