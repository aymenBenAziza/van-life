import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
    return (
        <div className="home-container container text-center">
            <div className="content">
                <h1 className="display-6 fw-bold mb-4">You got the travel plans, we got the travel vans.</h1>
                <p className="lead fs-5 mb-5">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans" className="btn btn-primary btn-lg">Find your van</Link>
            </div>
        </div>
    );
};

export default Home;
