import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate, useRoutes} from "react-router-dom"
import routes from './routes';

const App = () => {  

  return (
    useRoutes(routes)
  );
};



export default App
