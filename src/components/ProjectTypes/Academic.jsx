import { academicData } from "../../constants";

const Academic = () => {
  return (
    <div>
      <div className="mx-auto font-roboto container my-10">
        {/* element */}
        <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2 h-full"></div>
        <section className="py-16 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {academicData.map((project, index) => (
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
                    <a
                      href={project.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-cyan-700 text-sm px-4 py-2 rounded hover:bg-gray-100 transition"
                    >
                      Details
                    </a>
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

export default Academic;
