// eslint-disable-next-line no-unused-vars
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { Logo } from '../components';
import { useState } from 'react';
import { useAppContext } from '../context/appContext';
useAppContext;
function Navbar() {
    const [showLogOut, setShowLogOut] = useState(false);
    const { toggleSideBar, user, logOutUser } = useAppContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={() => toggleSideBar()}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                        onClick={() => setShowLogOut(!showLogOut)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div
                        onClick={() => logOutUser()}
                        className={`dropdown show-dropdown ${
                            showLogOut ? 'open' : 'close'
                        }`}
                    >
                        <button
                            className="dropdown-btn"
                            type="button"
                            onClick={() => logOutUser()}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default Navbar;
