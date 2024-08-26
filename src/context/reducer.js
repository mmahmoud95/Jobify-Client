import {
    Clear_Alert,
    Display_Alert,
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
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
    GET_JOBS_SUCCESS,
    GET_JOBS_BEGIN,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR,
    SHOW_STATS_SUCCESS,
    SHOW_STATS_BEGIN,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    DELETE_JOB_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_ERROR,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
    if (action.type === Display_Alert) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please povide all values',
        };
    }
    if (action.type === Clear_Alert) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        };
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Created Redirecting.....',
        };
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login Successful! Redirecting.....',
        };
    }

    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            alertText: action.payload.msg,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
        };
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            lastName: action.payload.user.lastName,
            showAlert: true,
            alertType: 'success',
            alertText: 'Update Successful.............',
        };
    }

    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            userLoading: false,
        };
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSideBar: !state.showSideBar,
        };
    }
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            page: 1,
            [action.payload.name]: action.payload.value,
        };
    }
    if (action.type === CLEAR_INPUT) {
        const initialState = {
            isEditing: false,
            editJobId: '',
            position: '',
            company: '',
            jobLocation: state.userLocation || '',
            jobType: 'part-time',
            status: 'pending',
        };
        return {
            ...state,
            ...initialState,
        };
    }
    if (action.type === CREATE_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === CREATE_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Job Created....',
        };
    }

    if (action.type === CREATE_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }
    if (action.type === GET_JOBS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
    }
    if (action.type === GET_JOBS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numberOfPages,
        };
    }
    if (action.type === SET_EDIT_JOB) {
        console.log(state.jobs[0]._id);
        const job = state.jobs.find((job) => job._id == action.payload.id);
        console.log(job);
        const { _id, position, company, jobLocation, jobType, status } = job;
        return {
            ...state,
            isEditing: true,
            editJobId: _id,
            position,
            company,
            jobLocation,
            jobType,
            status,
        };
    }
    if (action.type === EDIT_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === EDIT_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Job Updated Successfully....',
        };
    }
    if (action.type === EDIT_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }
    if (action.type === DELETE_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }
    if (action.type === DELETE_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === SHOW_STATS_BEGIN) {
        return { ...state, isLoading: true, showAlert: true };
    }
    if (action.type === SHOW_STATS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            stats: action.payload.stats,
            monthlyApplications: action.payload.monthlyApplications,
        };
    }
    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            search: '',
            searchStatus: 'all',
            searchType: 'all',
            sort: 'all',
        };
    }
    if (action.type === CHANGE_PAGE) {
        return {
            ...state,
            page: action.payload.page,
        };
    }

    if (action.type === GET_CURRENT_USER_BEGIN) {
        return {
            ...state,
            userLoading: true,
        };
    }
    if (action.type === GET_CURRENT_USER_SUCCESS) {
        return {
            ...state,
            userLoading: false,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
        };
    }
    if (action.type === GET_CURRENT_USER_ERROR) {
        return {
            ...state,
            userLoading: false,
        };
    }
    throw new Error(`no action:${action.type}`);
};
export default reducer;
