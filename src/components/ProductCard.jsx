import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ data }) {
    return (
        <div className='col-3 mb-3'>
            <div className="card" key={data.id}>
                <img src={`/img/${data.image}`} alt={data.title} className='img-fluid' />
                <div className='card-body'>
                    <h5 className='card-title'>{data.title}</h5>
                    <p className='card-text'>{data.explanation}</p>
                    <Link to={`/recipes/${data.id}`} className='btn btn-primary'>Go to recipe</Link>
                </div>
            </div>
        </div>
    );
}


export default ProductCard;
