import classNames from 'classnames';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardSkeleton = (props) => {
    const { inheritedСlasses } = props;
    return (
        <div className={classNames(inheritedСlasses, 'product-card-skeleton')}>
            <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                <Skeleton count={15} />
            </SkeletonTheme>
        </div>
    );
};

export { ProductCardSkeleton };
