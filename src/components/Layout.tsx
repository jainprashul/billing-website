
import NavBar from './NavBar'
import '../App.css' 
export const APP_NAME = 'Billin\' Inc'
export const APP_TRY = 'https://billingincv4.now.sh/'

type Props = {
    children: React.ReactNode
}
function Layout(props: Props) {


    return (
        <div className="App">
            <NavBar />
            <main>
                {props.children}
            </main>
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
                        marginTop: '1rem'
                    }}>Try for Free</a>
                </div>


            </footer>

        </div>
    )
}

export default Layout

export const withLayout = (Component: React.ComponentType) => {
    return (props: any) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
