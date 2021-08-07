import AppHeader from "../app-header-component/app-header";
import SearchPanel from "../search-panel-component/search-panel";
import ItemStatusFilter from "../item-status-filter-component/item-status-filter";
import ToDoList from "../todo-list-component/todo-list";
import './app.css';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <ToDoList todos={todoData} />
        </div>
    );
};

export default App;
