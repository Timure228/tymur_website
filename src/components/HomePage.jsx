import {useRef, useState} from "react";
import AboutMePage from "./AboutMePage.jsx";

export default function HomePage() {
    const ref = useRef(null)
    const [style, setStyle] = useState({})

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

    return (
        <>
            <span className="main-title">Hello Portfolio!</span>
            <div className="diagonal-black"></div>
            <div
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
                <img
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
            <button className="animated-button">
                <span className="btn-text-one">Hover me</span>
                <span className="btn-text-two">Пошел Нахуй</span>
            </button>
            <section>
                <article>
                    <AboutMePage/>
                </article>
            </section>
        </>
    )
}
