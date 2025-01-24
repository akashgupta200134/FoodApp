import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import Menu from "./components/Menu";

const App = () => {
  return (
    <AnimatePresence>
      <div className=" w-screen h-auto flex flex-col bg-primary">
        <Header></Header>

        <main className=" w-full p-8 mt-16 md:mt-24 ">
          <Routes>
            <Route path="/*" element={<MainContainer />}></Route>
            <Route path="/CreateItem" element={<CreateContainer />}></Route>
            <Route path="/Menu" element = {<Menu/>}></Route>
                 
                
           
         
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
