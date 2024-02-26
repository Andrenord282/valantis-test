import { useState } from 'react';
import { useTheProductListContext, useUpdateProductListOffsetController } from '@/components/TheProductList';

const useTheProductListPaginationState = () => {
    const { currentPage, fetchLimit, productLimit } = useTheProductListContext();
    const { incrementProductListOffset, decrementProductListOffset, selectProductListOffset } =
        useUpdateProductListOffsetController();
    const [constantVisiblePages, setConstantVisiblePages] = useState(2);
    const [quantityVisiblePages, setQuantityVisiblePages] = useState(6);
    const [startPage, setStartPage] = useState(1);
    const [quantityPage, setQuantityPage] = useState(Math.ceil((productLimit - fetchLimit) / fetchLimit));

    const handlerNextPage = () => {
        incrementProductListOffset();
    };

    const handlerPrevPage = () => {
        decrementProductListOffset();
    };

    const handlerSelectPage = (e) => {
        const page = +e.target.textContent.trim();
        selectProductListOffset(page);
    };

    return {
        startPage,
        quantityPage,
        currentPage,
        constantVisiblePages,
        quantityVisiblePages,
        handlerNextPage,
        handlerPrevPage,
        handlerSelectPage,
    };
};

export { useTheProductListPaginationState };
