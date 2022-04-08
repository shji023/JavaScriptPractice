import { action, autorun, computed, configure, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

class ObservableTodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    console.log('completedTodosCount');
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  get report() {
    console.log('report');
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    // return 'tiger';
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    console.log('addTodo');
    this.todos.push({ task: task, completed: false,});
  }
}

const observableTodoStore = new ObservableTodoStore();
console.log('------------------------------');

class App extends Component {
  f1 = ()=>{
    observableTodoStore.addTodo("read MobX tutorial");
  }
  f2 = ()=>{
    observableTodoStore.addTodo("try MobX");
  }
  f3 = ()=>{
    observableTodoStore.todos[0].completed = true;
  }
  f4 = ()=>{
    observableTodoStore.todos[1].task = "try MobX in own project";
  }
  f5 = ()=>{
    observableTodoStore.todos[0].task = "grok MobX tutorial";
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼</button>
        <button onClick={this.f2}>버튼</button>
        <button onClick={this.f3}>버튼</button>
        <button onClick={this.f4}>버튼</button>
        <button onClick={this.f5}>버튼</button>
        <h1>{observableTodoStore.completedTodosCount}</h1>
        {
          observableTodoStore.todos.map((value, index)=>{
            return <h1 key ={index}>{value.task}{value.completed.toString()}</h1>
          })
        }
      </div>
    );
  }
}

export default observer(App);
