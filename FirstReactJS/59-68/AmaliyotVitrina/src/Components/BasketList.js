import {IconButton, ListItem, ListItemText} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import BasketItem from "./BasketItem";

export default function BasketList (props) {
    const {order, handleBasketShow, removeFromBasket, incrementQuantity, decrementQuantity} = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="list-group basket-list">
            <li className="list-group-item active d-flex justify-content-between align-items-center">
                <span>Basket</span>
                <IconButton onClick={handleBasketShow}>
                    <CloseIcon />
                </IconButton>
            </li>
            {order.length ? order.map(item => {
                return (
                    <BasketItem key={item.id} {...item}
                                removeFromBasket = {removeFromBasket}
                                incrementQuantity = {incrementQuantity}
                                decrementQuantity = {decrementQuantity}
                    />
                )
            }): <li className="list-group-item">Basket is empty</li>}
            <li className="list-group-item active">Total price: <b>{totalPrice} $</b></li>
        </ul>
    )
}