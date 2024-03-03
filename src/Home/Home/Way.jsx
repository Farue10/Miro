import { Link } from 'react-router-dom';
import banner from '../../assets/banner4.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Way = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className=""></div>
  <div className="hero-content text-center ">
    <div className="w-4/5 ml-[750px] ">
      <h1 className="mb-5 text-2xl font-bold">The Ways We Work</h1>
      <p className="mb-5">How has our relationship with work changed?</p>
      <Link className="btn btn-primary rounded-full px-5 mr-6"> Sign up free <FaLongArrowAltRight /></Link>
    </div>
  </div>
</div>
    );
};

export default Way;