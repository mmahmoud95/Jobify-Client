import { useAppContext } from '../context/appContext';
// import Wrapper from '../assets/wrappers/Sea'
import { FormRow, ForRowSelect } from '.';
import { useMemo, useState } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
function SearchContainer() {
    const [localSearch, setLocalSearch] = useState('');

    const {
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        jobTypeOptions,
        statusOptions,
        clearFilters,
        handleChange,
    } = useAppContext();
    const handleSearch = (e) => {
        if (isLoading) return;
        handleChange({ name: e.target.name, value: e.target.value });
        console.log(e.target.name);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalSearch("");
        clearFilters();
    };

    const debounce = () => {
        let timeout;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                handleChange({ name: e.target.name, value: e.target.value });
            }, 1000);
        };
    };

    const optimizedDebounce = useMemo(() => debounce(), []);
    return (
        <Wrapper>
            <form className="form">
                <h3 className="form-title">Search Form</h3>
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="search"
                        value={localSearch}
                        handleChange={optimizedDebounce}
                    />
                    <ForRowSelect
                        labelText="job status"
                        list={['all', ...statusOptions]}
                        value={searchStatus}
                        hanldeJobInput={handleSearch}
                        name="searchStatus"
                    />{' '}
                    <ForRowSelect
                        labelText="type"
                        list={['all', ...jobTypeOptions]}
                        value={searchType}
                        hanldeJobInput={handleSearch}
                        name="searchType"
                    />
                    <ForRowSelect
                        labelText="type"
                        list={sortOptions}
                        value={sort}
                        hanldeJobInput={handleSearch}
                        name="sort"
                    />
                    <button
                        className="btn btn-block danger-btn form-btn"
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
}
export default SearchContainer;
