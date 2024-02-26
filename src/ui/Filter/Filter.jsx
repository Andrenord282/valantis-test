import classNames from 'classnames';
import { useFilterState } from './hooks/useFilterState';
import { FilterInputValue } from './FilterInputValue';
import { FilterSelectValue } from './FilterSelectValue';
import './Filter.scss';

const Filter = (props) => {
    const { inheritedСlasses } = props;
    const {
        filterSelectValueList,
        handlerToggleFilterSelectValue,
        handlerSelectValueFilter,
        hanlderInputValueFilter,
        handlerResetFilterList,
    } = useFilterState(props);

    return (
        <div className={classNames(inheritedСlasses, 'filter')}>
            {filterSelectValueList &&
                Object.values(filterSelectValueList).length > 0 &&
                Object.values(filterSelectValueList).map((filterSelectItem) => {
                    if (filterSelectItem.type === 'input') {
                        return (
                            <FilterInputValue
                                key={filterSelectItem.name}
                                {...filterSelectItem}
                                hanlderInputValueFilter={hanlderInputValueFilter}
                                inheritedСlasses="filter__item filter__input"
                            />
                        );
                    }
                })}
            {filterSelectValueList &&
                Object.values(filterSelectValueList).length > 0 &&
                Object.values(filterSelectValueList).map((filterSelectItem) => {
                    if (filterSelectItem.type === 'select') {
                        return (
                            <FilterSelectValue
                                key={filterSelectItem.name}
                                {...filterSelectItem}
                                inheritedСlasses="filter__item filter__select"
                                handlerToggleFilterSelectValue={handlerToggleFilterSelectValue}
                                handlerSelectValueFilter={handlerSelectValueFilter}
                            />
                        );
                    }
                })}
            <button onClick={handlerResetFilterList} className="filter__item filter__reset-button">
                Сбросить фильтр
            </button>
        </div>
    );
};

export { Filter };
