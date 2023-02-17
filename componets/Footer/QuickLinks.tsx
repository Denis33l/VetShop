import Link from "next/link";

function QuickLinks() {
    return (
        <div className="quicklinks__container">
            <h2 className="footer__title">Quick Links</h2>
            <Link href='/' className="footer__text">Veterinarians</Link>
            <Link href='/' className="footer__text">Products</Link>
            <Link href='/' className="footer__text">How it Works</Link>
            <Link href='/' className="footer__text">About us</Link>
        </div>
    )
}

export default QuickLinks;