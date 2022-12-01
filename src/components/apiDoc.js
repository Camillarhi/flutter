import React from 'react'
import styled from 'styled-components'
import Button from './button';

const DocText = styled.h1`
font-size:80px;
`;

const SpanText = styled.span`
color:#eb7da7;
`;

const ApiDiv = styled.div`
background-color: #f8fafd;
`;

export default function ApiDoc() {
    return (
        <ApiDiv className='py-5'>
            <div className='container'>
                <DocText className='fw-bolder my-5 pt-5'>
                    Well documented and<br />
                    easy-to-use <SpanText> APIs</SpanText> for<br />
                    <SpanText> developers</SpanText>
                </DocText>

                <p className='fs-5 pb-3'>
                    We have done the core payments integrations and abstractions, <br />
                    so your team can easily integrate with our APIs and access<br />
                    multiple payment functionalities.
                </p>

                <ul className="pb-5">
                    <li className='mb-3'>
                        Quick transfers
                    </li>
                    <li className='mb-3'>
                        Initiate one-time and recurring payments
                    </li>
                    <li className='mb-3'>
                        Payment verification
                    </li>
                    <li className='mb-3'>
                        Instant virtual cards creation
                    </li>
                    <li className='mb-3'>
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
        </ApiDiv>
    )
}
