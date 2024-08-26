import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import {
    Alert,
    Job,
    JobsContainer,
    Loading,
    SearchContainer,
} from '../../components';
import Wrapper from '../../assets/wrappers/JobsContainer';
import PageBtnContainer from '../../components/PageBtnContainer';

const AllJobs = () => {
    const {
        getJobs,
        jobs,
        totalJobs,
        numOfPages,
        isLoading,
        deleteJob,
        search,
        searchStatus,
        searchType,
        sort,
        page,
        showAlert,
    } = useAppContext();
    useEffect(() => {
        getJobs();
    }, [page, search, searchStatus, searchType, sort]);

    if (jobs.length == 0) {
        return (
            <Wrapper>
                <SearchContainer />
                <h2>No jobs to display</h2>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <SearchContainer />
            {showAlert && <Alert />}
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h5>
                        {totalJobs} job{jobs.length > 1 && 's'} found
                    </h5>
                    <div className="jobs">
                        {jobs.map((job) => (
                            <Job key={job._id} {...job} />
                        ))}
                    </div>
                    {numOfPages > 1 && <PageBtnContainer />}
                </>
            )}
        </Wrapper>
    );
};
export default AllJobs;
