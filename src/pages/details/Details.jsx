import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Details.css';

function Details() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Eklenen kısım
    const url = "http://localhost:3001/recipes/" + id;

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setRecipe(res);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
                setIsLoading(false);
            });
    }, [url]);

    return (
        <div className="row mt-3">
            {isLoading && <p>Loading...</p>}

            {
                recipe && (
                    <>
                        <div className="col-4">
                            <img src={`/img/${recipe.image}`} alt={recipe.title} className='img-fluid' />
                            <hr />
                            <a href={recipe.url} className='btn btn-outline-primary'>Check out the recipe</a>
                        </div>
                        <div className='col-8'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.explanation}</p>
                            <ul>
                                {
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                }
                            </ul>
                            <p>{recipe.preparation}</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Details;
