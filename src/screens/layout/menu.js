import React, {useEffect, useState} from 'react';
import {getCategory} from '../services/Api';
import {Link} from 'react-router-dom'

const Menu = () => {

    const [categories, setCategory] = useState([]);
    
    useEffect(() => {
      async function fetchCategories() {
  
        const result = await getCategory();
        setCategory(result.data.data);
      }
  
      fetchCategories();
    }, []);

    return (
        <div class="row">
        	<div class="col-lg-12 col-md-12 col-sm-12">
            	<nav>
                	<div id="menu" class="collapse navbar-collapse">
                        <ul>
                            {
                                categories.map((el) => (
                                <li key={el.id} class="menu-item"><Link to={`/category/${el._id}`}>{el.name}</Link></li>
                                ))
                            }
                            
                
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
