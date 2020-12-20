import * as types from './types';

export const updateIsPagination = (status) => ({ type: types.PAGINATION_IS_PAGINATION, payload: status })

export const updatePaginationLoading = (loading) => ({ type: types.PAGINATION_LOADING, payload: loading })

export const updatePageData = (data) => ({ type: types.PAGE_DATA, payload: data })

export const updatePaginationFilter = (filter) => ({ type: types.PAGINATION_FILTER, payload: filter })

export const updatePaginationLimit = (limit) => ({ type: types.PAGINATION_LIMIT, payload: limit })

export const changeCurrentPage = (page) => ({ type: types.PAGINATION_CURRENT_PAGE, payload: page })

export const updateTotalPage = (pages) => ({ type: types.PAGINATION_TOTAL_PAGE, payload: pages })

export const updateTotalResult = (total) => ({ type: types.PAGINATION_TOTAL_RESULT, payload: total })

export const nextPage = () => ({ type: types.PAGINATION_NEXT_PAGE })

export const previousPage = () => ({ type: types.PAGINATION_PREVIOUS_PAGE })

export const restPagination = () => ({ type: types.PAGINATION_RESET })

export const updateReplayData = () => {{

}}

