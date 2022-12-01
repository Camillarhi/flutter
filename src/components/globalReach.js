import React from 'react';
import styled from 'styled-components';
import earth from '../images/earth.webp'
import SectionWrapper from './SectionWrapper';

const GlobalText = styled.h1`
font-size:500%;
`;
export default function GlobalReach() {
    return (
        <SectionWrapper
            element={<>
                <GlobalText className='fw-bolder'>
                    Our <span className='text-primary'> global</span> reach
                </GlobalText>
                <div className='d-flex justify-content-between my-5 py-5'>
                    <div>
                        <ul>
                            <li className='mb-5'>
                                <div>
                                    <h5 className='text-success fw-bold'>30+ Currencies</h5>
                                    <p>We accept payments in more than thirty currencies.</p>
                                </div>
                            </li>

                            <li className='mb-5'>
                                <div>
                                    <h5 className='fw-bold'>20M+ API calls</h5>
                                    <p>API calls per day, peaking at 231 requests per second.</p>
                                </div>
                            </li>

                            <li className='mb-5'>
                                <div>
                                    <h5 className='fw-bold'>500k+ payments daily</h5>
                                    <p>Average number of payments processed daily.</p>
                                </div>
                            </li>

                            <li className='mb-5'>
                                <div>
                                    <h5 className='fw-bold'>15+ payment options</h5>
                                    <ul className="d-flex justify-content-between list-unstyled">
                                        <li>
                                            <li>Debit &amp; Credit cards</li>
                                            <li>Mobile money</li>
                                            <li>M-Pesa</li>
                                            <li>Bank Transfer</li>
                                        </li>
                                        <li>
                                            <li>Bank Account</li>
                                            <li>POS</li>
                                            <li>VISA QR</li>
                                            <li>USSD</li>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-50'>
                        <img src={earth} alt='world' className='' width="600px" />
                    </div>
                </div>
            </>}
        />
    )
}
