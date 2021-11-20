import React from "react";
import './App.css';
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MyListItem({key, data, deleteItem, index, changeCheckedStatus}) {
    return (
        <ListItem
            key={key}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={() => deleteItem(index)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={() => changeCheckedStatus(index)}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={data.checked}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={data.text} />
            </ListItemButton>
        </ListItem>

    );
}

export default MyListItem;
