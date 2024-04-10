import React from 'react'
import './style.css'
import { Elec } from './ElecApi';



function Electronics() {
    return (
        <div>
            <h1 className='text-center p-2'>Electronics Items</h1>
            <main className="cd__main">
                <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
                    <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                        {Elec && Elec.map((v, i) => (
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img
                                            src="https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg"
                                            className="card-img-top" alt="product.title" />
                                    </a>

                                    <div className="label-top shadow-sm">
                                        <a className="text-white" href="#">{v.cName}</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span
                                                className="float-start badge rounded-pill bg-success">{v.pPrice}</span>

                                            <span className="float-end"><a href="#"
                                                className="small text-muted text-uppercase aff-link">reviews</a></span>
                                        </div>
                                        <h5 className="card-title">
                                            <a target="_blank" href="#">{v.pName}</a>
                                        </h5>

                                        <div className="d-grid gap-2 my-4">

                                            <a href="#" className="btn btn-warning bold-btn">add to cart</a>

                                        </div>
                                        <div className="clearfix mb-1">

                                            <span className="float-start"><a href="#"><i
                                                className="fas fa-question-circle"></i></a></span>

                                            <span className="float-end">
                                                <i className="far fa-heart" style={{ cursor: 'pointer' }}></i>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Electronics
