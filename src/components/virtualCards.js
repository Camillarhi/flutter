import React from 'react'
import styled from 'styled-components'
import Button from './button';

const CardTitle = styled.h1`
font-size:80px;
`;
export default function VirtualCards() {
    return (
        <div className='bg-black py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <CardTitle className='text-light text-center py-5 mt-5'>
                    Create physical and <br />
                    virtual<span className='text-primary'> cards</span>
                </CardTitle>
                <p className='text-light text-center fs-5 pb-4'>Issue physical and virtual cards that work globally. Create,<br />
                    launch, and manage your cards easily from anywhere.
                </p>
                <Button
                text="Get started with cards"
                buttonClass="light px-4 py-3"
                />
                <div className='card card-body my-5'>
                <img className='img-fluid' src='https://cdn.filestackcontent.com/resize=width:900/output=format:webp/bkgNvkPuRLyYGNqXNFGP' alt='stack' />
                </div>
            </div>
        </div>
    )
}
