import React, {useEffect, useState} from 'react'
import {loadLocation, setCurrentPageLocation} from "../../redux/action-creator/location-action-creator";
import {useDispatch, useSelector} from "react-redux";
import styles from '../styles.module.css'
import {setCurrentPageEpisodes} from "../../redux/action-creator/episodes-action-creator";

const Locations = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(({location: {currentPage}}) => currentPage)
    const location = useSelector(({location: {location}}) => location)
    const [value, setValue] = useState('')
    console.log(value)
    let searchLocation = location.filter(location => {
        return location.name.toLowerCase().includes(value.toLowerCase()) || location.type.toLowerCase().includes(value.toLowerCase()) || location.dimension.toLowerCase().includes(value.toLowerCase())
    })
    const page = []
    for (let i = 1; i < 7; i++) {
        page.push(i)
    }

    useEffect(
        () => {
            dispatch(loadLocation(currentPage))
        }, [currentPage]
    )
    return (
        <table>
            <thead>
            <th>
                <select onChange={({target: {value}}) => setValue(value)}>
                    {location.map(loc => (
                        <option value={loc.name}>{loc.name}</option>
                    ))}
                </select>
            </th>
            <th>
                <select onChange={({target: {value}}) => setValue(value)}>
                    {location.map(loc => (
                        <option value={loc.type}>{loc.type}</option>
                    ))}

                </select>
            </th>
            <th>
                <select onChange={({target: {value}}) => setValue(value)}>
                    {location.map(loc => (
                        <option value={loc.dimension}>{loc.dimension}</option>
                    ))}
                </select>

            </th>
            </thead>

            {
                searchLocation.map(loc => (<tbody>

                    <tr>
                        <td>{loc.name}</td>
                        <td>{loc.type}</td>
                        <td>{loc.dimension}</td>
                    </tr>
                    </tbody>
                ))
            }
            <div className={styles.bottom}>
                {page.map(page => (
                    <span
                        onClick={() => dispatch(setCurrentPageLocation(page))}
                        className={currentPage === page ? styles.pages : styles.page}>
                            {page}</span>
                ))}
            </div>

        </table>

    );
}

export default Locations;