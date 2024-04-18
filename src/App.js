import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class 
App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={this.pageSize} country='in' category='General' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={this.pageSize} country='in' category='Business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='in' category='Entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={this.pageSize} country='in' category='Health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={this.pageSize} country='in' category='Science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} country='in' category='Sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country='in' category='Technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
