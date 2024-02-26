import { productService } from '@/services/axios/api/productService';
import { useTheProductListContext } from '../state/useTheProductListContext';
import { useEffect } from 'react';

const useFetchProductCardListController = () => {
    const { fetchOffset, fetchLimit, productIdList, productListState, setProductCardList, setProductListState } =
        useTheProductListContext();

    const itemMapList = new Map();

    useEffect(() => {
        if (productListState === 'loading' && productIdList && productIdList.length > 0) {
            const currentFetchIdList = productIdList.slice(fetchOffset - 1, fetchOffset + fetchLimit - 1);
            fetchProductCardList({ ids: currentFetchIdList });
        }
        if (productListState === 'loading' && !productIdList) {
            setProductListState('not-found');
        }
    }, [productListState]);

    const handlerUpdateProductCardList = (mapList) => {
        const productCardList = Array.from(mapList.values());
        setProductCardList(productCardList);
        setProductListState('loaded');
    };

    const fetchProductCardList = async (params) => {
        const { status, data } = await productService.fetchProductCardList(params);
        if (status === 200 && data?.result && data.result.length > 0) {
            data.result.forEach(({ id, ...item }) => {
                itemMapList.set(id, {
                    id,
                    ...item,
                });
            });
            handlerUpdateProductCardList(itemMapList);
        }
    };
};

export { useFetchProductCardListController };
