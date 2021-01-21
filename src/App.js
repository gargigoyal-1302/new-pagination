import React from "react";
import Posts from "./Components/Posts";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
