import { useState } from "react";
import Navbar from "../../components/Navbar";
import { data } from "../../data/data";

function Cart() {
  const firstThree = data.slice(0, 3);

  // Create an array to manage the counter state for each item
  const [counters, setCounters] = useState(firstThree.map(() => 1));
  const [amountToPay, setAmountToPay] = useState(15.95);
  const [expeditedDelivery, setExpeditedDelivery] = useState(0);
  const estimatedTaxes = amountToPay * 0.07;

  // Handler function to increment the counter for a specific item
  const decrementCounter = (index) => {
    if (counters[index] > 1) {
      const newCounters = [...counters];
      newCounters[index] -= 1;
      setCounters(newCounters);
    }
  };

  // Handler function to decrement the counter for a specific item
  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const handleDeliveryChange = (e) => {
    const newExpeditedDelivery = parseInt(e.target.value);
    setExpeditedDelivery(newExpeditedDelivery);
  };

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="m-auto flex justify-center h-[50px] w-full">
        <h1 className="max-w-[1640px] font-bold text-3xl font-comfortaa text-orange-600">
          Shopping Cart
        </h1>
      </div>
      <div className="md:flex items-center justify-center">
        <div className="scale-75 md:scale-100 font-comfortaa">
          {firstThree.map((item, index) => (
            <div
              key={index}
              className="w-[440px] md:w-full h-[300px] md:mx-4 md:h-[150px] grid grid-cols-3 md:grid-cols-5 items-center md:gap-2 border-b-2 border-slate-500"
            >
              <h5 className="m-auto">{item.name}</h5>
              <img
                src={item.image}
                className="object-cover h-[120px] w-[120px] rounded-full m-auto"
                alt={item.name}
              />
              <div className="h-[40px] flex items-center justify-center border-2 border-orange-600 rounded-full m-auto">
                <button
                  onClick={() => decrementCounter(index)}
                  className="text-xl border-none hover:text-sky-400"
                >
                  -
                </button>
                <p className="mx-2">{counters[index]}</p>
                <button
                  onClick={() => incrementCounter(index)}
                  className="text-lg border-none hover:text-orange-600"
                >
                  +
                </button>
              </div>
              <p className="m-auto">{item.price}</p>
              <button className="text-bold m-auto bg-red-700 text-white hover:scale-110 duration-200">
                X
              </button>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <p className="p-2">
              Subtotal
              <span className="text-3xl lg:text-6xl"> $ {amountToPay}</span>
            </p>
          </div>
        </div>
        <div className="relative border-2 text-mm border-sky-900 text-black font-comfortaa h-[500px] lg:h-[580px] lg:w-[320px] min-w-[300px] rounded-lg mx-10 scale-75 md:scale-100">
          <h1 className="font-bold text-xl m-4 border-b">Summary</h1>
          <div
            className="flex
           justify-between items-center"
          >
            <p className="mx-4">Do you have a promo code?</p>
            <button className="flex items-center justify-center mx-4 rounded h-[25px] w-[70px] bg-gradient-to-tr from-orange-600 to-red-600 text-white hover:scale-105 duration-300">
              Apply
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="m-4 ">Estimated Tax</p>
            <span className="mx-4">$ {estimatedTaxes.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="mx-4">
              Shipping
              <select
                value={expeditedDelivery}
                onChange={handleDeliveryChange}
                name="Delivery options"
                id="Delivery options"
                className="mx-2 text-sm font-semibold hover:border border-black rounded"
              >
                <option value={0}>Free Delivery</option>
                <option value={5}>Priority</option>
              </select>
            </p>
            <span className="mx-4">$ {expeditedDelivery}</span>
          </div>
          <div className="flex items-baseline justify-between m-4 absolute bottom-0 border-t w-11/12">
            <h2>Grand Total</h2>
            <span className="text-4xl font-semibold mt-2">
              $ {(amountToPay + estimatedTaxes + expeditedDelivery).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
