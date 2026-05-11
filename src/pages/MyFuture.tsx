import "../styles/future.css";

function MyFuture() {
  return (
    <section className="container">
      <div className="section">
        <h1 className="title">Моє майбутнє</h1>

        <div className="future-about">
          <img
            className="future-about-img"
            src="/image/photo_2026-05-11_18-12-36.jpg"
            alt="future"
          />

          <p className="text">
            Я хочу постійно розвиватися у сфері frontend-розробки, вивчати нові
            технології та працювати над сучасними вебзастосунками.
          </p>
        </div>

        <div className="future-grid">
          <div className="future-card">
            <div className="future-number">1</div>

            <h2 className="future-title">Покращити навички</h2>

            <p className="future-text">
              Хочу впевнено працювати з React, TypeScript та API, створювати
              складні SPA застосунки.
            </p>
          </div>

          <div className="future-card">
            <div className="future-number">2</div>

            <h2 className="future-title">Перша робота</h2>

            <p className="future-text">
              Моя мета - отримати роботу frontend-розробника та працювати в
              команді над реальними проєктами.
            </p>
          </div>

          <div className="future-card">
            <div className="future-number">3</div>

            <h2 className="future-title">Розвиток у IT</h2>

            <p className="future-text">
              У майбутньому хочу стати сильним спеціалістом, розробляти великі
              проєкти та постійно вдосконалюватися.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyFuture;
