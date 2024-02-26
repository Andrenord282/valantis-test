import { useEffect } from 'react';
import { useTheProductListContext } from '../state/useTheProductListContext';

const useFetchProductLimitController = () => {
    const { productIdList, setProductLimit } = useTheProductListContext();

    useEffect(() => {
        if (productIdList && productIdList.length > 0) {
            setProductLimit(productIdList.length);
        }
    }, [productIdList]);
};

export { useFetchProductLimitController };
