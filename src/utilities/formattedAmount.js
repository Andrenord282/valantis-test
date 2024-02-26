const formattedAmount = (location, currency, amount) => {
    const optionMap = {
        RUB: {
            style: 'currency',
            currency: 'RUB',
        },
    };
    return new Intl.NumberFormat(location, optionMap[currency]).format(amount);
};

export { formattedAmount };
