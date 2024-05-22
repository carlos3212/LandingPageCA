import React from 'react';

function About() {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">Conóceme </span>
              </h2>
              <p className="lead fw-light mb-4">Experto Líder en el Desarrollo de Soluciones Tecnológicas.</p>
              <p className="text-muted">
              Soy Carlos Andrade, un Experto Líder en el Desarrollo de Soluciones Tecnológicas

Tengo una amplia trayectoria liderando el desarrollo e implementación de proyectos tecnológicos estratégicos. Con más de 5 años de experiencia, me destaco por mi capacidad para coordinar actividades de soporte técnico a nivel nacional, brindando soluciones integrales a incidentes y requerimientos de sistemas informáticos y aplicativos internos.

Como Ingeniero de Sistemas, poseo sólidas habilidades de desarrollo, habiendo diseñado e implementado soluciones web y backend utilizando diversas tecnologías. Soy capaz de resolver problemas complejos relacionados con la lógica de negocio y la optimización del rendimiento, lo que me permite aportar soluciones eficientes y de alto impacto a las necesidades de las organizaciones.

Más allá de mi experiencia técnica, me caracterizo por mi enfoque estratégico y orientación a resultados. Soy experto en la planificación y ejecución de iniciativas que garantizan la optimización de recursos informáticos y la máxima satisfacción de los usuarios finales.

Si buscas un aliado confiable y experto que pueda transformar tus ideas en soluciones tecnológicas de éxito, ¡soy tu mejor opción!
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
