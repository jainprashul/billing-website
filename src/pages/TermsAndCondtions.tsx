import React from 'react'
import { withLayout } from '../components/Layout'

type Props = {}

const TermsAndCondtions = (props: Props) => {
  return (
    <div className="container readonly">
      <h1>Terms and Conditions</h1>
      <p>Last updated: January 01, 2023</p>

      <p>Please read these terms and conditions carefully before using Our Service.</p>

      <p>By using our invoicing and inventory management software, you agree to the following terms and conditions:
        <ol>
          <li> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. </li>
          <br />

          <li>
            You agree to use our software only for lawful purposes and in a manner that does not infringe the rights of or restrict or inhibit the use and enjoyment of our software by any third party. This includes conduct that is unlawful or which may harass or cause distress or inconvenience to any person and the transmission of obscene or offensive content or disruption of normal flow of dialogue within our software.
          </li>
            <br />

          <li>
            Our software is provided "as is" and we make no representations or warranties of any kind, express or implied, as to the operation of our software or the information, content, materials or products included on our software.
          </li>
          <br />


          <li>
            To the full extent permissible by applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We will not be liable for any damages of any kind arising from the use of our software, including but not limited to direct, indirect, incidental punitive and consequential damages.</li>
            <br />


          <li>
            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India. </li>
            <br />


          <li>
            We reserve the right to modify these terms and conditions at any time. If we do this, we will post the changes on this page and will indicate at the top of this page the date these terms and conditions were last revised. If we make material changes to these terms and conditions, we will notify you here, by email, or by means of a notice on our home page. By continuing to access or use our software after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the software.
          </li>
          <br />


        </ol>
      </p>
    </div>



  )
}

export default withLayout(TermsAndCondtions)