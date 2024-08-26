import { NavLink } from "react-router-dom";
import { FaChartBar, FaWpforms } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";

function NavLinks({ toggleSideBar }) {
    const links = [
        {
            id: 1,
            path: "/",
            text: "stats",
            icon: <FaChartBar />,
        },
        {
            id: 2,
            path: "all-jobs",
            text: "All Jobs",
            icon: <MdQueryStats />,
        },
        {
            id: 3,
            path: "add-job",
            text: "Add Job",
            icon: <FaWpforms />,
        },
        {
            id: 4,
            path: "profile",
            text: "profile",
            icon: <ImProfile />,
        },
    ];
    return (
        <div className='nav-links'>
            {links.map((link, index) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    to={link.path}
                    key={link.id}
                    onClick={toggleSideBar}
                >
                    <span className='icon'>{link?.icon}</span>
                    {link.text}
                </NavLink>
            ))}
        </div>
    );
}
export default NavLinks;
