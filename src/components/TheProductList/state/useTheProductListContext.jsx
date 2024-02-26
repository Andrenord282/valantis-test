import { createContext, useContext, useState } from 'react';

const TheProductListContext = createContext(null);

const TheProductListContextProvider = (props) => {
    const { children } = props;
    const [cursorFetchOffset, setCursorFetchOffset] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetchOffset, setFetchOffset] = useState(1);
    const [fetchLimit, setFetchLimit] = useState(50);
    const [productLimit, setProductLimit] = useState(null);
    const [productIdList, setProductIdList] = useState(null);
    const [productCardList, setProductCardList] = useState(null);
    const [productListState, setProductListState] = useState('init');

    const theProductListContextValue = {
        cursorFetchOffset,
        currentPage,
        fetchOffset,
        fetchLimit,
        productLimit,
        productIdList,
        productCardList,
        productListState,
        setCurrentPage,
        setCursorFetchOffset,
        setFetchOffset,
        setProductLimit,
        setProductIdList,
        setProductCardList,
        setProductListState,
    };

    return (
        <TheProductListContext.Provider value={theProductListContextValue}>{children}</TheProductListContext.Provider>
    );
};

const useTheProductListContext = () => {
    const contextData = useContext(TheProductListContext);

    return contextData;
};

export { TheProductListContextProvider, useTheProductListContext };
