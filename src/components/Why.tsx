import React from 'react'
import Lottie from 'lottie-react'
import dashboardAnimation from '../assets/dashboard.json'
import authenticationAnimation from '../assets/authenticate.json'
import inventoryAnimation from '../assets/inventory.json'
import secureAnimation from '../assets/secure.json'
import walletAnimation from '../assets/wallet.json'

type Props = {}

const Why = (props: Props) => {
  return (
    <section className='why' id='why'>
          <h1 className='section-title'>Why Billin' Inc</h1>

          <div className="why-items">
            <div className='why-item'>
              <div className="why-item-image">
                <Lottie animationData={dashboardAnimation} style={{
                  marginTop: '-50px',
                  marginLeft: '-70px'
                }} />
              </div>
              <div className="why-item-text">
                <h2 className='why-item-title'>Easy to Use</h2>
                <p className='why-item-subtitle'>
                  It is easy to use and you can start using it right away.
                </p>
              </div>
            </div>

            <div className='why-item'>
              <div className="why-item-image">
                <Lottie animationData={secureAnimation} style={{
                  marginTop: '-60px',
                  marginBottom: '-60px',
                }} />
              </div>
              <div className="why-item-text">
                <h2 className='why-item-title'>Secure and Offline Access</h2>
                <p className='why-item-subtitle'>
                  Data is stored in your browser and is not sent to any server. You can access your data even when you are offline.
                </p>
              </div>
            </div>

            <div className='why-item'>
              <div className="why-item-image">
                <Lottie animationData={authenticationAnimation} />
              </div>'
              <div className="why-item-text">
                <h2 className='why-item-title'>Authentication</h2>
                <p className='why-item-subtitle'>
                  Offline authentication is used to protect your data.
                </p>
              </div>
            </div>

            <div className='why-item'>
              <div className="why-item-image">
                <Lottie animationData={walletAnimation} />
              </div>

              <div className="why-item-text">
                <h2 className='why-item-title'>Cloud Backup and Restore</h2>
                <p className='why-item-subtitle'>
                  You can backup your data to the personal google drive and restore it from there.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Why