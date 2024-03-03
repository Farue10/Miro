import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <div className="mt-20">
      <div className="w-60 bg-amber-400  ml-[700px]  mx-auto px-5 py-2 rounded-lg rotate-12">
        <p className="font-bold ">YOUR IDEA STATES HERE</p>
      </div>
      <h1 className="text-4xl font-bold text-center mt-2">Collaborate without <br /> constraints</h1>

      <div className="grid grid-cols-3 gap-8 mt-8">

        <div>
            <h1 className="font-bold text-xl">Free forever</h1>
            <p className="text-normal mt-6">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our 
<span className="text-blue-600"> pricing plans</span> for more features.</p>
        </div>
        <div>
            <h1 className="font-bold text-xl">Easy integrations</h1>
            <p className="text-normal mt-6">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className="text-blue-600">Marketplace</span>  .</p>
        </div>
        <div>
            <h1 className="font-bold text-xl">Security first</h1>
            <p className="text-normal mt-6">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
at our <span className="text-blue-600">Trust Center</span>  .</p>
        </div>


      </div>

      <div className="w-60 mx-auto mt-6">
      <Link className="btn btn-primary rounded-full px-5 mr-6"> Sign up free <FaLongArrowAltRight /></Link>
      </div>
    </div>
  );
};

export default Collaboration;
