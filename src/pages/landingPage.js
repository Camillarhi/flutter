import React from 'react'
import ApiDoc from '../components/apiDoc'
import Banner from '../components/banner'
import Business from '../components/business'
import Commerce from '../components/commerce'
import Customers from '../components/customers'
import GetStarted from '../components/getStarted'
import GlobalReach from '../components/globalReach'
import Payments from '../components/payments'

export default function LandingPage() {
    return (
        <>
            <Banner />
            <Customers />
            <Business />
            <Payments />
            <Commerce />
            <ApiDoc />
            <GlobalReach />
            <GetStarted />
        </>
    )
}
