import { useTheProductListContext } from '../state/useTheProductListContext';
import {
    useFetchProductLimitController,
    useFetchProductIdListController,
    useFetchProductCardListController,
} from '../controllers';

const useTheProductListState = () => {
    const { fetchOffset, fetchLimit, productLimit, productListState, productCardList } = useTheProductListContext();

    useFetchProductIdListController();
    useFetchProductLimitController();
    useFetchProductCardListController();

    return {
        fetchOffset,
        fetchLimit,
        productLimit,
        productListState,
        productCardList,
    };
};

export { useTheProductListState };
