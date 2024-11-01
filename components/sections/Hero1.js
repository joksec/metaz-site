
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero1() {
    return (
        <>
            
            <section className="hero-section-version1 position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v1-content position-relative">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        Stratégie. Créativité.
                                    </span>
                                    <span>
                                        <span className="text-italic me-3" data-aos="zoom-in-right" data-aos-duration={2100}>
                                            IA. 
                                        </span>
                                        <span className="designers" data-text="CONNECTÉE" data-aos="zoom-in" data-aos-duration={2000}>Connectée</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1}/>
                            </div>
                            <div className="hero-sponsor">
                                
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text">
                                       ROI x3 en moyenne pour nos clients
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
                <div className="hero-expriencebox d-flex align-items-center">
                    <div className="expri-thumb">
                        <img src="/assets/img/banner/bn-expri.png" alt="img" />
                    </div>
                    <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6">
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                +10
                            </h6>
                            <span className="yer spantext-clr">
                                secteurs d’activité accompagnés
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                100%
                            </h6>
                            <span className="yer spantext-clr">
                                orientés résultats
                            </span>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="hero-arrow" />
            </section>
        </>
    )
}
