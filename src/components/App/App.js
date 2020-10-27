import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    todoItems: [
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
      }]
  };
  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Список дел:</h1>
        <InputItem/>
        <ItemList todoItems={this.state.todoItems}/>
        <Footer items={this.state.todoItems}/>
      </div>
    )
  }
};


export default App;