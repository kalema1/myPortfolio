import Social from "./Social";
export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="grid grid--col-2 grid-align-center">
          <div>
            <p className="paragraph">Hello, my name is;</p>
            <h1 className="heading-primary">KALEMA RONALD</h1>
            <h2 className="heading-secondary">
              A Frontend Developer from Uganda.
            </h2>
            <p className="paragraph margin-bottom-3rem">
              A Passionate Developer with a flair for crafting visually stunning
              and highly functional web experiences.
            </p>
            <Social />
          </div>
          <div className="hero-img-container">
            <img src="picha.jpg" alt="kalema" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
