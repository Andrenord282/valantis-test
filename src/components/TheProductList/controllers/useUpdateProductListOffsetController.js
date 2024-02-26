import { useTheProductListContext } from '../state/useTheProductListContext';

const useUpdateProductListOffsetController = () => {
    const { setCurrentPage, cursorFetchOffset, fetchLimit, setFetchOffset, setProductListState } =
        useTheProductListContext();

    const incrementProductListOffset = () => {
        setCurrentPage((prevCurrentPage) => {
            return prevCurrentPage + 1;
        });
        setFetchOffset((prevFetchOffset) => {
            if (cursorFetchOffset) return cursorFetchOffset;
            return prevFetchOffset + fetchLimit;
        });
        setProductListState('loading');
    };

    const decrementProductListOffset = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        setFetchOffset((prevFetchOffset) => {
            let newOffset = prevFetchOffset - fetchLimit;
            return newOffset;
        });
        setProductListState('loading');
    };

    const selectProductListOffset = (page) => {
        setCurrentPage(page);
        setFetchOffset(() => {
            return page === 1 ? 1 : fetchLimit * page;
        });
        setProductListState('loading');
    };
    return {
        incrementProductListOffset,
        decrementProductListOffset,
        selectProductListOffset,
    };
};

export { useUpdateProductListOffsetController };
