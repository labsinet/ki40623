import { useState } from "react";

import "./AddProduct.scss";

const AddProduct =() => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const saveProduct = async(e) => {
        e.preventDefault();
        const product= {title, price};
        await fetch('http://localhost:8181/products', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              'Content-Type':'application/json'
            } 
    });

}

    return (
        <div>
                <form onSubmit={saveProduct}>
                    
                </form>
        </div>
    )
}

export default AddProduct;