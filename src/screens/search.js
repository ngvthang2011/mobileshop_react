import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from 'react-router-dom'
import Item from './components/item'
import { getProducts } from './services/Api'
function Product() {
  const params = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  console.log('location', location.search)

  let searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('query')

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const result = await getProducts({ name: searchValue });
      setProducts(result.data.data)
      setIsLoading(false)
    }

    fetchData();
  }, [searchValue]);

  return (
    <>
      <div class="products">
        {/* <h3>Sản phẩm nổi bật</h3> */}
        <div class="product-list card-deck">
          {products.map(e => <Item key={e._id} data={e} />)}
        </div>
      </div>
    </>
  );
}

export default Product