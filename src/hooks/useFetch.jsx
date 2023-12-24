import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();

                if (isMounted) {
                    setRecipe(data);
                    setIsLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return {
        recipe,
        error,
        isLoading
    };
}

export default useFetch;
