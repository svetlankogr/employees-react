import { Component } from "react";

import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

import "./App.css";

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      let newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
