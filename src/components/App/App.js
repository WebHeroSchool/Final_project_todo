import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';

const App = () => (
  <div>
    <h1>todos</h1>
    <InputItem />
    <ItemList />
    <Footer />
  </div>
);

export default App;