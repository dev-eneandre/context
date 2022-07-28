import Store from "./Store";
import { StoreProvider } from "./StoreContext";
import Count from "./sub/Count";
import "./App.css";
import AddItem from "./AddItem";


function App() {
  return (
    <StoreProvider>
      <div className="shop">
        <Count />
        <AddItem />
        <Store />
      </div>
     </StoreProvider>
  );
}

export default App;
