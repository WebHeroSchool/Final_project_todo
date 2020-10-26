import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const count = 6;

const App = () => {
  const todoItems = [
    {
      value: 'Закончить модуль',
      isDone: true
    },
    {
      value: 'Заплатить по счетам',
      isDone: false
    },
    {
      value: 'Навести порядок',
      isDone: true
    }];
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Список дел</h1>
      <InputItem />
      <ItemList todoItems={todoItems} />
      <Footer count={count}/>
    </div>
  )
};

export default App;