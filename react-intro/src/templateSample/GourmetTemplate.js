import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
import PageContent from "./PageContent"

const GourmetTemplate = () => {
    const iconText = 'Alinin Mutfağı'
    return (
        <>
            <Navbar iconText={iconText} />
            <Header />
            <PageContent />
            <Footer />
        </>
    )
}

export default GourmetTemplate