import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <div>
      <header className="section-header">

        <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav d-none d-md-flex mr-auto">
              <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash On Delivery</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Free Delivery</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash Backs</a></li>
            </ul>
            <div className="navbar-nav d-flex align-items-center gap-2">
              <Link to={'/login'} className='btn btn-primary' >Login</Link>
              <Link to={'/register'} className='btn btn-success'>Register</Link>
            </div>
          </div>
        </nav>

        <section className="header-main border-bottom bg-white">
          <div className="container-fluid">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
              <div className="col-md-2">
              <Link to={'/'}> <img className="d-none d-md-flex" src="https://i.imgur.com/R8QhGhk.png" width="100" /></Link>
              </div>
              <div className="col-md-8">
                <div className="d-flex form-inputs">
                  <input className="form-control" type="text" placeholder="Search any product..." />
                  <i className="bx bx-search"></i>
                </div>
              </div>

              <div className="col-md-2">
                <div className="d-flex d-none d-md-flex flex-row align-items-center">
                  <span className="shop-bag"><i className='bx bxs-shopping-bag'></i></span>
                  <div className="d-flex flex-column ms-2">
                    <span className="qty">1 Product</span>
                    <span className="fw-bold">$27.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/Elecronics'} className="nav-link" aria-current="page" href="#">Electronics</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Fashion'} className="nav-link" href="#">Fashion</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Furnitures'} className="nav-link" href="#">Furnitures</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mobiles
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Smart Phones</a></li>
                    <li><a className="dropdown-item" href="#">Feature Phones</a></li>
                    <li><a className="dropdown-item" href="#">Mobile Covers</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Head
