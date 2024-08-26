import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import StatItem from './StatItem';
import Wrapper from '../assets/wrappers/StatsContainer';

const StatsContainer = () => {
    const { stats } = useAppContext();
    const defualtStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: '#e9b949',
            bcg: '#fcefc7',
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#647acb',
            bcg: '#e0e8f9',
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: '#d66a6a',
            bcg: '#ffeeee',
        },
    ];
    return (
        <Wrapper>
            {defualtStats.map((item, index) => (
                <StatItem key={index} {...item} />
            ))}
        </Wrapper>
    );
};
export default StatsContainer;
