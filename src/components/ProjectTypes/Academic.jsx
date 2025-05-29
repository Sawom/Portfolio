import ac1 from "../../images/academic/ac1.png";
import ac2 from "../../images/academic/ac2.png";
import ac3 from "../../images/academic/ac3.png";
import ac4 from "../../images/academic/ac4.png";
import ac5 from "../../images/academic/ac5.png";
import ac6 from "../../images/academic/ac6.png";
import ac7 from "../../images/academic/ac7.png";
import ac8 from "../../images/academic/ac8.png";
import ac9 from "../../images/academic/ac9.jpg";

const academicData = [
  {
    title: "Donkey Kong game with Unity",
    imgurl: ac5,
    details: "https://github.com/Sawom/Donkey_Kong",
  },
  {
    title: "Educational-Media with Django",
    imgurl: ac1,
    details: "https://github.com/Sawom/UAP-Educational-Media",
  },
  {
    title: "Food Network with Django",
    imgurl: ac2,
    details: "https://github.com/Sawom/FoodNetwork_DjangoProject",
  },
  {
    title: "A Banking management System with Java",
    imgurl: ac3,
    details:
      "https://github.com/Sawom/A-Banking-management-System-Java-project",
  },
  {
    title: "Car Shop Management System with SQL",
    imgurl: ac4,
    details:
      "https://github.com/Sawom/CAR-SHOP-MANAGEMENT-SYSTEM-SQL-Database-Project",
  },
  {
    title: "Conference Room with Greedy Algorithm",
    imgurl: ac6,
    details:
      "https://github.com/Sawom/Conference-Room-Schedule-System-Algorithm-Project",
  },
  {
    title: "Banking System with CPP",
    imgurl: ac7,
    details: "https://github.com/Sawom/Banking-System-CPP-project",
  },
  {
    title: "Number-Guessing-game with CPP",
    imgurl: ac8,
    details: "https://github.com/Sawom/Number-Guessing-game-CPP-project",
  },
  {
    title: "Calender with C",
    imgurl: ac9,
    details: "https://github.com/Sawom/Calender-C-Programming-Project",
  },
];

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
