import { action, autorun, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  get report() {
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

const observableTodoStore = new ObservableTodoStore();
                        
const TodoList = observer(({store}) => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }

  return (
    <div>
      { store.report }
      <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
      </ul>
      { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
      <button onClick={ onNewTodo }>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
})

const TodoView = observer(({todo}) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  }

  const onRename = () => {
    todo.task = prompt('Task name', todo.task) || todo.task;
  }

  return (
    <li onDoubleClick={ onRename }>
      <input
        type='checkbox'
        checked={ todo.completed }
        onChange={ onToggleCompleted }
      />
      { todo.task }
      { todo.assignee
        ? <small>{ todo.assignee.name }</small>
        : null
      }
    </li>
  );
})
function App() {
  return (
    <div>
      <TodoList store={observableTodoStore}></TodoList>
    </div>
  );
}

export default App;

// import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
// import { observer } from 'mobx-react';
// import React, { Component } from 'react';
// import totalStore from './store/index';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <button onClick={()=>{totalStore.tigerStore.increase()}}>tiger증가</button>
//         <button onClick={()=>{totalStore.tigerStore.decrease()}}>tiger감소</button>

//         <button onClick={()=>{totalStore.lionStore.increase()}}>lion증가</button>
//         <button onClick={()=>{totalStore.lionStore.decrease()}}>lion감소</button>
//         <h1>{totalStore.tigerStore.count}</h1>
//         <h1>{totalStore.lionStore.number}</h1>
//       </div>
//     );
//   }
// }

// export default observer(App);