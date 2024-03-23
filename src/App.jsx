<<<<<<< HEAD
import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import {AnimatePresence} from "framer-motion";
=======
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer"
>>>>>>> a5611d6b018275dbdd9a94ee6017168997d769b8

const App = () => {
  return (
<<<<<<< HEAD
    <AnimatePresence>
      <div className=" w-screen h-auto flex flex-col bg-primary">
        <Header></Header>
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />}>  </Route>
            <Route path="/createItem" element={<CreateContainer />}></Route>
=======
    <div className=" w-screen h-auto flex flex-col bg-primary">
      <Header></Header>


      <main className=" w-full p-8 mt-24 ">

        <Routes>

          <Route path="/*" element={<MainContainer />} ></Route>
          <Route path="/CreateItem" element = {<CreateContainer/>}>

          </Route>



        </Routes>
>>>>>>> a5611d6b018275dbdd9a94ee6017168997d769b8




<<<<<<< HEAD





          </Routes>







        </main>
      </div>
    </AnimatePresence>
=======
      </main>

    </div>
>>>>>>> a5611d6b018275dbdd9a94ee6017168997d769b8
  );
};

export default App;
