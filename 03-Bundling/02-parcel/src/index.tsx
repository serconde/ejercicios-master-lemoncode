import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './helloWorld';
import "./mystyles.scss";

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);

console.log(`Api base: ${process.env.API_BASE}`);