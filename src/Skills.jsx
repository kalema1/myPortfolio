/**
 * skills component
 *
 */
export default function Skills() {
  return (
    <div>
      <p className="paragraph bold-font">Skills and Expertise</p>
      <div className="skills-container">
        <img
          className="skill-img js-img"
          src="js.png"
          alt="JavaScript"
          title="JavaScript"
        />
        <img className="skill-img" src="react.png" alt="React" title="React" />
        <img
          className="skill-img node-img"
          src="nodejs.png"
          alt="Node JS"
          title="Node JS"
        />
        <img className="skill-img" src="html.png" alt="HTML" title="HTML" />
        <img className="skill-img" src="css.png" alt="CSS" title="CSS" />
        <img className="skill-img" src="sass.png" alt="SASS" title="SASS" />
        <img
          className="skill-img tailwing-img"
          src="tailwind1.png"
          alt="Tailwind CSS"
          title="Tailwind CSS"
        />
        <img
          className="skill-img"
          src="ts.png"
          alt="TypeScript"
          title="TypeScript"
        />
      </div>
    </div>
  );
}
