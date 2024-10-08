import Skills from "./Skills";

/**
 * About component
 */
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="grid grid--col-2 grid-align-center">
          <div>
            <div>
              <img className="about-me-img" src="about.jpg" alt="about me" />
            </div>
          </div>
          <div>
            <h2 className="heading-secondary">About me</h2>
            <h3 className="heading-tertiary">
              A dedicated Software Developer based in Uganda.
            </h3>
            <p className="paragraph margin-bottom-3rem">
              I have an impressive arsenal of skills in JavaScript, TypeScript,
              HTML, CSS, React, Next.js, Node.js Tailwind CSS, SaSS. I excel in
              designing and maintaining responsive applications that offer a
              smooth user experience. My Expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am a
              very good team player who thrives in collaborating with
              cross-functional teams to produce outstanding applications.
            </p>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
