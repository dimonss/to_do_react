import React from "react";
import './App.css';
import MyListItem from "./MyListItem";
import List from '@mui/material/List';


function MyList({data, deleteItem, changeCheckedStatus}) {
    console.log(data);
    return (
        <List className="list">
            {data.map((item, index) => <MyListItem key={index} data={item} deleteItem={deleteItem} index={index}
                                                   changeCheckedStatus={changeCheckedStatus}/>)}
        </List>
    );
}

export default MyList;
