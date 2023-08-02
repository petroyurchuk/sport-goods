import React from "react";
import AdvantagesOfProduct from "./compnonents/AdvantagesOfProduct";
import ListAdvantages from "./compnonents/Adventages/ListAdvantages";
import Characteristics from "./compnonents/Charastrictics";
import FormOrder from "./compnonents/FormOrder";
import Header from "./compnonents/Header";
import Offer from "./compnonents/Offer";
import OfferPrice from "./compnonents/Offer/OfferPrice";
import Replies from "./compnonents/Replies";
import Slider from "./compnonents/Slider";

function App() {
  const discountStartTime = "2023-08-02T11:32:00";
  return (
    <div className="m-auto max-w-screen-xl shadow-md">
      <Header />
      <ListAdvantages />
      <Slider />
      <Offer discountStartTime={discountStartTime} discountDuration={24} />
      <OfferPrice />
      <AdvantagesOfProduct />
      <Characteristics />
      <FormOrder />
      <Replies />
    </div>
  );
}

export default App;
