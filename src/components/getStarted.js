import React from 'react'
import { BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';
import SectionWrapper from './SectionWrapper';

const GetStartedText = styled.h1`
font-size:3rem;
`;
export default function GetStarted() {
    return (
        <SectionWrapper
            element={<>
                <div className='card card-body bg-black'>
                    <div className='container m-5 py-4 ps-5 mx-2'>
                        <GetStartedText className='text-light'>
                            Ready to get started?
                        </GetStartedText>
                        <p className='fs-5 text-light pb-5'>
                            Create an account and instantly start accepting payments, selling your<br />
                            beautiful products online and building financial tools.
                        </p>

                        <a href='/' className=' text-decoration-none'>
                            <span className='text-light'>Contact sales</span>
                            <span className='text-light'> <BsChevronRight /></span>
                        </a>
                    </div>
                </div>
            </>}
        />
    )
}
