import React from 'react';
import styled from 'styled-components';

const GlobalText = styled.h1`
font-size:80px;
`;
export default function GlobalReach() {
    return (
        <div className='container my-5 py-5'>
            <div className='d-flex justify-content-between'>
                <div>
                    <GlobalText className='fw-bolder'>
                        Our <span className='text-primary'> global</span> reach
                    </GlobalText>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
