import './ProductCard.css';

function ProductCard({ recipe }) {
    return (
        <div className='col-3 mb-3' key={recipe.id}>
            <div className="card">
                <img src={`/img/${recipe.image}`} alt={recipe.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{recipe.title}</h5>
                    <p className='card-text'>{recipe.explanation}</p>
                    <a href={`/recipe/${recipe.id}`} className='btn btn-primary'>Go to recipe</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
