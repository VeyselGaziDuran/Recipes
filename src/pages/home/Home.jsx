import './Home.css';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

function Home() {
    const { recipe: recipes, error } = useFetch('http://localhost:3001/recipes');

    if (error) {
        return <div>Error fetching recipes: {error}</div>;
    }

    return (
        <div className="row mt-3">
            {recipes && recipes.map(recipe => (
                <ProductCard data={recipe} key={recipe.id} />
            ))}
        </div>
    );
}

export default Home;
