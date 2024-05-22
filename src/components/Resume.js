import React from 'react';
import pdfFile from '../assets/carlos_es.pdf';

function DownloadCvButton() {
    const handleDownload = () => {
      // Crear un elemento de enlace temporal
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = 'Carlos Andrade.pdf';
      link.click();
    };
  
    return (
      <button onClick={handleDownload}>
        Descargar CV
      </button>
    );
  }

function Resume() {
  return (
    <main className="flex-shrink-0">
         <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
        
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        {/* ... Navbar content ... */}
      </nav>

      {/* Page Content */}
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Hoja De Vida</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section */}
            <section>
            <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">Experiencia</h2>
          <DownloadCvButton />
                            </div>
                          
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2022 - Presente</div>
                                                <div class="small fw-bolder">Analista IT</div>
                                                <div class="small text-muted">Nipro Medical Corporatin</div>
                                                <div class="small text-muted">Quito - Ecuador</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Como Analista TIC en NIPRO Medical Corporation, he demostrado amplias habilidades técnicas y de gestión. Desarrollé la página web y el dashboard corporativo, mejorando la presencia digital de la empresa. Además, brindé soporte técnico nacional, garantizando la continuidad de sus operaciones. Gestioné la documentación, optimizando procesos, y realicé actualizaciones y soporte a las aplicaciones internas. Mi experiencia incluye también el trabajo con el sistema SAP BUSINESS CLIENT, demostrando adaptación a diversas herramientas empresariales.</div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2023 - 2023 - Remoto</div>
                                                <div class="small fw-bolder">Libelula Soft</div>
                                                <div class="small text-muted">Desarrollador Backend</div>
                                                <div class="small text-muted">Cuneca - Ecuador</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Como Desarrollador Backend en LIBELULASOFT durante un contrato de 6 meses, diseñé e implementé soluciones backend utilizando PHP y el framework YII2, demostrando mi dominio de estas tecnologías. Además, resolví problemas complejos relacionados con la lógica de negocio y la optimización del rendimiento, aportando soluciones eficaces. Desarrollé funciones personalizadas para mejorar la eficiencia y funcionalidad de las aplicaciones, destacando mis habilidades de programación. A pesar de las limitaciones de tiempo del contrato, cumplí exitosamente con las tareas asignadas, manteniendo altos estándares de calidad en mi trabajo.</div></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2021 - 2022 - Remoto</div>
                                                <div class="small fw-bolder">SIDEVOX S.A</div>
                                                <div class="small text-muted">Desarrollo WEB</div>
                                                <div class="small text-muted">Quito - Ecuador</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Como Desarrollador Web en SIDEVOX S.A., desarrollé el frontend de la página web empresarial utilizando tecnologías como Bootstrap, Java y HTML, mejorando significativamente la presencia digital de la compañía. Además, implementé tanto el frontend como el backend de una aplicación web para el envío de mensajes masivos, integrando una API de terceros (SparkPost) y utilizando PHP, Bootstrap y PostgreSQL. También creé una interfaz de usuario tanto para clientes como para administradores, optimizando la usabilidad y funcionalidad de la aplicación. Cumplí exitosamente con estas tareas, demostrando mis sólidas habilidades de desarrollo.</div></div>
                                    </div>
                                </div>
                            </div>

                                                      
            </section>

            {/* Education Section */}
            <section>
            <h2 class="text-secondary fw-bolder mb-4">Education</h2>
                        
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2017 - 2022</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">Universiada Politécnica Salesiana</div>
                                                    <div class="small text-muted"></div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Ingenieria</div>
                                                    <div class="small text-muted">En Sistemas</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Uno de mis principales logros durante este trayecto fue la publicación de un artículo científico en la reconocida editorial Springer, el cual puede consultarse a través del siguiente enlace:
<a href="https://link.springer.com/chapter/10.1007/978-3-031-28032-0_28" target="_blank" rel="noopener noreferrer">
DSpace in Ecuador
</a></div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2008 - 2015</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">Academia Naval Alm.Jorge Cruz Polanco</div>
                                                    <div class="small text-muted"></div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Informática</div>
                                                    <div class="small text-muted"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div></div>Desde temprana edad, he demostrado una gran pasión por la tecnología, motivándome a estudiar Informática con el objetivo de adentrarme aún más en este apasionante mundo.

Mi interés por las ciencias computacionales se ha forjado a lo largo de los años, impulsándome a adquirir una sólida formación académica que me ha permitido desarrollar un profundo conocimiento y dominio de diversos lenguajes de programación, frameworks y herramientas tecnológicas</div>
                                    </div>
                                </div>
                            </div>
            </section>

            {/* Skills Section */}
            <section>
            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Conocimientos & Habilidades</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Analista IT</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Desarrollador Web</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Desarrollador Backend</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Seguridad Redes</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Suite Office 365</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">UI </div></div>
                                        </div>
                                    </div>
                                   
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Lenguajes</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML / CSS</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">PHP</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">React / Angular</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 mt-auto">
        {/* ... Footer content ... */}
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <script src="js/scripts.js"></script>
    </main>
  );
}

export default Resume;
