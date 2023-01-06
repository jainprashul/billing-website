import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Carousel from 'react-material-ui-carousel'
import Lottie from 'lottie-react'
import mainAnimation from './assets/main-page.json'
import dashboardAnimation from './assets/dashboard.json'
import authenticationAnimation from './assets/authenticate.json'
import inventoryAnimation from './assets/inventory.json'
import secureAnimation from './assets/secure.json'
import walletAnimation from './assets/wallet.json'
import Why from './components/Why'
import Features from './components/Features'

export const APP_NAME = 'Billin\' Inc'

export const APP_TRY = 'https://billingincv4.now.sh/'

function App() {


  return (
    <div className="App">
      <NavBar />

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



      <footer className='footer'>
        <div className="footer-text">
          <h6 className='footer-title'> &copy; {new Date().getFullYear()} Billin' Inc</h6>
          <p className='footer-subtitle'>All rights reserved</p>
        </div>

        <div className="footer-contact">
          <h6 className='footer-title'>Contact Us</h6>
          <a href="mailto:jainprashul@gmail.com" className='footer-subtitle'>jainprashul@gmail.com </a>
          <a href="https://wa.me/919406707245" target={'_blank'} className='footer-subtitle'>+91 9406707245</a>
          <a href="https://www.linkedin.com/in/jainprashul/" target={'_blank'} className='footer-subtitle'>LinkedIn</a>
        </div>

        <div className="footer-links">
          <a href={APP_TRY} target={'_blank'} className='try-btn try' style={{
            display: 'inline-block',
            padding: '10px 20px',
            marginLeft: '1.5rem'
          }}>Try for Free</a>
        </div>


      </footer>

    </div>
  )
}

export default App
