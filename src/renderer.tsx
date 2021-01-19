import React from "react";
import ReactDOM from "react-dom";
import "./renderer.scss";

// Components

const Index: React.FC = () => <div>Hello World</div>;

// Main

const div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(<Index />, div);
