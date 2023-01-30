import Image from 'next/image';
import dataCards from './dataCards';

function Cards() {
    return (
        <div className="card">
            {dataCards.map(({ id, photo, data, title, subtitle }) => (
                <div className="card__inner" key={id.toString()}>
                    <Image src={photo} className="card__image" alt='dogs' />
                    <div className="card__content">
                        <p className="card__data">{data}</p>
                        <h2 className="card__title">{title}</h2>
                        <p className="card__subtitle">{subtitle}</p>
                        <button className="card__button">
                            <p>Read the article</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;