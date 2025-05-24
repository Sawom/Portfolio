import { motion } from "framer-motion";

const Extracurricular = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Extracurricular Activities
      </motion.h2>

      <div className="grid lg:grid-cols-1 gap-10  md:grid-cols-1 grid-cols-1">
        {/* 1st table */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <p className="text-center font-bold text-xl my-10">Achievements</p>
          <div className="overflow-x-auto">
            <table className="w-full text-white text-sm md:text-base font-medium rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left px-4 py-3">Title</th>
                  <th className="text-left px-4 py-3">Achievement</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">
                    Director of Student Welfare - UAP
                  </td>
                  <td className="px-4 py-3">Best Volunteer Award</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">
                    National Science Fair, Dhaka College (2015)
                  </td>
                  <td className="px-4 py-3">
                    Champion <br className="hidden sm:inline" />
                    <span className="block sm:inline">
                      | Life Science Project
                    </span>
                  </td>
                </tr>
                {/* row 3 */}
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">
                    Inter Department Programming Contest
                  </td>
                  <td className="px-4 py-3">Position: 12th</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 2nd table */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <p className="text-center font-bold text-xl my-10">Activities</p>
          <div className="overflow-x-auto">
            <table className="w-full text-white text-sm md:text-base font-medium rounded-lg overflow-hidden">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left px-4 py-3">Title</th>
                  <th className="text-left px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">
                    Debating and Public Speaking Club – DPSC
                  </td>
                  <td className="px-4 py-3">Former President</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">ICPC World Final Dhaka – 2022</td>
                  <td className="px-4 py-3">Volunteer</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">Think Covid 19 Program (2022)</td>
                  <td className="px-4 py-3">Organizer</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">
                    Intra-University Debating and Public Speaking Championship –
                    2022
                  </td>
                  <td className="px-4 py-3">Organizer</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">Rising Star Debate Tournament</td>
                  <td className="px-4 py-3">Organizer</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">Dhaka College Science Club</td>
                  <td className="px-4 py-3">Project Team</td>
                </tr>
                <tr className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3">Dhaka College Debating Society</td>
                  <td className="px-4 py-3">Debater</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Extracurricular;
