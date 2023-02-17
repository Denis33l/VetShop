import Header from "../componets/Header/Header";
import Footer from "../componets/Footer/Footer";
import ShopCard from '../componets/Shop/ShopCards';
import ShopElement from '../componets/Shop/ShopElement';

function shop() {
    return (
        <div>
            <Header />
            <div className="container">
                <ShopCard />
                <ShopElement />
                <button className="shop__button"><p className="shop__button-name">More</p></button>
            </div>
            <Footer />
        </div>
    )
}

export default shop;