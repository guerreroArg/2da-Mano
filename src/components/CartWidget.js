import "bootstrap/dist/css/bootstrap.css";
import  {Badge}  from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
    return (
        <Badge badgeContent={7} color="primary">
            <ShoppingCartOutlinedIcon color="success" />
        </Badge>
    );
}
export default CartWidget;
