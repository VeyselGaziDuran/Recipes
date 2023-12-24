import './Home.css';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

function Home() {
    const { recipe: recipes, isLoading } = useFetch('http://localhost:3001/recipes');

    return (
        <div className="row mt-3">
        {isLoading && <p>Loading...</p>}
            {recipes && recipes.map(recipe => (
                <ProductCard data={recipe} key={recipe.id} />
            ))}
        </div>
    );
}

export default Home;
