import { useState } from 'react';
import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
function Landing() {
    const [show, setShow] = useState(false);
    const { user } = useAppContext();

    const showw = () => {
        setShow(!show);
    };
    return (
        <>
            {user && <Navigate to="/" />}
            <Wrapper>
                <nav>
                    <Logo />
                </nav>
                <div className="container page">
                    <div className="info">
                        <h1>
                            job <span>traking </span>app
                        </h1>
                        <p>
                            Offal Brooklyn poutine pickled, neutra pabst
                            knausgaard keytar YOLO cupping succulents cray etsy.
                            Chambray cred organic flexitarian kogi thundercats
                            gorpcore fit gatekeep bicycle rights literally
                            dreamcatcher bruh +1
                        </p>
                        <Link to={'/register'} className="btn btn-hero">
                            Login/Register
                        </Link>
                    </div>
                    <img src={main} className="img main-img" alt="job hunt" />
                </div>
            </Wrapper>
        </>
    );
}
export default Landing;
