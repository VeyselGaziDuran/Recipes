import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ recipe }) {
    return (
        <div className='col-3 mb-3'>
            <div className="card" key={recipe.id}>
                <img src={`/img/${recipe.image}`} alt={recipe.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{recipe.title}</h5>
                    <p className='card-text'>{recipe.explanation}</p>
                    <Link to={`/recipes/${recipe.id}`} className='btn btn-primary'>Go to recipe</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
