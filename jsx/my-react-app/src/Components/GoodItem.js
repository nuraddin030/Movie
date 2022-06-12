import {Button, IconButton} from "@mui/material";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCart';

export default function GoodItem (props) {
    const {id, name, description, price, full_background, addToBasket} = props;
    return (
        <div className="card" id={id}>
            <img className="card-img-top" src={full_background} alt={name}/>
            <div className="card-content">
                <h5 className="card-title mt-1 text-center">
                    {name}
                </h5>
                <p className="text-center">{description}</p>
            </div>
            <div className="card-action mb-3">
                <Button variant="contained" className="btn ms-4" onClick={() => addToBasket({id, name, price})}>
                    Buy
                </Button>
                <span className="me-4" style={{fontSize: "1.8rem"}}>
                    {price}$
                </span>
            </div>
        </div>
    )
}