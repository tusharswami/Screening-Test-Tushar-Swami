import Layout from '../components/Layout'
import Landing from '../components/Landing/Landing'
import '../components/Filter/Filters.scss';
const Index = () => {
    return (
        <Layout>
            <Landing/>
        </Layout>
    )
}
Index.getInitialProps = () => {
    return (
        <Layout>
            <Landing/>
        </Layout>
    )
}
export default Index;