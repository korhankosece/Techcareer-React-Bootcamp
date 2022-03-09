import About from "./About"
import Contact from "./Contact"
import Menu from "./Menu"

const PageContent = () => {
    return (
        <>
            <div className="w3-content" style={{ maxWidth: '1100px' }}>
                <About />
                <Menu />
                <Contact />
            </div>
        </>
    )
}

export default PageContent