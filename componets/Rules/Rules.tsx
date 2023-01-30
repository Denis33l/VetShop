import Image from "next/image";
import Dog from '../../assets/Rules/dog.png';

function Rules() {
    return(
        <div className="rules__container container">
            <div className="rules__title">
                <p>We couldn’t find a pharmacy experience worthy of our best buds— so we created one.</p>
                <Image src={Dog} alt='Dog'/>            
            </div>
            <div className="rules__content">
                <p className="rules__subtitle">Patients first, always</p>
                <p className="rules__description">We know how stressful it can be when your pet needs meds. That’s why we offer free next-day delivery and even do same-day in NYC and LA. We got you.</p>

                <p className="rules__subtitle">Tailored care</p>
                <p className="rules__description">We’ll work with you and your veterinarian to find the very best solution for your pet. With our custom compounded options, we can change the dosage, flavor and form. We even have a flavor guarantee with over 40 options! <p>P.S. Everyone seems to love the chicken-flavored chew treats!</p></p>

                <p className="rules__subtitle">Support, 7 days a week</p>
                <p className="rules__description">You’re not alone. Text, call, or email us 7 days a week—we’ll answer and do our best to sprinkle in a bit of sunshine. ☀️</p>
            </div>
        </div>
    )
}

export default Rules;
