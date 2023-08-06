import React from "react";
import AdvantagesOfProduct from "./compnonents/AdvantagesOfProduct";
import ListAdvantages from "./compnonents/Adventages/ListAdvantages";
import ButtonSmooth from "./compnonents/Btn";
import Characteristics from "./compnonents/Charastrictics";
import FacebookPixel from "./compnonents/FacebookPixel";
import FormOrder from "./compnonents/FormOrder";
import Header from "./compnonents/Header";
import Offer from "./compnonents/Offer";
import OfferPrice from "./compnonents/Offer/OfferPrice";
import Replies from "./compnonents/Replies";
import Slider from "./compnonents/Slider";
import TitleProduct from "./compnonents/TitleProduct";

function App() {
  const discountStartTime = "2023-08-05T11:32:00";
  return (
    <div className="m-auto max-w-screen-xl shadow-md">
      <Header />
      <TitleProduct />
      <Offer discountStartTime={discountStartTime} discountDuration={24} />
      <Slider />
      <ListAdvantages />
      <OfferPrice />
      <AdvantagesOfProduct />
      <ButtonSmooth linkTo={"замовити"} value={"Купити зараз"} />
      <Characteristics />
      <FormOrder />
      <Replies />
      <FacebookPixel />
    </div>
  );
}

export default App;
