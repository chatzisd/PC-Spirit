import "./Header.css";
import ContactInfo from "./ContactInfo";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <ContactInfo />
            </div>
        </header>
    )
};
export default Header;