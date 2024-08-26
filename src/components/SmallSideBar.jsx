import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { Logo } from "../components";
import { useAppContext } from "../context/appContext";

import NavLinks from "./NavLinks";

function SmallSideBar() {
    const { toggleSideBar, showSideBar } = useAppContext();

    return (
        <Wrapper>
            <div
                className={`sidebar-container ${
                    showSideBar ? "show-sidebar" : ""
                }`}
            >
                <div className='content'>
                    <button
                        className='close-btn'
                        type='button'
                        onClick={toggleSideBar}
                    >
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggleSideBar={toggleSideBar} />
                </div>
            </div>
        </Wrapper>
    );
}
export default SmallSideBar;
