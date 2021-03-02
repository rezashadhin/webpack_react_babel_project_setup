import React from "react";
import ReactDOM from "react-dom";
import MyImage from './assets/dk.jpg';
import App from './components/script/App'
import './components/scss/index.scss';

const Index = () => {
  return (
    <div>
        <div>
            <h2>Hello World {2+2}</h2>
            <p>Welcome to my-webpack-react-starter</p>
            <img src={MyImage} />
            <App firstProps=',Thanks Props!'/>

        </div>
        
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));