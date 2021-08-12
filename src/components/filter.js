import React, {useEffect, useState} from "react";
import {
    Container,

    FormControl,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from '@material-ui/core'
import {useDispatch, useSelector} from "react-redux";
import {loadCharacters, loadFilterCharacters} from "../redux/action-creator/characters-action-creator";

const species = [{species: "Human"}, {species: "Alien"}, {species: "Humanoid"}];
const status = [{status: "Alive"}, {status: "Dead"}, {status: "Uknown"}];
const gender = [
    {gender: "Male"},
    {gender: "Female"},

];


const Filter = () => {
    const dispatch = useDispatch();
    const filtercharacters = useSelector(({characters: {filterCharacter}}) => filterCharacter);
  console.log(filtercharacters)


    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [checked, setChecked] = useState('')

    const setData = (name, value, checked) => {
        setName((name))
        setValue(value)
        setChecked(checked)
    }

    useEffect(() => {
        dispatch(loadFilterCharacters(name, value, checked))
    }, [name, value, checked])

    return (
        <Container>
            <FormControl>
                <FormGroup>
                    {species.map((species, i) => (
                        <FormControlLabel key={i} control={
                            <Checkbox name='species'
                                      onChange={({target: {value, name, checked}}) => setData(name, value, checked)}/>
                        }
                                          label={species.species}
                                          value={species.species}
                        />
                    ))}
                </FormGroup>
            </FormControl>

            <FormControl>
                <FormGroup>
                    {status.map((e, i) => (
                        <FormControlLabel
                            key={i}
                            control={
                                <Checkbox
                                    name='status'
                                    onChange={({target: {value, name, checked}}) => setData(name, value, checked)}/>

                            }
                            label={e.status}
                            value={e.status}
                        />
                    ))}
                </FormGroup>
            </FormControl>

            <FormControl>
                <FormGroup>
                    {gender.map((s, i) => (
                        <FormControlLabel
                            key={i}
                            control={
                                <Checkbox
                                    name='gender'
                                    onChange={({target: {value, name, checked}}) => setData(name, value, checked)}/>

                            }
                            label={s.gender}
                            value={s.gender}
                        />
                    ))}
                </FormGroup>
            </FormControl>


        </Container>
    );
}


export default Filter;