import React from"react";

function Product(props){
    return(
        <div className="contained">
            <div className="container">
                <img className="product_img" src="Pantop-20-Mg.png" alt="product_img" srcset="" />
                <h3 className = "product_title">{props.name}<em> {props.mg}</em></h3>
                <p className = "quantity" >{props.quantity}</p>

                <div className="Offerandprice">
                <p className="mrp" >MRP.<s>{props.Original_mrp}</s></p>
                <p className="offer_text">{props.percentage_off}% OFF</p>
                </div>
            
                <h3>Rs. 270</h3>
                <button className="cart_button">+ Add to cart</button>
            </div>
        </div>
    );
}

export default Product;