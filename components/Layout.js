import Header from './Header';
import Footer from './Footer';
import Landing from './Landing/Landing';


const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <section className='container'>  
                <Landing /> 
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;