import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer"



function App() {
  return (
    <div className=" w-screen h-auto flex flex-col bg-primary">
      <Header></Header>


      <main className=" w-full p-8 mt-24 ">

        <Routes>

          <Route path="/*" element={<MainContainer />} ></Route>
          <Route path="/CreateItem" element = {<CreateContainer/>}>

          </Route>



        </Routes>




      </main>

    </div>
  );
}

export default App;
