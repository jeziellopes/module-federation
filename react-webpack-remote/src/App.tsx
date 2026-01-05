import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "host/store";
import { Label } from '@shared/ui'
import '@shared/styles/App.css'
import "@shared/styles/global.css";

import { Header, Content } from '@shared/components'

const App: React.FC = () => (
  <div className="container">
    <Label>Local Header Component</Label>
    <Header />
    <Label>Local Content Component</Label>
    <Content />
  </div>
);
ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById("app"));
