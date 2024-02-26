import { useTheProductListPaginationState } from './hooks/useTheProductListPaginationState';
import { Pagination } from '@/ui/Pagination';

const TheProductListPagination = (props) => {
    const { inheritedСlasses } = props;
    const {
        startPage,
        quantityPage,
        currentPage,
        constantVisiblePages,
        quantityVisiblePages,
        handlerNextPage,
        handlerPrevPage,
        handlerSelectPage,
    } = useTheProductListPaginationState();

    return (
        <Pagination
            startPage={startPage}
            quantityPage={quantityPage}
            currentPage={currentPage}
            constantVisiblePages={constantVisiblePages}
            quantityVisiblePages={quantityVisiblePages}
            handlerNextPage={handlerNextPage}
            handlerPrevPage={handlerPrevPage}
            handlerSelectPage={handlerSelectPage}
            inheritedСlasses={inheritedСlasses}
        />
    );
};

export { TheProductListPagination };
