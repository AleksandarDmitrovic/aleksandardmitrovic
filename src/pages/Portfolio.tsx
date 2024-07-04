import { Link } from "react-router-dom";
import { projects } from "../constants";

const Portfolio = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Portfolio
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Below are some of the projects/ apps that I have worked on throughout
          my education and personal development.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div>
                <Link
                  className="font-semibold text-blue-600"
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
