import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';

const count = 6;
const todoItems = ['Закончить модуль', 'Заплатить по счетам', 'Навести порядок'];

const App = () => (
  <div>
    <h1>todos</h1>
    <InputItem />
    <ItemList todoItems = {todoItems}/>
    <Footer count = {count}/>
  </div>
);

export default App;