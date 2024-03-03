import Collaboration from "./Collaboration";
import Connect from "./Connect";
import Idea from "./Idea";
import Loved from "./Loved";
import Teams from "./Teams";
import Together from "./Together";
import Trust from "./Trust";
import Way from "./Way";
import Work from "./Work";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Idea></Idea>
            <Trust></Trust>
            <Collaboration></Collaboration>
            <Together></Together>
            <Connect></Connect>
            <Way></Way>
            <Work></Work>
            <Teams></Teams>
            <Loved></Loved>
           
        </div>
    );
};

export default Home;