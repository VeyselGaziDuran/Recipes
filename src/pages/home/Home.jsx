import React, { useState, useEffect } from 'react';
import './Home.css';
import ProductCard from '../../components/ProductCard';

function Home() {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="row mt-3">
            {recipes && recipes.map(recipe => (
                <ProductCard recipe={recipe} key={recipe.id} />
            ))
            }
        </div>
    );
}

export default Home;
