import { ProductCard } from '@/ui/ProductCard';
import { ProductCardSkeleton } from '@/ui/ProductCardSkeleton';
import { TheProductListFilter } from '@/components/TheProductListFilter';
import { TheProductListPagination } from '@/components/TheProductListPagination';
import { useTheProductListState } from './hooks/useTheProductListState';
import './TheProductList.scss';

const TheProductList = () => {
    const { productListState, productCardList, fetchLimit } = useTheProductListState();

    const TheProductListItemMap = {
        loading: () => {
            return new Array(fetchLimit).fill(0).map((_, index) => {
                return <ProductCardSkeleton inheritedСlasses="product-list__item" key={index} />;
            });
        },
        loaded: () => {
            if (productCardList && productCardList.length > 0) {
                return productCardList.map((productCard, index) => {
                    return (
                        <ProductCard
                            key={productCard.id}
                            index={index}
                            {...productCard}
                            inheritedСlasses="product-list__item"
                        />
                    );
                });
            }
        },
        'not-found': () => {
            return <p className="product-list__text">Товар не найден</p>;
        },
    };

    return (
        <div className="product-list">
            <h2 className="product-list__title">Список товаров</h2>
            <div className="product-list__body">
                <div className="product-list__sidebar">
                    <TheProductListFilter inheritedСlasses="product-list__sidebar-item" />
                </div>
                <div className="product-list__content">
                    {TheProductListItemMap[productListState] && TheProductListItemMap[productListState]()}
                </div>
            </div>
            {productListState === 'loaded' && <TheProductListPagination inheritedСlasses="product-list__pagination" />}
        </div>
    );
};

export { TheProductList };
