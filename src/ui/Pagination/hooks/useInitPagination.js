import { nanoid } from 'nanoid';

const useInitPagination = (startPage, quantityPage, currentPage, constantVisible, quantityVisible) => {
    const startConstantValue = [];
    const beforeCurrentePage = [];
    const afterCurrentPageValue = [];
    const endConstantValue = [];

    const initCurrentPageValue = {
        id: nanoid(5),
        page: currentPage,
    };

    if (currentPage > startPage) {
        Array.from({ length: constantVisible }, (_, index) => ({
            id: nanoid(5),
            page: index + 1,
        }))
            .filter((item) => item.page !== currentPage)
            .forEach((item) => startConstantValue.push(item));
    }

    if (currentPage > quantityVisible - constantVisible - 1) {
        Array.from({ length: quantityVisible - constantVisible }, (_, index) => ({
            id: nanoid(5),
            page: currentPage - index,
        }))
            .reverse()
            .filter((item) => item.page !== currentPage)
            .filter((item) => item.page > constantVisible)
            .forEach((item) => beforeCurrentePage.push(item));
    }

    if (currentPage < quantityPage - constantVisible - quantityVisible) {
        Array.from({ length: quantityVisible - constantVisible }, (_, index) => ({
            id: nanoid(5),
            page: index + currentPage,
        }))
            .filter((item) => item.page !== currentPage)
            .forEach((item) => afterCurrentPageValue.push(item));
    }

    if (currentPage < quantityPage) {
        Array.from({ length: constantVisible }, (_, index) => ({
            id: nanoid(5),
            page: quantityPage - index,
        }))
            .reverse()
            .filter((item) => item.page !== currentPage)
            .forEach((item) => endConstantValue.push(item));
    }

    return [
        ...startConstantValue,
        ...beforeCurrentePage,
        initCurrentPageValue,
        ...afterCurrentPageValue,
        ...endConstantValue,
    ];
};

export { useInitPagination };
