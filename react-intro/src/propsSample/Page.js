import TechButton from './TechButton'

const Page = () => {
    const title = 'buton başlığı';

    const divStyle = {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }

    return (
        <TechButton buton={title} style={divStyle} />
    )
}

export default Page