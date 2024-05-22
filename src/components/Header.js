import React from 'react';
import profileImage from '../assets/profile.png';




function Header() {
  return (
    <header className="py-5">
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="text-uppercase">ANALISTA IT &middot; Desarollador</div>
              </div>
              <div className="fs-4 fw-light text-muted">La Ingeniería al servicio de tus necesidades</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">Transforma tus Ideas en Realidad </span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/talleres">
                  Talleres & Cursos
                </a>
                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="/resume">
                  Hoja de Vida
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
              {/*<img className="profile-img" src={profileImage} alt="..." />*/}

                <div className="dots-1">{/* SVG Dots */}</div>
                <div className="dots-2">{/* SVG Dots */}</div>
                <div className="dots-3">{/* SVG Dots */}</div>
                <div className="dots-4">{/* SVG Dots */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
