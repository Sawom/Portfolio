import mern1 from "../../images/mern/arsTravels/mern1.png";
import mern12 from "../../images/mern/arsTravels/mern12.png";
import mern13 from "../../images/mern/arsTravels/mern13.png";
import mern4 from "../../images/mern/arsTravels/mern4.png";
import mern7 from "../../images/mern/arsTravels/mern7.png";

const mernData = [
  {
    title: "Bangladesh Complaint Portal",
    imgurl: mern13,
    livesite: "https://gilded-brioche-c3f211.netlify.app/",
    details: "https://github.com/Sawom/Bangladesh_Complaint_Portal",
  },
  {
    title: "Laptop Land",
    imgurl: mern12,
    livesite: "https://ubiquitous-llama-8cf89b.netlify.app/",
    details: "https://github.com/Sawom/Laptop_Land",
  },
  {
    title: "ARS-Restaurant",
    imgurl: mern7,
    livesite: "https://voluble-crisp-63c7a2.netlify.app/",
    details: "https://github.com/Sawom/ARS-Restaurant",
  },
  {
    title: "ARS-Travels",
    imgurl: mern1,
    livesite: "https://toursite-44305.web.app/",
    details: "https://github.com/Sawom/ARS-Travels",
  },
  {
    title: "Planet-Shopping",
    imgurl: mern4,
    livesite: "https://ecommerceapp-f7c88.web.app/",
    details: "https://github.com/Sawom/Planet-Shopping",
  },
];

const Mern = () => {
  return (
    <div>
      <div className="mx-auto font-roboto container my-10">
        {/* element */}
        <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2 h-full"></div>
        <section className="py-16 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mernData.map((project, index) => (
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

export default Mern;
