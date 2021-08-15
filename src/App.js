import './App.css';

import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import Navigation from "./components/navigation/navigation";
import MyWatchList from "./components/myWatchList/My watch list";

function App() {
    return (
        <Provider store={store}>

            <Navigation/>
        </Provider>
    );
}

export default App;
