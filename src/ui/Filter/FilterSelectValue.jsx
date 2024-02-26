import classNames from 'classnames';
import './FilterSelectValue.scss';

const FilterSelectValue = (props) => {
    const {
        inheritedСlasses,
        name,
        label,
        state,
        dummy,
        valueList,
        handlerToggleFilterSelectValue,
        handlerSelectValueFilter,
    } = props;

    const hanlderToggleButton = () => {
        handlerToggleFilterSelectValue(name);
    };

    return (
        <div className={classNames(inheritedСlasses, 'filter-select-value')}>
            <button onClick={hanlderToggleButton} className="filter-select-value__toggle-btn">
                {label}
            </button>
            <div className="filter-select-value__list">
                {state === 'loaded' &&
                    valueList &&
                    valueList.length > 0 &&
                    valueList.map((item) => {
                        const { key, value } = item;
                        return (
                            <button
                                key={key}
                                onClick={() => {
                                    handlerSelectValueFilter(name, key);
                                }}
                                className="filter-select-value__value-button"
                            >
                                {key !== null ? key : dummy} - ({value})
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

export { FilterSelectValue };
