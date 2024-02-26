import classNames from 'classnames';
import { formattedAmount } from '@/utilities';


import './ProductCard.scss';

const ProductCard = (props) => {
    const { index, inheritedСlasses, id, product, brand, price } = props;

    return (
        <article className={classNames(inheritedСlasses, 'product-card')}>
            <div className="product-card__header">
                <h3 className="product-card__name">
                    {index + 1} ___ {product}
                </h3>
            </div>
            <div className="product-card__body">
                <p className="product-card__brand">
                    Бренд: <span>{brand ? brand : '-'}</span>
                </p>
                <p className="product-card__price">
                    цена: <span>{formattedAmount('ru-RU', 'RUB', price)}</span>
                </p>
                <p className="product-card__id">
                    id товара: <br />
                    {id}
                </p>
            </div>
        </article>
    );
};


export { ProductCard };
