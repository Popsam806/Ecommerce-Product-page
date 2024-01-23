import './App.css';
import Header from './Header/Header';
import Sect from './Section/Sect';
import React, { useRef, useState } from 'react';

import Image1 from "./images/image-product-1.jpg";
import Image2 from "./images/image-product-2.jpg";
import Image3 from "./images/image-product-3.jpg";
import Image4 from "./images/image-product-4.jpg";
import MainLayout from './Layout/MainLayout';

const Images = [
  {
    id: 1,
    img: Image1,
  },
  {
    id: 2,
    img: Image2,
  },
  {
    id: 3,
    img: Image3,
  },
  {
    id: 4,
    img: Image4,
  },
];


export const UserContext = React.createContext()
export const ItemContext = React.createContext()
export const ImageContext = React.createContext()
export const CountContext = React.createContext()

function App() {
  const [items, setItems] = useState([]);

  function Addtocart() {
    // setItems([...items, items]);
    setItems([items]);


  }
  return (
    <div className="App">
      <UserContext.Provider value={Addtocart}>
        <ItemContext.Provider value={items}>
          <ImageContext.Provider value={Images}>
            <CountContext.Provider>
            <MainLayout>
              <Sect />
            </MainLayout>
            </CountContext.Provider>
          </ImageContext.Provider>
        </ItemContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
