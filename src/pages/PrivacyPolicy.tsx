import React from 'react'
import { withLayout } from '../components/Layout'

type Props = {}

const PrivacyPolicy = (props: Props) => {
    return (
        <div className='container readonly'>
            <h1>Privacy Policy</h1>

            <p>Effective date: January 01, 2023</p>

            <p>Billin' Inc ("us", "we", or "our") operates the Billin' Inc website (the "Service").</p>

            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Billin' Inc.</p>

            <p>
                Our company takes the privacy of our customers and their data very seriously. We understand that this information is sensitive and we will take all necessary steps to protect it.
            </p>

            <p>By using our invoicing and inventory management software, you consent to our collection, storage, use, and transfer of your personal data in accordance with our Privacy Policy and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (the "IT Rules"). If you do not consent to the collection, storage, use, and transfer of your personal data, please do not use our software.
            </p>

            <p> We provide a invoicing and inventory management software that allows customers to store their own personal information, including name, address, contact information, and billing information, on their own system, in order to process invoices and manage inventory. This information is under the control of the customer, and will not be accessed by our company unless provided by the customer.
            </p>

            <p> We use appropriate security measures to protect the software, however, it is the customer's responsibility to protect the personal information stored on their own system.</p>

            <p>
                We retain customer information only as long as it is necessary to fulfill the purpose for which it was collected. Once it is no longer needed, the information will be securely destroyed by the customer.
            </p>

            <p>
                Customers have the right to request access to, correction of, or deletion of their personal information at any time. If you have any questions about our privacy policy or wish to exercise your rights, please contact us.
            </p>

            <p>
            We will update this policy from time to time and in case of any changes will notify you. By using our services, you consent to the collection and use of your personal information in accordance with this privacy policy."
            </p>

        </div>
    )
}

export default withLayout(PrivacyPolicy)