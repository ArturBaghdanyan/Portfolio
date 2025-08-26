const AboutPage = () => {
  return (
    <div
      className="w-[80%] flex flex-col justify-center mx-auto
          text-justify gap-y-3 container-spacing"
    >
      <h2 className="title text-left">about me</h2>
      <div>
        <p className="mt-3">
          I&apos;m a passionate&nbsp;
          <b style={{ fontWeight: '900' }}>Front-End developer.</b> My expertise
          lies in crafting stunning and functional user interfaces. I have a
          strong foundation in a variety of technologies, including{" "}
          <b>HTML/HTML5, CSS/CSS3, SCSS, and JavaScript,</b>
          with a focus on building responsive designs․
        </p>

        <p className="mt-3">
          My professional experience includes working as a Front-End developer
          at IU Networks llc and contributing to a startup team at bonuses
          solutions. I've also developed projects using modern frameworks like
          React JS and Vue JS. For example, at amBrain, I developed a casino
          project using JavaScript, React.js, and SCSS, and also created
          front-end components for an anti-detect browser using Vue.js. At
          Circus Codes, I collaborated on a property fraud application using
          React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-3">
          <b style={{ fontWeight: '900' }}>Learning</b>&nbsp; and self-improvement
          are fundamental to my journey as a front-end developer. Each day, I
          enthusiastically embrace the opportunity to expand my knowledge and
          expertise. Whether it is exploring the latest web technologies, diving
          into cutting-edge frameworks, or delving into best practices for
          responsive design and accessibility, I&apos;m committed to staying at
          the forefront of my field.
        </p>
        <p className="mt-3">
          Outside of the world of web development, I have a diverse set of
          interests that keep me inspired and balanced. I&apos;m an avid reader,
          always with a&nbsp;
          <b style={{ fontWeight: '900' }}>book</b>&nbsp; in hand, and I love
          exploring new worlds through literature.
          <b style={{ fontWeight: '900' }}>Sports and football</b>&nbsp; are a
          significant part of my life, not just as a spectator, but also as a
          way to stay active and competitive.
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
