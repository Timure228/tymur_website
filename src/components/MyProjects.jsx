export default function MyProjects() {
    return (
        <>
            <h1>My Projects</h1>

            <div className="project_cards">
                <div className="project_card">
                    <h2 className="project_title">Face Describer</h2>
                    <img alt="Project Image" className="project_image" src="src/assets/face_describer.png" width={320}
                         height={210}/>
                    <p className="project_description">
                        Problemstellung
                        Heutzutage sind die Menschen nicht bereit ihre
                        eigenen Gesichter an die anderen bewerten zu lassen.
                        Die Gründe sind: Schüchternheit, Verdammung und Angst.

                        Der Zweck
                        Die Sache ändert sich, wenn das eine Maschine macht.
                        Sie fragt nicht, warum der Benutzer sein Gesicht unter- oder
                        überbewertet und sie lacht nicht über den Benutzern.
                        Die Maschine interessiert sich nur für die Pixel
                        in der richtigen Reihenfolge und bewertet diese in
                        Zahlen.
                    </p>
                    <a href="https://github.com/Timure228/portfolio_face_describer/tree/master" className="github-btn"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20"
                             fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                            .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                            -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                            .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                            .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                            0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>

                <div className="project_card">
                    <h2 className="project_title">2D Spiel</h2>
                    <img alt="Project Image" className="project_image" src="src/assets/2d_spiel.png" width={320}
                         height={210}/>
                    <p className="project_description">
                        Dies ist ein 2D Spiel, das ich mithilfe nur von JS, CSS und HTML programmiert habe.
                        Von Null habe ich die Bewegungssystem, Mini Spiele, Dialogfenster und viel mehr nur mithilfe
                        von JS, HTML und CSS programmiert. 90% der Bilder wurden mit KI generiert.
                    </p>
                    <a href="https://github.com/Timure228/gta1942JS" className="github-btn"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20"
                             fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                            .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                            -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                            .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                            .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                            0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>

        </>
    )
}
