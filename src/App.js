import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import assetsdata from './data/assets'
import employeesData from './data/employees'
import DataGrid from "./components/dataGrid"
import NavBar from "./components/navbar"
import Home from "./components/home"
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    assetsData: assetsdata,
    employeesData: employeesData
  }
  render() {
    return (
      <BrowserRouter>
        <div >
          <NavBar />
          <br /><br />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/assets" component={() => <DataGrid data={this.state.assetsData} columns={["id", "name", "location", "Code"]} />}></Route>
            <Route path="/employees" component={() => <DataGrid data={this.state.employeesData} columns={["id", "name", "email", "job"]} />}></Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
