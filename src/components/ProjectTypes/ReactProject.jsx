import { AiOutlineFundView } from "react-icons/ai";
import react1 from "../../images/react/react1.png";
import react2 from "../../images/react/react2.png";
import react3 from "../../images/react/react3.png";
import react4 from "../../images/react/react4.png";
import react5 from "../../images/react/react5.png";
import react6 from "../../images/react/react6.png";

const reactData = [
  {
    title: "Auto Repair Services",
    imgurl: react1,
    livesite: "https://moduleten-f3434.web.app/",
    details: "https://github.com/Sawom/Auto-Repair-Services",
  },
  {
    title: "Ema-Jhon Shop",
    imgurl: react2,
    livesite: "https://webproject-94b72.web.app",
    details: "https://github.com/Sawom/Ema-Jhon-With-Firebase",
  },
  {
    title: "Medi-Care-Medicine-Shop",
    imgurl: react3,
    livesite: "https://medicinesite.web.app/",
    details: "https://github.com/Sawom/Medi-Care-Medicine-Shop",
  },
  {
    title: "EduCare",
    imgurl: react4,
    livesite: "https://elegant-sunshine-612c50.netlify.app/",
    details: "https://github.com/Sawom/EduCare-react",
  },
  {
    title: "Restaurant (SPA)",
    imgurl: react5,
    livesite: "https://zesty-lollipop-7b38b1.netlify.app/",
    details: "https://github.com/Sawom/Resturant-react-?tab=readme-ov-file",
  },
  {
    title: "DECATHLON-Sports-Shop",
    imgurl: react6,
    livesite: "https://endearing-buttercream-ae39c4.netlify.app/",
    details: "https://github.com/Sawom/DECATHLON-Sports-Shop-with-React",
  },
];

const ReactProject = () => {
  return (
    <div className="mx-auto container my-10">
      <div className="grid lg:grid-cols-3 gap-8  md:grid-cols-2 h-full">
        {/* 1st */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Auto Repair Services </h2>
            <div className="card-actions justify-end">
              <a href="https://moduleten-f3434.web.app/" target="_blank">
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Ema-Jhon </h2>
            <div className="card-actions justify-end">
              <a href="https://webproject-94b72.web.app/" target="_blank">
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Medi-Care-Medicine-Shop </h2>
            <div className="card-actions justify-end">
              <a href="https://medicinesite.web.app/" target="_blank">
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> EduCare </h2>
            <div className="card-actions justify-end">
              <a
                href="https://elegant-sunshine-612c50.netlify.app/"
                target="_blank"
              >
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 5th */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Restaurant (SPA) </h2>
            <div className="card-actions justify-end">
              <a
                href="https://zesty-lollipop-7b38b1.netlify.app/"
                target="_blank"
              >
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 6th */}
        <div className="card cardStyle bg-base-100 shadow-xl h-full">
          <figure>
            <img src={react6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> DECATHLON-Sports-Shop (SPA) </h2>
            <div className="card-actions justify-end">
              <a
                href="https://endearing-buttercream-ae39c4.netlify.app/"
                target="_blank"
              >
                <button className="btn btn-outline btn-sm border-4 mt-6">
                  <span className="flex px-2">
                    <AiOutlineFundView className="mr-2" size={16} /> view{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactProject;
