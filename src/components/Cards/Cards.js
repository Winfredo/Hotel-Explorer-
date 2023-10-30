import React from "react";
import "./Cards.css";
import CardItem from "../CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out these EPIC Destinations.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="pictures/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/adventure"
            />

            <CardItem
              src="pictures/img-2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Luxury "
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="pictures/img-4.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Mystery"
              path="/mystery"
            />

            <CardItem
              src="pictures/img-3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Sign In "
              path="/sign-up"
            />

<CardItem
              src="pictures/img-5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Products "
              path="/products"
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Cards;
