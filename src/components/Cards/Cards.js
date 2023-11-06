import React from "react";
import "./Cards.css";
import CardItem from "../pages/CardItem";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='pictures/img-9.jpg'
              text='Explore the  waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Adventure'
            />
            <CardItem
              src='pictures/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='pictures/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Mystery'
              path='/mystery'
              
            />
            <CardItem
              src='pictures/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Sign In'
              path='/sign-up'
            />
            <CardItem
              src='pictures/img-5.jpg'
              text='Discover captivating products that redefine excellence.'
              label='Products'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
