import React from 'react'
import styled from 'styled-components'
import Button from './button';

const CommerceText = styled.h1`
font-size:80px;
`;
export default function Commerce() {
    return (
        <div className='bg-secondary '>
            <div className='container pt-5'>
                <CommerceText className='pt-5 fw-bolder'>
                    Build a successful online business with our <br />
                    <span className='text-success'>Commerce tools.</span>
                </CommerceText>

                <div className='d-flex justify-content-between flex-column'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <h3 className='fw-bolder'>Store</h3>
                                <p className='fs-5'>Create a free ecommerce website and <br />
                                    start selling worldwide with just a few<br />
                                    clicks.
                                </p>
                                <Button
                                    text="Start selling"
                                    buttonClass="dark px-4 py-3"
                                />
                            </div>
                        </div>
                        <div className='w-50'>
                            <img className='img-fluid' src='https://cdn.filestackcontent.com/resize=width:900/output=format:webp/bkgNvkPuRLyYGNqXNFGP' alt='stack' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='w-50'>
                            <img className='img-fluid' src='https://cdn.filestackcontent.com/resize=width:700/output=format:webp/lc5K7jXVQiS9jBWmcdKg' alt='stack' />
                        </div>
                        <div className="d-flex justify-content-around flex-column py-5 w-50">
                            <div className='ms-5 ps-5'>
                                <h3 className='fw-bolder'>Invoices</h3>
                                <p className='fs-5'>Generate professional invoices for <br />
                                    your customers and get paid from <br />
                                    anywhere.
                                </p>
                                <a>
                                    <span className='text-warning'>Get started</span>
                                    <span>icon</span>
                                </a>
                            </div>

                            <div className='ms-5 ps-5'>
                                <h3 className='fw-bolder'>Payment links</h3>
                                <p className='fs-5'>Receive one-off or recurring payments <br />
                                    from anyone, anywhere, via your<br />
                                    unique payment link.
                                </p>
                                <a>
                                    <span className='text-warning'>Learn more</span>
                                    <span>icon</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
