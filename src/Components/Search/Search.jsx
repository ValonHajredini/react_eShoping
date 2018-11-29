import React from 'react';
import './Search.css';
const Search = (props) => {
    return (
       <div className={'container'}>
           <div className="form-group position-relative">
               <ul className={'search-form-layout'}>
                   <li className={'search-inpput'}>
                       <input type="search" placeholder={'Kerko...'} className={'form-control'}/>
                   </li>
                   <li className={'search-categorie'}>
                       <select name="Categories" className={'form-control'}>
                           <option value="SPORTSWEAR">SPORTSWEAR</option>
                           <option value="MENS">MENS</option>
                           <option value="WOMENS">WOMENS</option>
                           <option value="FASHION">FASHION</option>
                           <option value="HOUSEHOLDS">HOUSEHOLDS</option>
                           <option value="INTERIORS">INTERIORS</option>
                           <option value="CLOTHING">CLOTHING</option>
                           <option value="BAGS">BAGS</option>
                           <option value="SHOES">SHOES</option>
                       </select>
                   </li>
                   <li className={'search-button'}>
                        <button className={'search-button btn'}>Kerko</button>
                   </li>
               </ul>

           </div>
       </div>
    );
};
export  default Search;