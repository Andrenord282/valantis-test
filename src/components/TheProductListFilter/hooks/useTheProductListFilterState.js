import { productService } from '@/services/axios/api/productService';
import { useTheProductListContext } from '@/components/TheProductList';
import { useState } from 'react';

const initFilterSelectValueList = {
    product: {
        type: 'input',
        name: 'product',
        label: 'Фильтр по названию',
    },
    brand: {
        type: 'select',
        name: 'brand',
        label: 'Фильтр по бренду',
        state: 'close',
        dummy: 'Без бренда',
        valueList: [],
    },
    price: {
        type: 'select',
        name: 'price',
        label: 'Фильтр по цене',
        state: 'close',
        valueList: [],
    },
};

const useTheProductListFilterState = () => {
    const [filterSelectValueList, setFilterSelectValueList] = useState(initFilterSelectValueList);
    const { setProductIdList, setProductListState, setFetchOffset, setCurrentPage } = useTheProductListContext();

    const updateFilterSelectValueItemState = (name, newState) => {
        setFilterSelectValueList((prevFilterSelectValueList) => {
            const newFilterSelectValueList = {
                ...prevFilterSelectValueList,
            };
            newFilterSelectValueList[name].state = newState;

            return {
                ...newFilterSelectValueList,
            };
        });
    };

    const setInitFilterSelectValueList = async (name) => {
        const valueMap = {};
        const result = await fetchGetProductField(name);

        result.forEach((value) => {
            const checkedValue = typeof value === 'number' ? value.toFixed(1) : value;
            valueMap[checkedValue] = valueMap[checkedValue] ? valueMap[checkedValue] + 1 : 1;
        });

        setFilterSelectValueList((prevFilterSelectValueList) => {
            const newFilterSelectValueList = { ...prevFilterSelectValueList };
            const newValueList = [];

            for (const [key, value] of Object.entries(valueMap)) {
                newValueList.push({
                    key: key !== 'null' ? key : null,
                    value,
                });
            }

            newFilterSelectValueList[name].valueList = [...newValueList];
            newFilterSelectValueList[name].state = 'loaded';

            return {
                ...newFilterSelectValueList,
            };
        });
    };

    const fetchFilterIdlist = async (name, value) => {
        const filterIdList = await fetchFilterProductIdList(name, value);
        setProductIdList(filterIdList);
        setProductListState('loading');
        setFetchOffset(1);
        setCurrentPage(1);
    };

    const fetchFilterProductIdList = async (name, value) => {
        const checkedValue = (() => {
            if (value === null) {
                return null;
            }
            if (!isNaN(Number(value))) {
                return +value;
            }
            return value;
        })();
        const { status, data } = await productService.fetchFilterProductIdList({ [name]: checkedValue });

        if (status === 200 && data?.result && data.result.length > 0) {
            return data.result;
        }
    };

    const fetchGetProductField = async (name) => {
        const { status, data } = await productService.fetchGetProductField({ field: name });
        if (status === 200 && data?.result && data.result.length > 0) {
            return data.result;
        }
    };

    const resetFilterList = () => {
        setProductListState('init');
        setFetchOffset(1);
        setCurrentPage(1);
    };

    return {
        filterSelectValueList,
        updateFilterSelectValueItemState,
        setInitFilterSelectValueList,
        fetchFilterIdlist,
        resetFilterList,
    };
};

export { useTheProductListFilterState };
