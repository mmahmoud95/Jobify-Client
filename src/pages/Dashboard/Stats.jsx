import { useEffect } from 'react';
import { ChartsContainer, Loading, StatsContainer } from '../../components';
import { useAppContext } from '../../context/appContext';
import { Link } from 'react-router-dom';

function Stats() {
    const { showStats, isLoading, monthlyApplications } = useAppContext();
    useEffect(() => {
        showStats();
    }, []);
    if (isLoading) {
        return <Loading center="center" />;
    }
    return (
        <>
            {monthlyApplications.length == 0 && (   
                <h1>
                    You didn't add Job yet
                    <Link to="/add-job" style={{ color: '#2cb1bc' }}>
                        {' '}
                        Add Job
                    </Link>
                </h1>
            )}

            {monthlyApplications.length !== 0 && (
                <>
                    <StatsContainer />
                    <ChartsContainer />
                </>
            )}
        </>
    );
}
export default Stats;
