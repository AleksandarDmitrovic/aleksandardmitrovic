const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Aleksandar
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web Developer based in Calgary, Canada with industry domain experience
          in agriculture, transport, and travel.
        </p>
      </div>
    </section>
  );
};

export default About;
