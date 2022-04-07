import { action, autorun, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React,{Component} from 'react';
// 1. 옵저버 변수 갱신시에 옵저버 변수를 사용하는 autorun이나, computed 자동호출
// 2. compute변수 갱신시에 compute변수를 사용하는 autorun 호출
class Animal {
  energyLevel

  constructor(name) {
    this.name = name
    this.energyLevel = 100
    makeObservable(this, {
      // mobx가 energyLevel을 항상 주시하세요
      energyLevel:observable,
      // computed 함수이냐, 변수이냐 ? 변수이다.
      // boolean타입의 변수로 사용되고 있다.
      isHungry:computed,
      // energyLevel 값의 변화를 주는 함수
      reduceEnergy:action,
    });
    // energyLevel의 변화가 있으면 호출된다.
    autorun(() => {
      console.log("Energy level:1", this.energyLevel)
    })
    autorun(() => {
      console.log("Energy level:2", this.energyLevel)
    })
    // isHungry에 변화가 있으면 호출된다.
    autorun(() => {
      if (this.isHungry) {
        console.log("Now I'm hungry!")
      } else {
        console.log("I'm not hungry!")
      }
    })
  }
  // 1. 옵저버 변수가 값이 갱신이 일어나면 autorun이 호출된다.
  // 2. 옵저버 변수를 사용하는 autorun이 호출된다.
  reduceEnergy() {
    console.log('에너지 줄임');
    //this.energyLevel -= 10
  }
  // isHungry = return 결과;
  // 이 함수가 옵저버 변수를 사용하고 있음
  // 옵저버 값이 변경 되었을 때 이 함수는 자동 호출됨

  get isHungry() {
    console.log('isHungry');
    // return 100; >> this.energy변수를 안써서 이 함수로 안들어옴
    return this.energyLevel < 50;
  }
}

const giraffe = new Animal()

console.log("--------------------------")
for (let i = 0; i < 1; i++) {
  giraffe.reduceEnergy()
}

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;

/*
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
*/

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