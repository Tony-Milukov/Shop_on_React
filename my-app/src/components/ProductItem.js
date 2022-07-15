import {Link} from "react-router-dom"

const ProductItem = (props) => {

    let keys = []
    const randomKey = () => {

        let key = Math.floor(Math.random() * (90000000 - 10) + 10)

        if (keys.length == 0 || keys.map(element => key !== element)) {
            keys = [...keys, key]
            return key

        } else {
            randomKey()
        }
    }
    return (
        <div className="card" key={randomKey()}>
            <Link to={props.link}> <img height="420" className="img" src={props.image} alt="photo"/></Link>
            <Link to={props.link}><h1 className="h1-card capitalize">{props.name}</h1></Link>
            <Link to={props.link}>
                <p className="p-card">Known for her sculptural takes on traditional  tailoring, Australian arbiter
                    of cool Kym Ellery teams  up with Moda Operandi.</p></Link>
            <p className="prices">{props.price}$</p>



        </div>
    )
}
export default ProductItem