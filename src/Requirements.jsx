import React from "react";
import img from '../src/assets/profile.png';

const Requirements = ({ theme }) => {
  const handlePayment = async () => {
    const options = {
      key: "testKey here",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Aryan Bajpai",
      description: "Test Transaction",
      image: img,
      handler: (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
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
      <section className={`p-4 ${theme ? 'bg-gray-500' : 'bg-gray-800'} text-white rounded-md text-xl`}>
        <div className="my-2 font-semibold text-2xl text-center">Add Razorpay from SCRIPT</div>
        <div className="my-2">1. Create a React app (npm OR yarn).</div>
        <div className="my-2">
          2. Add Razorpay script in <code>index.html</code>:
          <p className={`mx-5 my-2 p-3 ${theme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}>
            <code>src="https://checkout.razorpay.com/v1/checkout.js"</code>
          </p>
        </div>
        <div className="my-2">
          3. Define a function to handle Payment and send required
          information to Razorpay.
        </div>
      </section>
      <div
        onClick={handlePayment}
        className={`bg-green-500 mt-4 mb-6 text-xl px-4 py-2 rounded-full ${theme ? 'text-white' : 'text-gray-800'} mx-auto w-[180px] text-center cursor-pointer`}
      >
        PAY NOW
      </div>
    </>
  );
};

export default Requirements;