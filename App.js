import Navigation from "./Src/Navigation/Navigation"; //Navigation
import { Provider } from "react-redux";
import { Store } from "./Src/Store/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
