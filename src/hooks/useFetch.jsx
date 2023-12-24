import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (isMounted) {
                    setRecipe(data);
                }
            })
            .catch(err => {
                setError(err.message);
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return {
        recipe,
        error
    };
}

export default useFetch;
