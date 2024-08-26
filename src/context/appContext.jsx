import React, {
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react';
import reducer from './reducer';
import axios from 'axios';
import {
    Clear_Alert,
    Display_Alert,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_INPUT,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    EDIT_JOB_BEGIN,
    EDIT_JOB_ERROR,
    EDIT_JOB_SUCCESS,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    DELETE_JOB_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_ERROR,
} from './actions';

const initialState = {
    isLoading: false,
    userLoading: true,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    userLocation: '',
    showSideBar: false,
    /////////////////////
    isEditing: false,
    editJobId: '',
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'part-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    ////////////////////
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'all',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //first approach
    // axios.defaults.headers.common[" Authorization"] = state.token;
    //second approach
    //creat instance
    // const instanceAuth = axios.create({
    //     baseURL: "http://localhost:9999/api/auth",
    //     headers: { Authorization: state.token },
    // });
    //third approach
    const instanceAuth = axios.create({
        baseURL: '/api',
    });

   
    const displayAlert = () => {
        dispatch({ type: Display_Alert });
        setTimeout(() => {
            dispatch({ type: Clear_Alert });
        }, 1500);
    };
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: Clear_Alert });
        }, 1500);
    };

    // const addUserToLocalStorage = ({ user, token, location }) => {
    //     localStorage.setItem('user', JSON.stringify(user));
    //     localStorage.setItem('token', token);
    //     localStorage.setItem('location', location);
    // };

    // const removeUserFromLocalStorage = () => {
    //     localStorage.removeItem('user');
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('location');
    // };

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const response = await instanceAuth.post(
                '/auth/register',
                currentUser
            );
            const { user, location } = response.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user, location },
            });
            // addUserToLocalStorage({ user, token, location });
        } catch (error) {
            console.log(error);
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.message },
            });
        }
        clearAlert();
    };
    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN });
        try {
            const data = await instanceAuth.post('/auth/login', currentUser);
            const { user, location } = data.data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { user, location },
            });
            // addUserToLocalStorage({ user, location });
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.message },
            });
        }
        clearAlert();
    };
    const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN });
        try {
            const { data } = await instanceAuth.patch(
                '/auth/update',
                currentUser
            );
            console.log(data);
            const { user, location } = data;
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user, location },
            });
            // addUserToLocalStorage({ user, token, location });
        } catch (error) {
            // console.log(error);
            if (error.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: { msg: error.response.data.message },
                });
            }
        }
        clearAlert();
    };

    const getCurrentUser = async () => {
        dispatch({ type: GET_CURRENT_USER_BEGIN });
        try {
            const { data } = await instanceAuth.get('/auth/getCurrentUser');
            const { user, location } = data;
            dispatch({
                type: GET_CURRENT_USER_SUCCESS,
                payload: { user, location },
            });
        } catch (error) {
            if (error.response.status === 401) {
                dispatch({
                    type: GET_CURRENT_USER_ERROR,
                });
            }
            logOutUser();
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);
    const createJob = async () => {
        dispatch({ type: CREATE_JOB_BEGIN });
        try {
            const { company, jobType, position, status, jobLocation } = state;
            const { data } = await instanceAuth.post('/jobs', {
                company,
                position,
                jobLocation,
                status,
                jobType,
            });
            console.log(data);
            dispatch({
                type: CREATE_JOB_SUCCESS,
            });
            dispatch({ type: CLEAR_INPUT });
        } catch (error) {
            // console.log(error);
            if (error.response.status !== 401) {
                dispatch({
                    type: CREATE_JOB_ERROR,
                    payload: { msg: error.response.data.message },
                });
            }
        }
        clearAlert();
    };

    const getJobs = async () => {
        const { page, search, searchStatus, searchType, sort } = state;
        let url = `/jobs?page=${page}&status=${searchStatus}&sort=${sort}&jobType=${searchType}`;
        if (search) {
            url += `&search=${search}`;
        }

        dispatch({ type: GET_JOBS_BEGIN });

        try {
            const { data } = await instanceAuth(url);
            const { jobs, numberOfPages, totalJobs } = data;
            // console.log(data);
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: { jobs, numberOfPages, totalJobs },
            });
        } catch (error) {
            logOutUser();
        }
        // clearAlert();
    };
    const logOutUser = async () => {
        await instanceAuth.post('/auth/logout');
        dispatch({ type: LOGOUT_USER });
    };
    const toggleSideBar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    };
    const clearInputJob = () => {
        dispatch({ type: CLEAR_INPUT });
    };
    const setJobEdit = (id) => {
        console.log(id);
        dispatch({ type: SET_EDIT_JOB, payload: { id } });
    };
    const editJob = async () => {
        dispatch({ type: EDIT_JOB_BEGIN });
        try {
            const {
                position,
                company,
                jobLocation,
                jobType,
                status,
                editJobId,
            } = state;
            await instanceAuth.patch(`/jobs/${editJobId}`, {
                position,
                company,
                jobLocation,
                jobType,
                status,
            });

            dispatch({ type: EDIT_JOB_SUCCESS });
            dispatch({ type: CLEAR_INPUT });
            setTimeout(() => {
                dispatch({ type: Clear_Alert });
            }, 3000);
        } catch (e) {
            if (e.response.status === 401) return;
            dispatch({
                type: EDIT_JOB_ERROR,
                payload: { msg: e.response.data.message },
            });
        }
    };
    const deleteJob = async (jobId) => {
        console.log(`deleteJob:${jobId}`);
        dispatch({ type: DELETE_JOB_BEGIN });
        try {
            await instanceAuth.delete(`/jobs/${jobId}`);
            getJobs();
        } catch (e) {
            if (e.response.status === 401) return logOutUser();
            dispatch({
                type: DELETE_JOB_ERROR,
                payload: { msg: e.response.data.message },
            });
            setTimeout(() => {
                dispatch({ type: Clear_Alert });
            }, 3000);
        }
    };

    const showStats = async () => {
        dispatch({ type: SHOW_STATS_BEGIN });
        try {
            const { data } = await instanceAuth('/jobs/stats');
            dispatch({
                type: SHOW_STATS_SUCCESS,
                payload: {
                    stats: data.defaultStats,
                    monthlyApplications: data.monthlyApplications,
                },
            });
        } catch (error) {
            // console.log(error);
            logOutUser();
        }
        clearAlert();
    };
    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };
    const changePage = (page) => {
        dispatch({ type: CHANGE_PAGE, payload: { page } });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                displayAlert,
                registerUser,
                loginUser,
                updateUser,
                logOutUser,
                toggleSideBar,
                handleChange,
                clearInputJob,
                createJob,
                getJobs,
                setJobEdit,
                editJob,
                deleteJob,
                showStats,
                clearFilters,
                changePage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};
export { AppProvider, useAppContext, initialState };
