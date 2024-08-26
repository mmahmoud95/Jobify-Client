import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Alert, FormRow, Logo } from '../components';
import { useAppContext } from '../context/appContext.jsx';
import { useNavigate } from 'react-router-dom';
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
};

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    const {
        user,
        isLoading,
        displayAlert,
        showAlert,
        registerUser,
        loginUser,
    } = useAppContext();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (isMember) {
            if (!email || !password || !name) {
                displayAlert();
                return;
            }
        }
        const currentUser = { name, email, password };
        if (isMember) {
            registerUser(currentUser);
        } else {
            loginUser(currentUser);
        }
    };

    const handleSubmitTestUser = (e) => {
        const currentUser = {
            email: 'testuser@test.com',
            password: 'testuser123456',
        };
        loginUser(currentUser);
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }, [user, navigate]);
    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={handleSubmit}>
                <Logo />
                <h4>{!values.isMember ? 'Login' : 'Register'}</h4>
                {showAlert && <Alert />}
                {/* name input */}
                {values.isMember && (
                    <FormRow
                        labelText="name"
                        value={values.name}
                        name="name"
                        type="text"
                        handleChange={handleChange}
                    />
                )}
                {/* email input */}
                <FormRow
                    labelText="email"
                    value={values.email}
                    name="email"
                    type="email"
                    handleChange={handleChange}
                />
                {/* password input */}
                <FormRow
                    labelText="password"
                    value={values.password}
                    name="password"
                    type="password"
                    handleChange={handleChange}
                />
                <button
                    type="submit"
                    className="btn btn-block"
                    disabled={isLoading}
                >
                    Submit
                </button>{' '}
                <button
                    className="btn btn-block btn-hipster"
                    disabled={isLoading}
                    onClick={handleSubmitTestUser}
                >
                    {isLoading ? 'Loading...' : 'Login as test user'}
                </button>
                <p>
                    {values.isMember
                        ? 'Already a aember ?'
                        : 'Not a member yet ?'}
                    <button
                        type="button"
                        onClick={toggleMember}
                        className="member-btn"
                        style={{
                            background: 'none',
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {values.isMember ? ' Login' : ' Register'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
}
export default Register;
