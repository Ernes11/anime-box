import React, {useState} from "react";
import { Search } from "../Components/Search";
import { Category } from "../Components/Category";
import { ProductItem } from '../Components/ProductItem';
import { ProductList } from "../const";

export const ItemScreen = () => {
    const [items, setItems] = useState(ProductList)
    const getSearchItem = (text) =>{
        console.log(text);
    }
  
    const renderItems = () => {
      return items.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            photo={item.photo}
            price={item.price}
            category={item.category}
          />
        ));
      };
    
    return (
      <section className="goods">
        <div className="container goods__content">
          <Search action={getSearchItem}/>
          <Category />
          <div className="goods__subtitle text_tertiary">
          Прочие товары
          </div>
          <div className="goods__items">
              {renderItems()}
          </div>
        </div>
      </section>
    );
}
  
