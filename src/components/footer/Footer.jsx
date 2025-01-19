import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className='footer__title'>Navarro</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#proyects" className="footer__link">Proyects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/sergioignaciok" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-instagram'></i>
                    </a>

                    <a href="https://github.com/SergiNavarr" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/sergio-ignacio-navarro-553b67180" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Sergio Ignacio Navarro. All rigths reserved.
                </span>
            </div>
        </footer>
    )
}
