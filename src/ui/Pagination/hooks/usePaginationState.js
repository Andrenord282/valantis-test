import { useInitPagination } from './useInitPagination';

const usePaginationState = (props) => {
    const {
        startPage,
        quantityPage,
        currentPage,
        constantVisiblePages,
        quantityVisiblePages,
        handlerNextPage,
        handlerPrevPage,
        handlerSelectPage,
    } = props;

    const paginationList = useInitPagination(
        startPage,
        quantityPage,
        currentPage,
        constantVisiblePages,
        quantityVisiblePages
    );

    const disablePrevBtn = () => {
        return currentPage === startPage;
    };

    const disableNextBtn = () => {
        return currentPage === quantityPage;
    };

    return {
        startPage,
        quantityPage,
        paginationList,
        currentPage,
        constantVisiblePages,
        quantityVisiblePages,
        handlerNextPage,
        handlerPrevPage,
        handlerSelectPage,
        disablePrevBtn,
        disableNextBtn,
    };
};

export { usePaginationState };
