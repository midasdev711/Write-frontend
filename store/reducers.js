import { combineReducers } from 'redux';
import * as types from './types';

const initialPagination = {
    isPagination: false,
    loading: true,
    currentPage: 1,
    totalPage: 1,
    paginationTotalResult: 0,
    paginationLimit: 15,
    filter: {}
}

const paginationReducer = (state = initialPagination, { type, payload }) => {
    switch (type) {
        case types.PAGINATION_IS_PAGINATION: 
            return {
                ...state,
                isPagination: payload
            };

        case types.PAGINATION_LOADING: 
            return {
                ...state,
                loading: payload
            };

        case types.PAGE_DATA:
            return {
                ...state,
                pageData: payload
            }

        case types.PAGINATION_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }

        case types.PAGINATION_TOTAL_PAGE:
            return {
                ...state,
                totalPage: payload
            }

        case types.PAGINATION_TOTAL_RESULT:
            return {
                ...state,
                paginationTotalResult: payload
            }

        case types.PAGINATION_LIMIT:
            return {
                ...state,
                paginationLimit: payload
            }

        case types.PAGINATION_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...payload
                }
            }

        case types.PAGINATION_NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }

        case types.PAGINATION_PREVIOUS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }

        case types.PAGINATION_RESET:
            return {
                ...initialPagination
            }
        default:
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    pagination: paginationReducer
}

export default combineReducers(reducers);