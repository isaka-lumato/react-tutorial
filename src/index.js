import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./functionBased/App.css"
import TodoContainer from "./functionBased/components/TodoContainer";

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById("root")
);