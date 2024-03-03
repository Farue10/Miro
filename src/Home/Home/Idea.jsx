import { FaLongArrowAltRight } from "react-icons/fa";
import banner from '../../assets/banner.png'
import { IoLogoGoogle } from "react-icons/io";

const Idea = () => {
    return (
        <div className="grid grid-cols-2 mt-12">
            <div className="flex-1 ">
                <h1 className="text-5xl font-bold">Take ideas from <br /> better to best</h1>
                <p className="my-6">Miro is your teams visual platform to connect,<br /> collaborate, and create — together.</p>
                <input className="rounded-full border-2 pr-56 p-2" type="text" name="email" placeholder="Enter your work email" />

              
              <div className="  my-2">
              <a className="btn btn-primary rounded-full text-center text-lg text-white pl-36 pr-36">Sign up free <FaLongArrowAltRight></FaLongArrowAltRight></a>
              </div>
              <p>Collaborate with your team within minutes</p>

              <div className="grid grid-cols-4  p-4 rounded-lg bg-slate-100 mt-6">
<div className="w-60">
    <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask  mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mr-1 mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1"  />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mr-1 mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mr-1 mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mr-1 mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" checked/>
  <input type="radio" name="rating-10" className="bg-orange-500 mask mr-1 mask-star-2 mask-half-2" />
</div>
<p className="font-normal">Based on 5149+ review:</p>
</div>

<div>
<IoLogoGoogle className="text-4xl ml-14" />
</div>

<div>
<p className="text-2xl font-bold">GetApp</p>
</div>

<div>
<p className="text-2xl font-bold">Capterra</p>
</div>

</div>

                
                
            </div>
            <div>
            <img src={banner}/>
            </div>
        </div>
    );
};

export default Idea;