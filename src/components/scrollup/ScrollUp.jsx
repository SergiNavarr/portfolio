import React, { useEffect } from 'react'
import './scrollup.css'

export const ScrollUp = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");

            // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <a
            onClick={scrollToTop}
            className="scrollup"
            aria-label="Scroll to top"
        >
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}
