import Wrapper from "../../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { BigSideBar, Navbar, SmallSideBar } from "../../components";
import { useAppContext } from "../../context/appContext";

const SharedLayout = () => {
    const { showSideBar } = useAppContext();

    return (
        <Wrapper>
            <main className={showSideBar ? "dashboard" : "dashboardd"}>
                {showSideBar && <BigSideBar />}
                {showSideBar && <SmallSideBar />}
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};
export default SharedLayout;
