import React from "react";
import ListAdvantages from "./compnonents/Adventages/ListAdvantages";
import ButtonSmooth from "./compnonents/Btn";
import Characteristics from "./compnonents/Characteristics";
import Description from "./compnonents/Description";
import FacebookPixel from "./compnonents/FacebookPixel";
import FormOrder from "./compnonents/FormOrder";
import Header from "./compnonents/Header";
import HowToOrder from "./compnonents/HowToOrder";
import Offer from "./compnonents/Offer";
import OfferPrice from "./compnonents/Offer/OfferPrice";
import Replies from "./compnonents/Replies";
import Slider from "./compnonents/Slider";
import TitleProduct from "./compnonents/TitleProduct";
import WhyBoard from "./compnonents/WhyBoard";

function App() {
  const discountStartTime = "2023-08-07T11:32:00";
  return (
    <div className="m-auto max-w-screen-xl shadow-md">
      <Header />
      <TitleProduct />
      <Offer discountStartTime={discountStartTime} discountDuration={24} />
      <Slider />
      <ListAdvantages />
      <OfferPrice />
      <ButtonSmooth linkTo={"замовити"} value={"Замовити в 1 клік"} />
      <Description />
      <WhyBoard />
      <Characteristics />
      <ButtonSmooth linkTo={"замовити"} value={"Замовити в 1 клік"} />
      <HowToOrder />
      <Replies />
      <FormOrder />
      <FacebookPixel />
    </div>
  );
}

export default App;
