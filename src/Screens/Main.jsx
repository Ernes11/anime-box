import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NewsScreen} from "./NewsScreen";
import {OrderingScreen} from "./OrderingScreen";
import {ItemScreen} from "./ItemScreen";
import {DiscountsScreen} from "./DiscountsScreen";
import {About} from "./About";
import { Nav } from "../Components/Nav";
import { ProductList } from "../const";
import { BoxList } from "../const";
import { Button } from "../UI/Button";
import { Footer } from "../Components/Footer";
import { ProductItem } from "../Components/ProductItem";
import BoxItem from "../Components/BoxItem";
import BoxImg from "../assets/images/box_img.png";
import { CircleButton } from "../UI/CircleButton";
import { NewsItem } from "../Components/NewsItem";
import { News } from "../Components/News";



export const Main = () => {
  const [products, setProducts] = useState(ProductList);
  const [boxs, setBoxs] = useState(BoxList);

  const renderBoxs = () => {
    return boxs.map((item) => (
      <BoxItem
        key={item.id}
        photo={item.photo}
        title={item.title}
        desc={item.desc}
      />
    ));
  };

  const renderProducts = () => {
    return products.map((item) => (
      <ProductItem
        title={item.title}
        photo={item.photo}
        price={item.price}
        category={item.category}
      />
    ));
  };

  const getText = () => {
    console.log("text");
  };
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route path="/news">
             <NewsScreen/>
          </Route>

          <Route path="/discounts">
             <DiscountsScreen />
          </Route>
          <Route path='/about'>
           <About />   
          </Route>
          <Route path='/ordering'>
           <OrderingScreen />   
          </Route>
          <Route path='/product'>
           <ItemScreen />   
          </Route>
        </Switch>
        <Button text= "Button" action={getText} />
        {/* <div classname="list">
            {/* // {renderProducts()} */}
            {/* // </div>  */} */}

        {/* <div className="container">
       {/* <NewsItem version="3" /> */}
        {/* {renderBoxs()}
        {/* // <CircleButton /> */} */}
        <Footer />
        </div>
    </Router>
  );
};
