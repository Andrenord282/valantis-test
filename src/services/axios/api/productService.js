import { serverProductApi } from '../client';

class ProductService {
    fetchGetProductField = async (params) => {
        try {
            const response = await serverProductApi.post('/', {
                action: 'get_fields',
                params,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };
    fetchFilterProductIdList = async (params) => {
        try {
            const response = await serverProductApi.post('/', {
                action: 'filter',
                params,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };
    fetchProductIdList = async (params) => {
        try {
            const response = await serverProductApi.post('/', {
                action: 'get_ids',
                params,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };
    fetchProductCardList = async (params) => {
        try {
            const response = await serverProductApi.post('/', {
                action: 'get_items',
                params,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };
}

export const productService = new ProductService();
