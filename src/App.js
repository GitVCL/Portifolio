import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaCogs, FaLaptopCode, FaGlobe } from 'react-icons/fa';



function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="App">
      {/* Fundo de vídeo da HERO */}
      <div className="video-bg-container">
        <video autoPlay muted loop className="video-bg">
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navbar que desaparece ao rolar */}
      <header className={`header ${showNavbar ? '' : 'hide'}`}>
        <div className="logo">VasconcelosDEV</div>
        <nav className="nav">
          <a href="#trabalhos1">Sobre</a>
          <a href="#trabalhos2">Portifolio</a>
          <a href="#trabalhos3">Contato</a>
        </nav>
      </header>

    

      <section className="hero" id="trabalhos1">
        <video autoPlay muted loop className="section-video">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="section-content">
          <h1>Olá, eu sou André Vasconcelos</h1>
        <p>Desenvolvedor Full Stack | React - Node - MongoDB | JavaScript</p>
        </div>
      </section>


                  <section className="hero" id="trabalhos2">
              <video autoPlay muted loop className="section-video">
                <source src="/assets/video2.mp4" type="video/mp4" />
              </video>

              <div className="portfolio-grid">
                <a
                  className="portfolio-card"
                  href="https://luiza-club.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaCogs size={40} style={{ marginBottom: '10px' }} />
                  <p>Sistemas</p>
                </a>

                <a
                  className="portfolio-card"
                  href="https://seulink-softwares.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLaptopCode size={40} style={{ marginBottom: '10px' }} />
                  <p>Softwares</p>
                </a>

                <a
                  className="portfolio-card"
                  href="https://seulink-sites.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe size={40} style={{ marginBottom: '10px' }} />
                  <p>Sites</p>
                </a>
              </div>
            </section>


        <section className="hero" id="trabalhos3">
        <video autoPlay muted loop className="section-video">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="section-content">
          <h1>ENTRE EM CONTATO</h1>

                  <div className="social-card-icons">
              <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
                      <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noreferrer">
                      <FaLinkedin size={32} />
                    </a>
                    <a href="mailto:seuemail@gmail.com" target="_blank" rel="noreferrer">
                      <FaEnvelope size={32} />
                    </a>
                    <a href="https://wa.me/55seunumero" target="_blank" rel="noreferrer">
                      <FaWhatsapp size={32} />
                    </a>
                    <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noreferrer">
                      <FaInstagram size={32} />
                    </a>
                  </div>


          <div className="qrcode-boxes">
            <div>
              <p>WhatsApp</p>
              <img src="/assets/qrcode-whatsapp.jpeg" alt="QR Code WhatsApp" />
            </div>
            <div>
              <p>Instagram</p>
              <img src="/assets/qrcode-instagram.jpeg" alt="QR Code Instagram" />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
