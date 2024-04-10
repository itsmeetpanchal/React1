import React from 'react';
import './App.css';
import { All } from './Api';


function Header() {
  return (
    <div>



      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/slider2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/slider3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev border-0 bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next border-0 bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>












      <div className="row container-fluid">
        {All && All.map((v, i) => (
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
  );
}

export default Header;
