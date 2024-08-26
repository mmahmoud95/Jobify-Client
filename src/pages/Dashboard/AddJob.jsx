import { Alert, ForRowSelect, FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';

const AddJob = () => {
    const {
        showAlert,
        displayAlert,
        isEditing,
        // editJobId,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        statusOptions,
        status,
        handleChange,
        clearInputJob,
        createJob,
        editJob,
        isLoading,
        getJobs,
    } = useAppContext();
    const handleJobInput = (event) => {
        handleChange({ name: event.target.name, value: event.target.value });
    };

    const handleJobSubmit = (event) => {
        event.preventDefault();
        if (!company || !position || !jobLocation) {
            displayAlert();
            return;
        }
        if (isEditing) {
            editJob();
            return;
        }
        createJob();
        getJobs();
    };
    return (
        <Wrapper>
            <form className="form" onSubmit={handleJobSubmit}>
                <h3 className="form-title">
                    {isEditing ? 'Edit Job' : 'Add a job'}
                </h3>
                {showAlert && <Alert />}
                <div className="form-center">
                    <FormRow
                        name="company"
                        value={company}
                        type="text"
                        handleChange={handleJobInput}
                    />
                    <FormRow
                        name="position"
                        value={position}
                        type="text"
                        handleChange={handleJobInput}
                    />
                    <FormRow
                        name="jobLocation"
                        labelText="Job Location"
                        value={jobLocation}
                        type="text"
                        handleChange={handleJobInput}
                    />
                    <ForRowSelect
                        hanldeJobInput={handleJobInput}
                        list={jobTypeOptions}
                        value={jobType}
                        name="jobType"
                        labelText="Job Type"
                    />
                    <ForRowSelect
                        hanldeJobInput={handleJobInput}
                        list={statusOptions}
                        value={status}
                        name="status"
                    />
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '16px',
                            gap: '12px',
                        }}
                    >
                        <button
                            style={{ padding: '9px', width: '48%' }}
                            type="submit"
                            className="btn btn-block submit-btn form-btn"
                            disabled={isLoading}
                        >
                            Submit
                        </button>
                        <button
                            style={{ padding: '9px', width: '48%' }}
                            className="btn btn-block clear-btn form-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                clearInputJob();
                            }}
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};
export default AddJob;
