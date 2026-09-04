export default function AboutMePage() {
    return (
        <>
            <h1>About me</h1>
            <p id="p_aboutme"></p>
            <img style={{position: "absolute", right: "100px", rotate: "205deg"}}
                 id="foot_img" src="src/assets/meine_fuesse.png" width={250}/>
            <p style={{position: "absolute", right: "180px", top: "1040px", rotate: "10deg", fontSize: "1.1em"}}>
                It's ok my feet are here ;)</p>
            <p>
                Its a really good definition of me
            </p>
        </>
    )
}