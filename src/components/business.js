import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Business() {
    return (
        <SectionWrapper
            description={
                <>
                    <h5 className='fw-bolder pb-5'>We are trusted by 1 Million+ businesses</h5>
                    <div className='d-flex justify-content-between'>
                        <img src='https://flutterwave.com/images/company/uber.svg' alt='uber' />
                        <img src='https://flutterwave.com/images/company/mtn.svg' alt='mtn' />
                        <img src='https://flutterwave.com/images/company/chipper.svg' alt='chipper' />
                        <img src='https://flutterwave.com/images/company/piggyvest.svg' alt='piggyvest' />
                        <img src='https://flutterwave.com/images/company/wise.svg' alt='wise' />
                        <img src='https://flutterwave.com/images/company/microsoft.svg' alt='microsoft' />
                    </div>
                </>
            }
        />

    )
}
