import React from 'react'
import styled from 'styled-components'
import Button from './button';

const BannerText = styled.h1`
font-size:100px;
`;

export default function Banner() {
    return (
        <div className='container'>
            <div className='pt-5'>
                <BannerText className='text-warning'>Endless</BannerText>
                <BannerText className='text-warning'>possibilities<span className='text-dark'> for</span></BannerText>
                <BannerText>every business</BannerText>
            </div>
            <div className='mt-4'>
                <p>Sell online, process payments, build financial products, or use</p>
                <p> business tools designed to grow your business.</p>
            </div>
            <div className='mt-5 mb-4'>
                <Button
                    text="Contact sales"
                    buttonClass="dark px-4 py-3" />
            </div>
        </div>
    )
}
