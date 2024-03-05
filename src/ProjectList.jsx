import ProjectItem from "./ProjectItem";
import { projectDataList } from "./data/data";

export default function ProjectList() {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-heading-container">
          <h2 className="heading-secondary">My Amazing Work</h2>
          <p className="paragraph margin-bottom-3rem">
            Please take a look at the projects have worked on.
          </p>
        </div>
        <ul className="grid grid--col-2">
          {projectDataList.map((item) => (
            <ProjectItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
