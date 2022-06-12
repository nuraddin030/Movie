import SendIcon from '@mui/icons-material/Send';
import {ButtonGroup, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function BasketItem (props) {
    const {id, name, price, quantity, removeFromBasket, incrementQuantity, decrementQuantity} = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
                {name} x {quantity} = {price} <b>$</b>
            </span>
            <ButtonGroup>
                <IconButton onClick={() => incrementQuantity(id)}>
                    <AddIcon />
                </IconButton>
                <IconButton onClick={() => decrementQuantity(id)}>
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => removeFromBasket(id)}>
                    <DeleteIcon />
                </IconButton>
            </ButtonGroup>
        </li>
    )
}