import React from 'react'
import { BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components'
import Button from './button';
import Feature from './feature';

const CommerceText = styled.h1`
font-size:4rem;
`;

const StrengthText = styled.p`
font-size:4rem;
`;

const CommerceDiv = styled.div`
background-color: #f8fafd;
`;

export default function Commerce() {
    return (
        <CommerceDiv className='pb-5'>
            <div className='container py-5'>
                <CommerceText className='pt-5 fw-bolder'>
                    Build a successful online business with our <br />
                    <span className='text-success'>Commerce tools.</span>
                </CommerceText>

                <div className='d-md-flex justify-content-between flex-column py-5 my-5'>
                    <div className='d-md-flex justify-content-between mb-5'>
                        <div>
                            <div className='d-flex align-items-center mb-5'>
                                <div className='ps-5 mt-5'>
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
                        </div>
                        <div className=''>
                            <img className='img-fluid w-75' src='https://cdn.filestackcontent.com/resize=width:900/output=format:webp/bkgNvkPuRLyYGNqXNFGP' alt='stack' />
                        </div>
                    </div>
                    <div className='d-md-flex justify-content-between'>
                        <div className=''>
                            <img className='img-fluid' src='https://cdn.filestackcontent.com/resize=width:700/output=format:webp/lc5K7jXVQiS9jBWmcdKg' alt='stack' />
                            <p className='mt-4'>A platform for you, whether you’re a big business or a
                                <span className='text-success'> solo artist.</span></p>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0 d-flex justify-content-around flex-column py-5">
                            <div className='ms-5 ps-3 pb-3'>
                                <Feature
                                    title="Invoices"
                                    description={<p className='fs-5'>Generate professional invoices for <br />
                                        your customers and get paid from <br />
                                        anywhere.
                                    </p>}
                                    icon={<BsChevronRight />}
                                    link="Get started"
                                />
                            </div>

                            <div className='ms-5 ps-3 pb-5'>
                                <Feature
                                    title="Payment links"
                                    description={<p className='fs-5'>Receive one-off or recurring payments <br />
                                        from anyone, anywhere, via your<br />
                                        unique payment link.
                                    </p>}
                                    icon={<BsChevronRight />}
                                    link="Learn more"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5'>
                    <StrengthText className='pb-4'>
                        Let’s play to our strengths,<br />
                        shall we? You focus on bringing<br />
                        your amazing ideas to life and<br />
                        we focus on providing all the<br />
                        <span className='text-success'> commerce tools</span> you need.
                    </StrengthText>
                    <Button
                        text="Okay, let’s go"
                        buttonClass="dark px-4 py-3"
                    />
                </div>
            </div>
        </CommerceDiv>
    )
}
