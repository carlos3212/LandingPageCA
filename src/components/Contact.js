import React from 'react';
import whatsappImage from '../assets/whatsapp.png';

function Contact() {
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

      {/* Page content */}
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
              <h1 className="fw-bolder">Correo</h1>
              <p className="lead fw-normal text-muted mb-0"> charly.2701997@gmail.com</p>
            </div>
           
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-whatsapp"></i></div>
              <h1 className="fw-bolder">Whatsapp</h1>
              <p className="lead fw-normal text-muted mb-0"><a href="https://wa.me/+593962051145" target="_blank" rel="noopener noreferrer">
Conactame!

</a></p><img className="profile-img" src={whatsappImage} alt="..." />
            </div>
           
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

export default Contact;
