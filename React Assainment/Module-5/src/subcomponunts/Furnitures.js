import React from 'react'
import { Fur } from './FurniturApi'

function Furnitures() {
    return (
        <div>
        <div className="row container-fluid">
        {Fur && Fur.map((v, i) => (
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#" className="image">
                  <img className="pic-1" src={v.img} />
                </a>
                <ul className="product-links">
                  <li><a href="#" data-tip="Add to Wishlist"><i className="bx bxs-heart"></i></a></li>
                  <li><a href="#" data-tip="Quick View"><i className="bx bxs-search"></i></a></li>
                </ul>
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="bx bxs-star"></li>
                  <li className="bx bxs-star"></li>
                  <li className="bx bxs-star"></li>
                  <li className="bx bxs-star"></li>
                  <li className="bx bxs-star"></li>
                </ul>
                <h3 className="title"><a href="#">{v.productName}</a></h3>
                <div className="price"><span>$90.00</span> {v.price}</div>
                <a className="add-to-cart" href="#">add to cart</a>
              </div>
            </div>
          </div>
        ))}

      </div>
        </div>
    )
}

export default Furnitures
