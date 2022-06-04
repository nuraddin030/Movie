import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import {Star} from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import "./PostListItem.css"

export default class PostListItem extends React.Component {
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important){
            classNames += " important";
        }
        if (like) {
           classNames += " like";
        }

        return(
            <div className={classNames}>
            <span
                className="app-list-item-label"
                onClick={onToggleLiked}
            >
                {label}
            </span>
                <div>
                    <Stack direction="row" spacing={2} className="btn-stack d-flex text-center">
                       <IconButton
                            type= "button"
                            aria-label="star"
                            className="btn-star btn-sm"
                            onClick={onToggleImportant}
                        >
                            <Star />
                        </IconButton>
                        <IconButton
                            type= "button"
                            aria-label="delete"
                            className="btn-trash btn-sm"
                            onClick={onDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <i className="heart-icon"><FavoriteIcon /></i>
                    </Stack>
                </div>
            </div>
        )
    }
}