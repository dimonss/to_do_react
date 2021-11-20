import './App.css';
import React, {useEffect} from "react";
import {Alert, Button, TextField} from "@mui/material";
import {useMemo, useState} from "react";
import {stringsRU} from "../strings/stringsRU";
import MyList from "./MyList";
import {getLocalStorage, setLocalStorage} from "../utils/localStorage";

function Header() {
    const [inputText, setInputText] = useState("");
    const buttonStatus = useMemo(() => (!inputText), [inputText]);
        const [data, setData] = useState(getLocalStorage())
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setLocalStorage(data)
    }, [data])

    const addNote = () => {
        setData(oldArray => [...oldArray, {text: inputText, checked: false}]);
        setInputText("");
    }

    const deleteItem = indexOfElement => {
        setData(data.filter((item, index) => index !== indexOfElement));
    }

    const changeCheckedStatus = indexOfElement => {
        const newData = data.map((item, index) => index === indexOfElement ? {...item, checked: !item.checked} : item);
        setData(newData);
    }
    const pressEnter = e => {
        if (e.keyCode === 13)
            if (buttonStatus === false)
                addNote();
            else {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false)
                }, 2000);
            }
    }
    return (
        <div className="header">
            <div className="header__inner">
                <div className="input__container">
                    <TextField fullWidth label={stringsRU.inputTitle} value={inputText}
                               onChange={e => setInputText(e.target.value)}
                               onKeyDown={pressEnter}/>
                </div>
                <div className="button__container">
                    <Button variant="contained" disabled={buttonStatus}
                            onClick={addNote}>
                        {stringsRU.add}
                    </Button>
                </div>

            </div>
            <div className={`tost__hiden ${showAlert && "tost__show"}`}>
                <Alert variant="filled" severity="error">
                    {stringsRU.inputTitle}
                </Alert>
            </div>
            <MyList data={data} deleteItem={deleteItem} changeCheckedStatus={changeCheckedStatus}/>
        </div>
    );
}

export default Header;
