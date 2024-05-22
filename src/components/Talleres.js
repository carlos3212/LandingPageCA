import React from 'react';

function Talleres() {
  return (
    <main className="flex-shrink-0">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        {/* ... Navbar content ... */}
      </nav>

      {/* Talleres Section */}
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">  Talleres</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Project Card 1 */}
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Don Web</h2>
                      <p><a href="https://drive.google.com/drive/folders/1fvTCzSOHWf2Se-xzrGz5-Ce-pD6c1BOH?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Aquí encontraras los certificados
</a></p>
                    </div>
                    {/*<img className="img-fluid" src="data:image/png;base64,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" alt="..." />*/}
                  </div>
                </div>
              </div>

              {/* Project Card 2 
              <div className="card overflow-hidden shadow rounded-4 border-0">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">GitHub</h2>
                      <p><a href="https://github.com/carlos3212" target="_blank" rel="noopener noreferrer">
Carlos Andrade GitHub
</a></p>
                    </div>
                    <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="..." />
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">  Cursos</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Project Card 1 */}
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Udemy</h2>
                      <p><a href="https://drive.google.com/drive/folders/1jC5Rud_lU51Qs-dE8J5L0BWTASs6htuR?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Aquí encontraras los certificados
</a></p>
                    </div>
                    {/*<img className="img-fluid" src="data:image/png;base64,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" alt="..." /> */}
                  </div>
                </div>
              </div>

              {/* Project Card 2 
              <div className="card overflow-hidden shadow rounded-4 border-0">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">GitHub</h2>
                      <p><a href="https://github.com/carlos3212" target="_blank" rel="noopener noreferrer">
Carlos Andrade GitHub
</a></p>
                    </div>
                    <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="..." />
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
      {/* Call to action section */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4"></h2>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 mt-auto">
        {/* ... Footer content ... */}
      </footer>
    </main>
  );
}

export default Talleres;
