import React, { useState } from "react";
import Item from './components/item'
import { useSelector, useDispatch } from 'react-redux';


function WishList() {
  const wishlistPrd = useSelector(state => state.cart.wishlist)

  return (
 
      <div class="products">
        <h3>Sản phẩm yêu thích</h3>
        <div class="product-list card-deck">
        {wishlistPrd && wishlistPrd.map(e => <Item key={e._id} data={e} />)}
        </div>
      </div>

  );
}

export default WishList