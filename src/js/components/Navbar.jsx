import React from "react";

export const Navbar = () => {




    return (


        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">

            <div className="container-fluid ps-5 pe-5 d-flex">

                <a className="navbar-brand me-auto" href="#">Start Boostrap</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="d-flex navbar-nav mb-2 mb-lg-0 ms-auto">

                        <li className="nav-item ">  <a className="nav-link text-light " href="#">Home</a> </li>
                        <li className="nav-item">   <a className="nav-link" href="#">About</a> </li>
                        <li className="nav-item">   <a className="nav-link" href="#">Services</a> </li>
                        <li className="nav-item">   <a className="nav-link" href="#">Contact</a> </li>

                    </ul>

                </div>
            </div>
        </nav>


    )
}

