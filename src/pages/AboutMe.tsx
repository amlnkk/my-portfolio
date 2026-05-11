import "../styles/about.css";

function AboutMe() {
  return (
    <section className="container">
      <div className="section">
        <div className="about-top">
          <div className="about-content">
            <h1 className="title">Alina Melnyk</h1>

            <h2 className="subtitle">Я початківець Frontend Developer</h2>

            <p className="text">
              Зараз активно вивчаю React і TypeScript та поступово вдосконалюю
              свої навички у веброзробці. Мені подобається створювати сучасні,
              зручні й адаптивні сайти.
            </p>

            <div className="skills">
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">JavaScript</span>
              <span className="skill">React</span>
              <span className="skill">TypeScript</span>
              <span className="skill">Vite</span>
            </div>
          </div>

          <img
            className="about-image"
            src={`${import.meta.env.BASE_URL}image/me.jpg`}
          />
        </div>
      </div>

      <div className="section projects">
        <h2 className="subtitle">Мої проєкти</h2>

        <div className="grid">
          <div className="card">
            <h3 className="project-title">HTML + CSS</h3>

            <p className="project-text">Адаптивний сайт з сучасною версткою.</p>

            <a
              className="btn"
              href="https://github.com/YuriiDavydiuk/command-project-PawHut"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          <div className="card">
            <h3 className="project-title">JavaScript</h3>

            <p className="project-text">Таймер</p>

            <a
              className="btn"
              href="https://github.com/amlnkk/goit-js-hw-10"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          <div className="card">
            <h3 className="project-title">React</h3>

            <p className="project-text">Галерея та робота з API</p>

            <a
              className="btn"
              href="https://github.com/amlnkk/react-api-gallery-melnyk"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
