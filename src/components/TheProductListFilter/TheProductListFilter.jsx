import { useTheProductListFilterState } from './hooks/useTheProductListFilterState';
import { Filter } from '@/ui/Filter';

const TheProductListFilter = (props) => {
    const { inheritedСlasses } = props;
    const {
        filterSelectValueList,
        updateFilterSelectValueItemState,
        setInitFilterSelectValueList,
        fetchFilterIdlist,
        resetFilterList,
    } = useTheProductListFilterState();

    return (
        <Filter
            inheritedСlasses={inheritedСlasses}
            filterSelectValueList={filterSelectValueList}
            updateFilterSelectValueItemState={updateFilterSelectValueItemState}
            fetchFilterIdlist={fetchFilterIdlist}
            setInitFilterSelectValueList={setInitFilterSelectValueList}
            resetFilterList={resetFilterList}
        />
    );
};

export { TheProductListFilter };
