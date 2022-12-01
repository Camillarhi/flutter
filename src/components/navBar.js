import React from 'react';
import logo from '../images/logo.png';
import Button from './button';

export default function NavBar() {

    const openNav = () => {
        var navCollapse = document.querySelector("#navbarToggler");
        if (
            navCollapse.classList.contains("show")
        ) {
            navCollapse.classList.remove("show");
        } else {
            navCollapse.classList.add("show");
        }
    };

    return (
        <>
            {/* start nav */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between align-items-between pt-4">
                    {/* <a className="" href="#">Navbar</a> */}
                    <img src={logo} className="navbar-brand image-fluid me-3 navbar-brand" width="170px" alt='logo' />
                    <button className="navbar-toggler" type="button" onClick={() => openNav()}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse show" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >Payments</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >Commerce</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >Issuing</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >Capital</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >Grow</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active mx-2" aria-current="page" >FaaS</a>
                            </li>
                        </ul>
                        <div className="d-md-none">
                            <Button
                                text="Sign in"
                                buttonClass="secondary px-5 py-2" />
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <Button
                            text="Sign in"
                            buttonClass="secondary px-5 py-2" />
                    </div>
                </div>
            </nav>
            {/* end nav */}
        </>
    )
}
