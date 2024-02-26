import classNames from 'classnames';
import { usePaginationState } from './hooks/usePaginationState';
import './Pagination.scss';

const Pagination = (props) => {
    const { inheritedСlasses } = props;
    const {
        currentPage,
        paginationList,
        handlerNextPage,
        handlerPrevPage,
        handlerSelectPage,
        disablePrevBtn,
        disableNextBtn,
    } = usePaginationState(props);

    return (
        <div className={classNames(inheritedСlasses, 'pagination')}>
            <button onClick={handlerPrevPage} disabled={disablePrevBtn()} className="pagination__navigate-button">
                Пред
            </button>
            {paginationList &&
                paginationList.length > 0 &&
                paginationList.map(({ id, page }) => {
                    if (page === currentPage) {
                        return (
                            <span key={id} className="pagination__current-page">
                                {page}
                            </span>
                        );
                    }

                    return (
                        <button key={id} onClick={handlerSelectPage} className="pagination__navigate-button">
                            {page}
                        </button>
                    );
                })}
            <button onClick={handlerNextPage} disabled={disableNextBtn()} className="pagination__navigate-button">
                След
            </button>
        </div>
    );
};

export { Pagination };
