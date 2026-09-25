import React from 'react';
import {useRef, useState} from "react";
import AboutMePage from "./AboutMePage.jsx";
import MyProjects from "./MyProjects.jsx";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const ref = useRef(null)
    const [style, setStyle] = useState({})
    const { t, i18n } = useTranslation();

    const handleMouseMove = (e) => {
        const el = ref.current

        if (!el) return;

        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        const maxRotate = 15
        const rotateY = x * maxRotate
        const rotateX = -y * maxRotate

        setStyle({
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
        })
    }
    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        });
    };


    const languages = [
        { value: 'en', text: 'English' },
        { value: 'de', text: 'Deutsch' },
    ];

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <>
            <div className="lang-switch">
                <button
                    type="button"
                    className={i18n.language === 'en' ? 'active' : ''}
                    onClick={() => i18n.changeLanguage('en')}
                >
                    EN
                </button>
                <span>|</span>
                <button
                    type="button"
                    className={i18n.language === 'de' ? 'active' : ''}
                    onClick={() => i18n.changeLanguage('de')}
                >
                    DE
                </button>
            </div>

            <span className="main-title">{t("title")}</span>
            <div className="diagonal-black"></div>
            <div
                className="img-container"
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    display: "inline-block",
                    transition: "transform 0.15s ease-out",
                    willChange: "transform",
                    ...style,
                }}
            >
                <img alt="My Image"
                     src="src/assets/me.png"
                     style={{
                         display: "block",
                         borderRadius: "12px",
                         marginLeft: "500px"
                     }}
                     draggable={false}
                     width={700}
                />
            </div>
            <a style={{position: "absolute", left: "10%", top: "45%"}} href="#about-me-page">
                <button className="button-78" role="button">{t("about_me_button")}</button>
            </a>
            <section id="about-me-page">
                <article>
                    <AboutMePage/>
                </article>
            </section>
            <section id="my-projects-page">
                <article>
                    <MyProjects/>
                </article>
            </section>
        </>
    )
}
