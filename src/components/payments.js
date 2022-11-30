import React from 'react'
import styled from 'styled-components'
import Button from './button';

const PaymentText = styled.h1`
font-size:80px;
`;
export default function Payments() {
    return (
        <div className='container my-5 py-5'>
            <div className='py-5 my-5'>
                <PaymentText className='fw-bolder'>A fully unified <br />
                    set of<span className='text-warning'> payments</span>
                </PaymentText>
                <PaymentText className='fw-bolder text-warning'>tools</PaymentText>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div>
                        <h3 className='fw-bolder'>Checkout</h3>
                        <p className='fs-5'>Checkout features our smart <br />
                            payment ordering system, incredible <br />
                            speed, and beautiful simplicity. It's <br />
                            designed to grow your revenue and <br />
                            provide the best payment<br />
                            experience to your customers.
                        </p>
                        <Button
                            text="Get started"
                            buttonClass="dark px-4 py-3"
                        />
                    </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img src="https://flutterwave.com/images/sections/checkout.png" className="w-100 mb-4" alt="Famasi" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0 d-flex justify-content-around flex-column py-5">
                    <div className='ms-4'>
                        <h3 className='fw-bolder'>Accept payments</h3>
                        <p className='fs-5'>Easily receive money from anyone, <br />
                            anywhere in the world.
                        </p>
                        <a href='/'>
                            <span className='text-warning'>Learn more</span>
                            <span>icon</span>
                        </a>
                    </div>

                    <div className='ms-4'>
                        <h3 className='fw-bolder'>Transfers (Payout)</h3>
                        <p className='fs-5'>Make single or bulk transfers to <br />
                            bank accounts from your <br />
                            Flutterwave dashboard.
                        </p>
                        <a href='/'>
                            <span className='text-warning'>Learn more</span>
                            <span>icon</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
