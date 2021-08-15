import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CharacterSwitch from "../characters/CharacterSwitch";
import Filter from "../characters/filter";
import Episodes from "../episodes/Episodes";
import Locations from "../location/Locations";
import MyWatchList from "../myWatchList/My watch list";
import styles from './styles.module.css'




const Navigation = () => {


    return (
        <div className={styles.main_content}>
            <Router>
                <nav >


                    <ul className={styles.navigation}>
                        <li >
                           <Link  className={styles.nav} to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link  className={styles.nav} to="/episodes">Episodes</Link>
                        </li>
                        <li>
                        <Link  className={styles.nav} to="/locations">Locations</Link>
                        </li>
                        <li className={styles.navItem}>
                          <Link className={styles.nav} to="/myWatchList">My watch list</Link>
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