import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Characters from "./characters/Characters";
import styles from './styles.module.css'
import CharacterSwitch from "./characters/CharacterSwitch";
import Filter from "./characters/filter";
import Episodes from "./episodes/Episodes";

import Locations from "./Locations";
import MyWatchList from "./My watch list";

const Navigation = () => {

    return (
        <div className={styles.main_content}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link to="/episodes">Episodes</Link>
                        </li>
                        <li>
                            <Link to="/locations">Locations</Link>
                        </li>
                        <li>
                            <Link to="/myWatchList">My watch list</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/characters">
                    <Filter/>
                    <CharacterSwitch/>
                </Route>
                <Route path="/episodes" exact>
                    <Episodes/>
                </Route>

                <Route path="/locations" exact>
                    <Locations/>
                </Route>
                <Route path="/myWatchList" exact>
                    <MyWatchList/>
                </Route>

            </Router>

        </div>
    );
}

export default Navigation;