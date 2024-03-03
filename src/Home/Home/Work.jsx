
import { Link } from "react-router-dom";
import banner from '../../assets/banner5.png'
import { FiArrowRight } from "react-icons/fi";

const Work = () => {
    return (
        <div className="mt-16">
            <h2 className="text-5xl text-start font-bold">Built for the way you work</h2>
            <div className="grid grid-cols-7 gap-2 mt-6">
            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Brainstorming</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Diagramming</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Meeting & Workshops</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Scrum Events</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Mapping</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Research & Design</Link>

            <Link className="btn btn-ghost border-slate-200 rounded-full text-xs"> Strategic Planning</Link>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-14">
                <div className="w-[300px] mt-20">
                    <h1 className="text-xl font-bold">Brainstorming</h1>
                    <p className="mt-6 mb-4">Unleash creative ideas and build on <br /> them with the help of sticky notes,<br /> images, mind maps, videos, drawing <br />capabilities — the list goes on.</p>
                    <a className='cursor-pointer text-blue-400'> Learn More <FiArrowRight className="inline "/></a>
                </div>

                <div className="">
                    <img className="" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Work;