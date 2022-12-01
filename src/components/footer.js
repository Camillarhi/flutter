import React from 'react'

export default function Footer() {
    return (
        <div className='container mt-5 pt-5'>
            <div className='d-md-flex justify-content-around'>
                <div className='my-5'>
                    <h5 className='my-3'>Products</h5>
                    <p>Collect Payments</p>
                    <p>Send Money</p>
                    <p>Store</p>
                    <p>Payment Links</p>
                    <p>Invoices</p>
                    <p>Capital</p>
                    <p>Grow</p>
                    <p>Card Issuing</p>
                    <p>FaaS</p>
                </div>
                <div className='my-5'>
                    <h5 className='my-3'>Resources</h5>
                    <p>Pricing</p>
                    <p>Support</p>
                    <p>Blog</p>
                    <p>Integrations</p>
                    <p>Why you got charged</p>
                </div>
                <div className='my-5'>
                    <h5 className='my-3'>Developers</h5>
                    <p>API Documentation</p>
                    <p>API Reference</p>
                    <p>API Status <span class="ms-1 p-1 bg-success rounded-circle d-inline-block">
                    </span></p>
                </div>
                <div className='my-5'>
                    <h5 className='my-3'>Flutterwave</h5>
                    <p>Customers</p>
                    <p>Careers</p>
                    <p>Press kit</p>
                    <p>Covid 19</p>
                    <p>Barter</p>
                    <p>Disha</p>
                    <p>Send</p>
                </div>
                <div className='my-5'>
                    <h5 className='my-3'>Contact</h5>
                    <p>hi@flutterwavego.com</p>
                    <p>Twitter Support</p>
                </div>
            </div>
            <hr />

            <div className='d-flex m-4 justify-content-between'>
                <div className='d-flex justify-content-between me-2'>
                    <img alt='flag' src='https://flutterwave.com/images/flags/us.svg' className='mb-3 me-2' />
                    <p>United States <span>down</span></p>
                </div>

                <div>
                    <ul className='d-flex list-unstyled justify-content-between'>
                        <li className='pe-2'>
                            Twitter
                        </li>
                        <li className='px-2'>
                            Facebook
                        </li>
                        <li className='px-2'>
                            Instagram
                        </li>
                        <li className='px-2'>
                            YouTube
                        </li>
                        <li className='ps-2'>
                            LinkedIn
                        </li>
                    </ul>
                </div>
            </div>
            <hr />

            <div className='d-flex m-4 justify-content-between'>
                <div className='d-flex justify-content-between me-2'>
                    <p>© Flutterwave</p>
                </div>

                <div>
                    <ul className='d-flex list-unstyled justify-content-between'>
                        <li className='pe-2'>
                            Privacy policy
                        </li>
                        <li className='px-2'>
                            Terms of use
                        </li>
                        <li className='px-2'>
                            Cookie policy
                        </li>
                        <li className='px-2'>
                            Merchant service agreement
                        </li>
                        <li className='ps-2'>
                            Payment protection promise
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
