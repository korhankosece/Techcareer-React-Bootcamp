import About from "./About"
import Contact from "./Contact"
import Menu from "./Menu"

const PageContent = () => {

    const menuList = [
        {
            name: 'Alinin menüsü',
            description: 'Vejeteryan bir pizza...',
            price: 60
        },
        {
            name: 'Beyti',
            description: 'Kıyma ve hamurun dansı...',
            price: 65
        },
        {
            name: 'Ahtapot',
            description: 'Yerken dikkatli olun',
            price: 95
        },
    ]

    return (
        <>
            <div className="w3-content" style={{ maxWidth: '1100px' }}>
                <About />
                <Menu menuList={menuList} />
                <Contact />
            </div>
        </>
    )
}

export default PageContent