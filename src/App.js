import React from "react";
import ListAdvantages from "./components/Advantages/ListAdvantages";
import ButtonSmooth from "./components/Btn";
import Characteristics from "./components/Characteristics";
import Description from "./components/Description";
import FacebookPixel from "./components/FacebookPixel";
import FormOrder from "./components/FormOrder";
import Header from "./components/Header";
import HowToOrder from "./components/HowToOrder";
import Offer from "./components/Offer";
import OfferPrice from "./components/Offer/OfferPrice";
import Replies from "./components/Replies";
import Slider from "./components/Slider";
import TitleProduct from "./components/TitleProduct";
import WhyBoard from "./components/WhyBoard";

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
