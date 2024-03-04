import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export default function Social() {
  return (
    <div>
      <p className="paragraph">
        Please peruse my social media profiles to learn more about me;
      </p>
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/kalema-ronald-0a7a8198/"
          target="_blank"
        >
          <IoLogoLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/kalema1/" target="_blank">
          <IoLogoGithub className="social-icon" />
        </a>
        <a href="https://twitter.com/ron_kalema" target="_blank">
          <IoLogoTwitter className="social-icon" />
        </a>
      </div>
    </div>
  );
}
