import React from 'react'

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Junior-Trainee.</span>
            </div>
            <div className="about__box">
                <i className="bx bx-joystick about__icon"></i>
                <h3 className="about__title">Hobbies</h3>
                <span className="about__subtitle">Futbol.</span>
                <br/>
                <span className="about__subtitle">Cocktails.</span>
                <br/>
                <span className="about__subtitle">Videogames.</span>
            </div>
            <div className="about__box">
                <i className="bx bx-book-bookmark about__icon"></i>
                <h3 className="about__title">Studies</h3>
                <span className="about__subtitle">Degree in information systems.</span>
                <br/>
                <span className="about__subtitle">PC Repair and Assembly Technician.</span>
            </div>
            
        </div>
    )
}
