//import "materialize-css/dist/css/materialize.min.css";
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


/*const CartWidget = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <a href="sass.html">
          <i className="large-material-icons">ShoppingCart</i>
        </a>
      </li>
      <li className="flow-text">5</li>
    </ul>
  );
};
export default CartWidget;

import  {Badge}  from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
*/

