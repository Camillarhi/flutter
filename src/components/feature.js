import React from 'react'
import styled from 'styled-components'

const FeatureLink = styled.a`
color:#fb4e20
`;

export default function Feature({ title, description, link, icon }) {
    return (
        <>
            <h3 className='fw-bolder'>{title}</h3>
            {description}
            <FeatureLink href='/' className='text-decoration-none'>
                <span>{link}</span>
                <span> {icon}</span>
            </FeatureLink>
        </>
    )
}
