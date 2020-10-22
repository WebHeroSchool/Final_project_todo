import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';

const count = 6;

const App = () => {
  const todoItems = [
    {
      value: 'Закончить модуль'
    },
    {
      value: 'Заплатить по счетам'
    },
    {
      value: 'Навести порядок'
    }];
  return (
    <div>
      <h1>todos</h1>
      <InputItem/>
      <ItemList todoItems={todoItems}/>
      <Footer count={count}/>
    </div>
  )
};

export default App;