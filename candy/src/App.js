import "./App.css";
import CandyForm from "./components/candyform/CandyForm";
import CadnyContextProvider from "./components/store/CadnyContextProvider";
import CandyMainList from "./components/candyform/CandyMainList";
import Header from "./components/Cart/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [validCart, setValidCart] = useState(false);

const validHandler=(valid)=>{
  setValidCart(valid)
}
  return (
    <CadnyContextProvider>
      {validCart && <Cart hide={validHandler}/>}
      <Header show={validHandler}/>
      <CandyForm />
      <CandyMainList />
    </CadnyContextProvider>
  );
}

export default App;
