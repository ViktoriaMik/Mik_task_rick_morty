import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Characters from "./Characters";
import styles from './styles.module.css'
import CharacterSwitch from "./CharacterSwitch";
import Filter from "./filter";

const Navigation=()=> {

        return (
            <div className={styles.main_content}>
                <Router>
                    <nav>
                        <ul>
                            <li  >
                                <Link  to="/characters">Characters</Link>
                            </li>
                            <li  >
                                <Link  to="/episodes">Episodes</Link>
                            </li>
                            <li  >
                                <Link  to="/locations">Locations</Link>
                            </li>
                            <li  >
                                <Link  to="/myWatchList">My watch list</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/characters">
                        <Filter/>
                        <CharacterSwitch/>
                        {/*<Characters/>*/}
                    </Route>

                </Router>

            </div>
        );
    }

export default Navigation;