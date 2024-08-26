import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Alert, FormRow } from '../../components';

const Profile = () => {
    const { updateUser, token, showAlert, displayAlert, isLoading, user } =
        useAppContext();
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [lastName, setLastName] = useState(user?.lastName);
    const [location, setLocation] = useState(user?.location);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !location || !lastName) {
            displayAlert();
            return;
        }
        updateUser({ name, email, location, lastName });
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="form">
                <h3 className='form-title'>profile</h3>
                {showAlert && <Alert />}
                <div className="form-center">
                    <FormRow
                        name={'name'}
                        type="text"
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                    />
                    <FormRow
                        name={'email'}
                        type="email"
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                    />
                    <FormRow
                        name={'lastName'}
                        labelText={'last Name'}
                        type="text"
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                    />
                    <FormRow
                        name={'location'}
                        type="text"
                        value={location}
                        handleChange={(e) => setLocation(e.target.value)}
                    />
                    <button
                        style={{ marginTop: '32px', padding: '10px 0' }}
                        type="submit"
                        className="btn btn-block"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Please wait...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
export default Profile;
