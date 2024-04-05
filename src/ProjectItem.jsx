/**
 * ProjectItem component
 * @param {item} - item object to be rendered
 */
export default function ProjectItem({ item }) {
  return (
    <li className="list-item">
      <div>
        <div className="item-img-container">
          <img className="item-img" src={item.image} alt={item.title} />
        </div>
        <h3 className="heading-tertiary">{item.title}</h3>
        <p className="paragraph">
          {item.description}{" "}
          <span>
            <a
              className="project-url"
              href={item.projectDemoLink}
              target="_blank"
            >
              click here
            </a>
          </span>
        </p>
      </div>
    </li>
  );
}
