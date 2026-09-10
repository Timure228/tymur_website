export default function AboutMePage() {
    return (
        <>
            <h1>About me</h1>
            <p id="p_aboutme"></p>
            <img style={{position: "absolute", right: "100px", rotate: "205deg"}}
                 id="foot_img" src="src/assets/meine_fuesse.png" width={250}/>
            <p style={{position: "absolute", right: "180px", top: "1040px", rotate: "10deg", fontSize: "1.1em"}}>
                It's ok my feet are here ;)</p>

            <div>
                <p style={{width: "900px", fontFamily: "MonsterratBold", fontSize: "1.2em"}}>
                    My Name is Tymur and Im currently studying Informatics at IMS Kantonschule Büelrain.
                    I've already over 20 Projects built on GitHub, which you can visit under
                    <a href="https://github.com/Timure228"> this link</a>.
                </p>
                <h1>My Background</h1>
                <p style={{width: "900px", fontFamily: "MonsterratBold", fontSize: "1.2em"}}>
                    My roots begin in Ukraine.
                    I have already been living in Switzerland for 5 years and I've learnt quite a lot of things
                    like german, programming and found new friends.
                </p>
                <img src="src/assets/ukraine.png" width={128}/>
                <h1>Tech Stack</h1>

                <div className="stack-group">
                    <h3>AI / Data Science</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                            alt="Python"/>
                        <img
                            src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white"
                            alt="NumPy"/>
                        <img
                            src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"
                            alt="Pandas"/>
                        <img
                            src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
                            alt="PyTorch"/>
                        <img
                            src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                            alt="TensorFlow"/>
                        <img
                            src="https://img.shields.io/badge/Jupyter_Notebook-F37626?style=for-the-badge&logo=jupyter&logoColor=white"
                            alt="Jupyter Notebook"/>
                        <img
                            src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white"
                            alt="Matplotlib"/>
                        <img
                            src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"
                            alt="scikit-learn"/>
                        <img
                            src="https://img.shields.io/badge/Machine%20Learning-102230?style=for-the-badge&logo=googlecloud&logoColor=white"
                            alt="Machine Learning"/>
                        <img
                            src="https://img.shields.io/badge/ComfyUI-1E1E1E?style=for-the-badge&logo=github&logoColor=white"
                            alt="ComfyUI"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Backend / Runtime</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                            alt="Java"/>
                        <img
                            src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                            alt="Node.js"/>
                        <img
                            src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                            alt="Spring"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Frontend</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                            alt="JavaScript"/>
                        <img
                            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                            alt="React"/>
                        <img
                            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                            alt="HTML5"/>
                        <img
                            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                            alt="CSS3"/>
                        <img
                            src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E"
                            alt="Vite"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>DevOps / Cloud</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                            alt="Docker"/>
                        <img
                            src="https://img.shields.io/badge/Docker_Hub-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                            alt="Docker Hub"/>
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                             alt="Git"/>
                        <img
                            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                            alt="GitHub"/>
                        <img
                            src="https://img.shields.io/badge/OpenShift-EE0000?style=for-the-badge&logo=redhatopenshift&logoColor=white"
                            alt="OpenShift"/>
                        <img
                            src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"
                            alt="AWS"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Databases</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
                            alt="MariaDB"/>
                        <img
                            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                            alt="PostgreSQL"/>
                        <img
                            src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                            alt="MySQL"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Tools / Productivity</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                            alt="Postman"/>
                        <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
                             alt="npm"/>
                        <img
                            src="https://img.shields.io/badge/WireGuard-88171A?style=for-the-badge&logo=wireguard&logoColor=white"
                            alt="WireGuard"/>
                        <img
                            src="https://img.shields.io/badge/Quarto-39729E?style=for-the-badge&logo=quarto&logoColor=white"
                            alt="Quarto"/>
                        <img
                            src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white"
                            alt="Shell Script"/>
                        <img
                            src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
                            alt="Markdown"/>
                        <img
                            src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"
                            alt="VS Code"/>
                        <img
                            src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white"
                            alt="IntelliJ IDEA"/>
                    </div>
                </div>

                <div className="stack-group">
                    <h3>Design / Project / 3D</h3>
                    <div className="badge-group">
                        <img
                            src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                            alt="Figma"/>
                        <img
                            src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"
                            alt="Trello"/>
                        <img
                            src="https://img.shields.io/badge/Scrum-6DB33F?style=for-the-badge&logo=agile&logoColor=white"
                            alt="Scrum"/>
                        <img
                            src="https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white"
                            alt="Blender"/>
                        <img
                            src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white"
                            alt="Unity"/>
                    </div>
                </div>


            </div>
        </>
    )
}