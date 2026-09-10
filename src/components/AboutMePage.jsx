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
            </div>
        </>
    )
}