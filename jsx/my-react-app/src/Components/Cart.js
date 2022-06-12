import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import {IconButton} from "@mui/material";

export default function Cart (props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props
    return (
        <div className="cart">
            <IconButton onClick={handleBasketShow}>
                <ShoppingCartCheckoutTwoToneIcon color="info" fontSize={"large"}/>
                {quantity ? <span className="card-quantity">{quantity}</span> : null}
            </IconButton>
        </div>
    )
}