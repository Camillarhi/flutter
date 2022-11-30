import React from 'react'
import styled from 'styled-components'
import Button from './button';

const DocText = styled.h1`
font-size:80px;
`;
export default function ApiDoc() {
    return (
        <div className='py-5 bg-secondary'>
            <div className='container'>
                <DocText className='fw-bolder my-5 pt-5'>
                    Well documented and<br />
                    easy-to-use <span className='text-danger'> APIs</span> for<br />
                    <span className='text-danger'> developers</span>
                </DocText>

                <p className='fs-5 pb-3'>
                    We have done the core payments integrations and abstractions, <br />
                    so your team can easily integrate with our APIs and access<br />
                    multiple payment functionalities.
                </p>

                <ul className="pb-5">
                    <li>
                        Quick transfers
                    </li>
                    <li>
                        Initiate one-time and recurring payments
                    </li>
                    <li>
                        Payment verification
                    </li>
                    <li>
                        Instant virtual cards creation
                    </li>
                    <li>
                        Customer verification
                    </li>
                </ul>

                <div className='pb-5 mb-5'>
                    <Button
                        text="Read the API docs"
                        buttonClass="dark px-4 py-3"
                    />
                </div>
            </div>
        </div>
    )
}
