import React from "react";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Cart, ProdAmount } from './StyledComponents';
import { Add, Remove } from '@mui/icons-material';



const ItemCount = ({ stock = 5, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
            <Cart>
            <Button variant="outline-success" onClick={decrement}>-</Button>   
            <ProdAmount>{count}</ProdAmount>        
            <Button variant="outline-success" onClick={increment}>+</Button> 
            {
                stock
                ? <Button className="mx-3" variant="outline-warning" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="outline-warning" disabled>Add to Cart</Button>
            }
            </Cart>
            

    );
}

export default ItemCount; 

