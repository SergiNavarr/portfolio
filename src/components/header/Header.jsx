import React, { useEffect, useState } from 'react'
import "./header.css"

export const Header = () => {

    /*=========== Change Background =========*/
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");

        if(this.scrollY>=200) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");

    });

    /*======= Toggle menu =======*/
    const[Toggle, showMenu] = useState(false);
    
    /*======== Active Link ========*/
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(()=>{
        //select all section elements that have an id
        const sections = document.querySelectorAll("section[id]");

        const handleScroll = ()=>{
            const scrollY = window.scrollY;

            sections.forEach((current)=>{
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    setActiveNav(`#${sectionId}`);
                }

            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);



    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Sergio</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-home nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#projects" onClick={()=> setActiveNav("#projects")} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-monitor nav__icon"></i>Proyects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                        
                    </ul>
                    <i className='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)}></i>
                </div>

                <div className="uil uil-list-ul nav__toggle" onClick={()=>showMenu(!Toggle)}></div>

            </nav>
        </header>
    )
}
