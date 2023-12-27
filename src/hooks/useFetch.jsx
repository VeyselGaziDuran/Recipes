import { useState, useEffect } from 'react';

const useFetch = (url, method = "GET", isRedirect = false) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState(null);

    const postData = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        setOptions(requestOptions);
    };

    const fetchData = async (options) => {
        try {
            const res = await fetch(url, options);

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            setRecipe(data);
            setIsLoading(false);
            if (isRedirect) {
                window.location.href = '/';
            }
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        if (method === "GET") {
            fetchData(options);
        }

        return () => {
            isMounted = false;
        };
    }, [url, options, method]);

    useEffect(() => {
        if (method === "POST" && options) {
            fetchData(options);
        }
    }, [method, options]);

    return { recipe, isLoading, error, postData };
}

export default useFetch;
