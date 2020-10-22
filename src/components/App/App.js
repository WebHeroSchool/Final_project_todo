import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import './App.css';

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
    <div className="wrap">
      <h1 className="wrap__title">todos</h1>
      <InputItem className="wrap__input" />
      <ItemList todoItems={todoItems} className="wrap__item"/>
      <Footer count={count}/>
    </div>
  )
};

export default App;