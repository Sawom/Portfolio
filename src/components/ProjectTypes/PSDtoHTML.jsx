import psd1 from "../../images/psd/psd1.png";
import psd10 from "../../images/psd/psd10.png";
import psd13 from "../../images/psd/psd13.png";
import psd16 from "../../images/psd/psd16.png";
import psd19 from "../../images/psd/psd19.png";
import psd21 from "../../images/psd/psd21.png";
import psd5 from "../../images/psd/psd5.png";
import psd7 from "../../images/psd/psd7.png";

const psdData = [
  {
    title: "Tea-House",
    imgurl: psd1,
    livesite: "https://sawom.github.io/Tea-House-ph/",
    details: "https://github.com/Sawom/Tea-House-ph",
  },
  {
    title: "G3-Architects",
    imgurl: psd5,
    livesite: "https://sawom.github.io/G3-Architects-ph/",
    details: "https://github.com/Sawom/G3-Architects-ph",
  },
  {
    title: "Biker-Zone",
    imgurl: psd7,
    livesite: "https://sawom.github.io/Biker-Zone-ph/",
    details: "https://github.com/Sawom/Biker-Zone-ph",
  },
  {
    title: "BuildCon",
    imgurl: psd10,
    livesite: "https://sawom.github.io/BuildCon-ph/",
    details: "https://github.com/Sawom/BuildCon-ph",
  },
  {
    title: "Business-Agency",
    imgurl: psd13,
    livesite: "https://sawom.github.io/Business-Agency-ph/",
    details: "https://github.com/Sawom/Business-Agency-ph",
  },
  {
    title: "Honda-Bazar",
    imgurl: psd16,
    livesite: "https://sawom.github.io/WDPr8-Honda-Bazar/index.html",
    details: "https://github.com/Sawom/WDPr8-Honda-Bazar",
  },
  {
    title: "Penguin-Fashion",
    imgurl: psd19,
    livesite: "https://sawom.github.io/WDPr7-Penguin-Fashion/index.html",
    details: "https://github.com/Sawom/WDPr7-Penguin-Fashion",
  },
  {
    title: "Panda-Ecommerce",
    imgurl: psd21,
    livesite: "https://sawom.github.io/WDPr6-Panda-Ecommerce/index.html",
    details: "https://github.com/Sawom/WDPr6-Panda-Ecommerce",
  },
];

const PSDtoHTML = () => {
  return (
    <div>
      <div className="mx-auto font-roboto container my-10">
        {/* element */}
        <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2 h-full"></div>
        <section className="py-16 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {psdData.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-md shadow-lg flex flex-col h-[400px] bg-cyan-800"
              >
                {/* Title (clamped to 2 lines) */}
                <p className="text-white font-medium p-4 line-clamp-2 ">
                  {project.title}
                </p>

                {/* Image */}
                <div className="flex-1 overflow-hidden">
                  <img
                    src={project.imgurl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-700 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center">
                    <p className="text-white text-lg text-center font-semibold mb-4 line-clamp-2">
                      {project.title}
                    </p>
                    {/* Buttons in row (x-axis) */}
                    <div className="flex gap-3">
                      <a
                        href={project.livesite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-cyan-700 text-sm px-2 py-2 rounded hover:bg-gray-100 transition"
                      >
                        View
                      </a>
                      <a
                        href={project.details}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-cyan-700 text-sm px-2 py-2 rounded hover:bg-gray-100 transition"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PSDtoHTML;
