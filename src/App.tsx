import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppModalContextProvider from "./Context/ModalContext";
import StoreProvider from "./state/StoreProvider";
import Home from "./component/home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <StoreProvider>
      <AppModalContextProvider>
        <Home />
      </AppModalContextProvider>
      <ToastContainer />
    </StoreProvider>
    
  );
}

export default App;
