import Image from 'next/image';
import CardImage from '../../assets/Shop/card.png';
import dataShopElement from './dataShopElement';

function Element() {
    return (
        <div className="shop__container">
            {dataShopElement.map(({ id, name, price }) => (
                <div className="shop__card" key={id.toString()}>
                    <Image src={CardImage} alt='Card' />
                    <p className="shop__name">{name}</p>
                    <div className="shop__price">
                        <p className="shop__price-number">{price}</p>
                    </div>
                </div>
            ))
            }
        </div>

    )
}

export default Element;