import React from 'react'
import styled from 'styled-components';

const GetStartedText = styled.h1`
font-size:70px;
`;
export default function GetStarted() {
    return (
        <div className='container my-5 py-5'>
            <div className='card card-body bg-black'>
                <div className='container m-5 py-4 ps-5'>
                    <GetStartedText className='text-light ps-5'>
                        Ready to get started?
                    </GetStartedText>
                    <p className='fs-5 text-light pb-5 ps-5'>
                        Create an account and instantly start accepting payments, selling your<br />
                        beautiful products online and building financial tools.
                    </p>

                    <a href='/' className='ps-5'>
                        <span className='text-light'>Contact sales</span>
                        <span>icon</span>
                    </a>
                </div>


            </div>

        </div>
    )
}
