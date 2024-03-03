import { FiArrowRight } from "react-icons/fi";
import banner from '../../assets/banner3.png'

const Connect = () => {
    return (
        <div className="grid grid-cols-2 gap-10 mt-10">
            <div>
                <img src={banner} alt="" />
            </div>
            <div className='flex-1 mt-44'>
                <h2 className="text-5xl font-bold">Work together, <br /> wherever you work</h2>
                <p className='my-6'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
               <a className='underline  cursor-pointer text-blue-400'> Learn More <FiArrowRight className="inline "/></a>
            </div>
            
        </div>
    );
};

export default Connect;