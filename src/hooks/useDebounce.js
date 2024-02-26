import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 1000) => {
    const [debouncedValue, setDebounceValue] = useState(value);
    const timerRef = useRef();

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
    });

    return debouncedValue;
};

export { useDebounce };
