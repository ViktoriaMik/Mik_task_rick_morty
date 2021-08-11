import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import Navigation from "./components/navigation";

function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}

export default App;
