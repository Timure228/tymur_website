import {useRef, useState} from "react";

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
                        display: "flex",
                        marginLeft: "500px"
                    }}
                    width={700}
                />
            </div>
            <button className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span className="text">More About Me</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </button>



            <span className="main-title">Hello Portfolio!</span>
        </>
    )
}