import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
        <section className='features' id='features'>
          <h1 className='section-title'>Features</h1>

          <div className='feature'>
            <div className="feature-text">
              <h2 className='feature-title'>Powerful and Clean Dashboard </h2>
              <p className='feature-subtitle'>Billin' Inc's dashboard is designed to give you a quick overview of your business's performance. You can see your total sales, expenses, and profit at a glance, and you can also see your top customers and top products.</p>
            </div>

            <div className="feature-image">
              <img src={'./assets/Dashboard.png'} alt="react logo" />
            </div>
          </div>

          <div className='feature'>
            <div className="feature-image">
              <img src={'./assets/Invoice-Create.png'} alt="react logo" />
            </div>
            <div className="feature-text">
              <h2 className='feature-title'>Create and Send Professional Invoices</h2>
              <p className='feature-subtitle'>
                Billin' Inc's invoice generator allows you to create professional invoices in just a few clicks.
              </p>
            </div>
          </div>

          <div className='feature'>
            <div className="feature-text">
              <h2 className='feature-title'>Powerful Inventory System</h2>
              <p className='feature-subtitle'>
                Billin' Inc's inventory management system allows you to track your purchases and inventory, and you can also check your inventory levels to see what you need to order.
              </p>
            </div>

            <div className="feature-image">
              <img src={'./assets/Stocks.png'} alt="react logo" />
            </div>

          </div>

          <div className='feature'>
            <div className="feature-image">
              <img src={'./assets/ledger.png'} alt="react logo" />
            </div>

            <div className="feature-text">
              <h2 className='feature-title'>Maintain Customer with Ledgers</h2>
              <p className='feature-subtitle'>
                Billin' Inc's ledger system allows you to maintain your customer information and track your customer's transactions.
                With Billin' Inc, you can also check your customer's balance and send them a payment request.
              </p>
            </div>
          </div>

          <div className='feature'>
            <div className="feature-text">
              <h2 className='feature-title'>Cloud and Offline Backup</h2>
              <p className='feature-subtitle'>
                Billin' Inc's cloud and offline backup system allows you to backup your data in the cloud and also in your local storage.
              </p>
            </div>

            <div className="feature-image">
              <img src={'./assets/settings-backup.png'} alt="react logo" />
            </div>
          </div>

          <div className='feature'>
            <div className="feature-image">
              <img src={'./assets/report-sales.png'} alt="react logo" />
            </div>

            <div className="feature-text">
              <h2 className='feature-title'>Graphs & Reports </h2>
              <p className='feature-subtitle'>
                Billin' Inc's graphs and reports system allows you to generate reports to track your invoicing activity and performance.
              </p>
            </div>
          </div>

          <div className='feature'>
            <div className="feature-text">
              <h2 className='feature-title'>Manage Users</h2>
              <p className='feature-subtitle'>
                Billin' Inc's user management system allows you to manage your users and their permissions.
              </p>
            </div>

            <div className="feature-image">
              <img src={'./assets/settings-user.png'} alt="react logo" />
            </div>
          </div>



        </section>
  )
}

export default Features