import { productService } from '@/services/axios/api/productService';
import { useEffect, useState, useRef } from 'react';
import { useTheProductListContext } from '../state/useTheProductListContext';

const useFetchProductIdListController = () => {
    const { productListState, setProductIdList, setProductListState } = useTheProductListContext();
    const [fetchProductIdListState, setFetchProductIdListState] = useState('loading');
    const idListSet = useRef(new Set());

    useEffect(() => {
        if (productListState === 'init') {
            fetchProductIdList();
        }
    }, [productListState]);

    useEffect(() => {
        const handlerProductIdList = () => {
            const productIdList = Array.from(idListSet.current);
            setProductIdList(productIdList);
            idListSet.current = new Set();
        };

        if (fetchProductIdListState === 'loaded') {
            handlerProductIdList();
            setFetchProductIdListState(null);
            setProductListState('loading');
        }
    }, [fetchProductIdListState]);

    const fetchProductIdList = async () => {
        const { status, data } = await productService.fetchProductIdList();
        if (status === 200 && data?.result && data.result.length > 0) {
            data.result.forEach((id) => {
                idListSet.current.add(id);
            });
            setFetchProductIdListState('loaded');
        }
    };
};

export { useFetchProductIdListController };
