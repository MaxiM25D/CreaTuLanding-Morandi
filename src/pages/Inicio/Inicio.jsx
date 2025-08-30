import "./Inicio.css";

function Inicio({ greeting }) {
  return (
    <section className="inicio">
      <h1 className="inicio-title">{greeting}</h1>
      <p className="inicio-subtitle">
        Bienvenido a <span className="brand">SM Glamour 🌟</span>, tu tienda de accesorios exclusivos.
      </p>
      <div className="inicio-banner">
        <img className="banner-img" src="../src/data/img/img16.jpeg" alt="Banner" />
      </div>
    </section>
  );
}

export default Inicio;