import './Footer.scss';
export default function Footer() {
    // get current year
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footerWrapper">
            <div className="footer">
                <p>© {year} AllsCherry - Powered by Webtailor.</p>
            </div>
        </div>
    )
}
