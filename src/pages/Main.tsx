
import Lottie from 'lottie-react'
import mainAnimation from '../assets/main-page.json'
import Why from '../components/Why'
import Features from '../components/Features'
import React from 'react'
import { APP_TRY, withLayout } from '../components/Layout'

type Props = {}

const Main = (props: Props) => {
  return (
    <>
        <div className="container">
        {/* hero section */}
        <section className='hero'>
          <div className="hero-text">
            <h1 className='section-title'>Billin' Inc</h1>
            <p className='section-subtitle'>Billin' Inc is a powerful and easy-to-use invoicing app that helps businesses of all sizes create and manage invoices, track expenses, inventory, and more. With Billin' Inc, you can : </p>

            <ul>
              <li>Create and send professional invoices in just a few clicks</li>
              <li>Manage Purchases , Maintain Inventory</li>
              <li>Generate reports to track your invoicing activity and performance</li>
              <li>Manage your customer information and communication all in one place</li>
            </ul>
            <a href={APP_TRY} target={'_blank'} className='try-btn primary' style={{
              display: 'inline-block',
              padding: '10px 20px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              marginLeft: '1.5rem'
            }}>Try for Free</a>
          </div>

          <div className="hero-image-container">
            <Lottie animationData={mainAnimation} />
          </div>
        </section>

        {/* Why section */}
        <Why />

        {/* Features section */}
        <Features />
      </div>
    </>
  )
}

export default withLayout(Main)