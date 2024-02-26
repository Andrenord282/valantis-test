import classNames from 'classnames';
import { useInputChange } from '@/hooks/useInputChange';
import { useDebounce } from '@/hooks/useDebounce';
import './FilterInputValue.scss';
import { useEffect } from 'react';

const FilterInputValue = (props) => {
    const { inheritedСlasses, label, name, hanlderInputValueFilter } = props;
    const filterInput = useInputChange('');
    const debouncedFilterInput = useDebounce(filterInput.value);

    useEffect(() => {
        if (debouncedFilterInput.length === 0) return;
        hanlderInputValueFilter(name, debouncedFilterInput);
    }, [debouncedFilterInput]);

    return (
        <div className={classNames(inheritedСlasses, 'filter-select-value')}>
            <input
                type="text"
                value={filterInput.value}
                onChange={filterInput.onChenge}
                placeholder={label}
                className="filter-select-value__input"
            />
        </div>
    );
};

export { FilterInputValue };
