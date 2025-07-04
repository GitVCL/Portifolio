import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaCogs, FaLaptopCode, FaGlobe } from 'react-icons/fa';



function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);


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

          {/* Botão hambúrguer para mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Menu de navegação */}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#trabalhos1" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#trabalhos2" onClick={() => setMenuOpen(false)}>Portifolio</a>
            <a href="#trabalhos3" onClick={() => setMenuOpen(false)}>Contato</a>
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
                  href="https://seulink-softwares.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaCogs size={20} style={{ marginBottom: '10px' }} />
                  <p>Sistemas</p>
                </a>

                <a
                  className="portfolio-card"
                  href="https://seulink-softwares.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLaptopCode size={20} style={{ marginBottom: '10px' }} />
                  <p>Softwares</p>
                </a>

                <a
                  className="portfolio-card"
                  href="https://seulink-sites.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe size={20} style={{ marginBottom: '10px' }} />
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
              <a href="https://github.com/GitVCL" target="_blank" rel="noreferrer">
                      <FaGithub size={32} />
                    </a>
                   <a href="https://www.linkedin.com/in/andré-vasconcelos-17a21030b" target="_blank" rel="noreferrer">
                        <FaLinkedin size={32} />
                      </a>

                      <a href="mailto:chat.vasconcelos@gmail.com" target="_blank" rel="noreferrer">
                        <FaEnvelope size={32} />
                      </a>

                    <a href="https://wa.me/5581981192030" target="_blank" rel="noreferrer">
                      <FaWhatsapp size={32} />
                    </a>
                    <a href="https://www.instagram.com/vasconcelosdev_/profilecard/?igsh=ajBrcm5hczd4bzRlseuusuario" target="_blank" rel="noreferrer">
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
