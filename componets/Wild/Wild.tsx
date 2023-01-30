import Image from "next/image";
import LeftImage from '../../assets/Wild/leftback.png';
import RightImage from '../../assets/Wild/rigthback.png';
import Cards from "./Cards";


function Wild() {
    return (
        <div className="wild__container">
            <Image src={LeftImage} alt='flowers' className="wild__image-left" />
            <Image src={RightImage} alt='flowers' className="wild__image-right" />
            <div className="container__wild">
                <h2 className="wild__title">In the Wild</h2>
                <p className="wild__subtitle">In The Wild is a collection of pieces to help close the communication gap, while growing the love (and understanding) between you and your best pal.</p>
                <Cards />
                <div className="wild__button-block">
                    <button className="wild__button"><p>View more</p></button>
                </div>
            </div>
        </div>
    )
}

export default Wild;