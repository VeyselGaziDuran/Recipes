import { useSearchParams } from 'react-router-dom';
import './Search.css';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';

function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    const url = `http://localhost:3001/recipes?q=${query}`;
    const { recipe, isLoading, error } = useFetch(url);

    return (
        <div className='row mt-3'>
            <h2>Searched Word "{query}"</h2>
            <hr />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {recipe && recipe.map((recipe) => (
                <ProductCard key={recipe.id} data={recipe} />
            ))}
        </div>
    );
}

export default Search;