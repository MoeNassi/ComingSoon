import './../css/SoonAnimation.css'
import './../css/responsive.css' 

export default function SoonAnimation() {
    return (
        <div className="container">
            <video id="background-video" autoPlay playsInline loop muted poster="">
                <source src="/back.mp4" type="video/mp4"/>
            </video>
            <div className="logo">
                <img src="/logo.svg" alt="" />
            </div>
            <div className="text">
                <div className="centerText">
                    <div className="flextext">
                        <h1 id='firstText'>c</h1>
                        <h1 id='firstText'>o</h1>
                        <h1 id='firstText'>m</h1>
                        <h1 id='firstText'>i</h1>
                        <h1 id='firstText'>n</h1>
                        <h1 id='firstText'>g</h1>
                    </div>
                    <div className="flextext_">
                        <h1 id='secondText'>s</h1>
                        <h1 id='secondText'>o</h1>
                        <h1 id='secondText'>o</h1>
                        <h1 id='secondText'>n</h1>
                    </div>
                </div>
            </div>
            <div className="animation">
                <img src='/movement.gif' alt="loading ..." />
            </div>
        </div>
    )
}