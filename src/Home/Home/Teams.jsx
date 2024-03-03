import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import banner from '../../assets/banner6.png'
import logo1 from '../../assets/diamond.png'
import logo4 from '../../assets/th.jpg'
import logo2 from '../../assets/figma.png'
import logo3 from '../../assets/n.png'
import { VscCheck } from "react-icons/vsc";

const Teams = () => {
    return (
        <div className="mt-16">
        <h2 className="text-5xl text-start font-bold">Built for all kinds of teams</h2>
        <div className="grid grid-cols-7 gap-2 mt-6">
        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> UX & Design</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Marketing</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Product Management</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Engineering</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Consultants</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Agile Coaches</Link>

        <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Sales</Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-14">
            <div className="w-[300px] mt-20">
              
               <p className="text-violet-400"><VscCheck className="inline mr-2 text-xl font-bold"/>Build low-fi wireframes.</p>
               <p className="text-violet-400"><VscCheck className="inline mr-2 text-xl font-bold"/>Involve stakeholders in the design process.</p>
               <p className="text-violet-400"><VscCheck className="inline mr-2  text-xl font-bold"/>Run engaging design workshops.</p>
               

                <div className="mt-6">
                <a className='cursor-pointer text-blue-400 '> Learn More <FiArrowRight className="inline "/></a>
                </div>

                <div className="mt-9">
                    <h1 className="text-lg text-violet-400">Integrate your favorite tools</h1>
                    <div className="grid grid-cols-4 gap-4">
                        <img className="h-10  w-28" src={logo1} />
                        <img className="h-10  w-28" src={logo4}/>
                        <img className="h-10  w-28" src={logo2}  />
                        <img className="h-10  w-28" src={logo3} />
                    </div>
                </div>
            </div>

            <div className="">
                <img className="" src={banner} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Teams;