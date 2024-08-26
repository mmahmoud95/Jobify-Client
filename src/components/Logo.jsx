import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Logo() {
    const navigate = useNavigate();
    return (
        <img
            src={logo}
            alt='Jobify'
            className='logo'
            style={{ cursor: "pointer" }}
            onClick={() => {
                navigate("/");
            }}
        />
    );
}
export default Logo;
