const useFilterState = (props) => {
    const {
        filterSelectValueList,
        updateFilterSelectValueItemState,
        setInitFilterSelectValueList,
        fetchFilterIdlist,
        resetFilterList,
    } = props;

    const handlerToggleFilterSelectValue = (name) => {
        if (filterSelectValueList[name].state === 'close') {
            updateFilterSelectValueItemState(name, 'init');
            setInitFilterSelectValueList(name);
        }
    };

    const handlerSelectValueFilter = (name, value) => {
        updateFilterSelectValueItemState(name, 'loaded');
        fetchFilterIdlist(name, value);
    };

    const hanlderInputValueFilter = (name, value) => {
        updateFilterSelectValueItemState(name, 'loaded');
        fetchFilterIdlist(name, value);
    };

    const handlerResetFilterList = () => {
        resetFilterList();
    };
    
    return {
        filterSelectValueList,
        handlerToggleFilterSelectValue,
        handlerSelectValueFilter,
        hanlderInputValueFilter,
        handlerResetFilterList,
    };
};

export { useFilterState };
