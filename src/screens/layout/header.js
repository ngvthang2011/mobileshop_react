import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const products = useSelector(state => state.cart.products);
  const wishlistProduct = useSelector(state => state.cart.wishlist);
  let history = useHistory()
  const [query, setQuery] = useState('')

  const onChangeText = (event) => {
    setQuery(event.target.value)
  }

  const onSubmit = () => {
    history.push(`/search?query=${query}`)
  }

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1><a href="/"><img className="img-fluid" src="/images/logo.png" /></a></h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form className="form-inline" onSubmit={e => e.preventDefault()}>
              <input
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                value={query}
                onChange={onChangeText}
              />
              <button
                className="btn btn-danger mt-3"
                onClick={onSubmit}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <Link className="mt-4 mr-2" to='/wishlist'>Yêu thích</Link><span className="mt-3"> {wishlistProduct?.length}</span>
            <Link className="mt-4 mr-2" to='/cart'>giỏ hàng</Link><span className="mt-3"> {products?.length}</span>
          </div>
        </div>
      </div>
      <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  )
}
