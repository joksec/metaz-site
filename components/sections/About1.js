import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function About1() {
    return (
        <>

            <section className="about-product pt-space pb-20" id="agence">
                <div className="container">
                    <div className="row g-xxl-7 g-lg-5 g-7">
                        <div className="col-lg-6">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img src="/assets/img/about/about-v02.png" alt="img" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content about-content-v02 ps-xxl-10">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                        Metaz en quelques mots
                                    </div>
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={1600}>
                                        Votre partenaire
                                        {' '}
                                        <span className="regular">
                                             créatif digital
                                        </span>
                                    </h2>
                                    <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-10 gap-7 gap-md-5 gap-4 mb-xxl-11 mb-xl-10 mb-lg-9 mb-md-7 mb-6" data-aos="fade-up" data-aos-duration={1900}>
                                         
                                        <p>
                                            Chez Metaz, nous fusionnons stratégie, design et technologie pour créer des expériences digitales qui transforment votre marque et engageent votre audience. Notre approche sur-mesure et notre expertise pluridisciplinaire font de nous le partenaire idéal pour vos projets ambitieux.
                                        </p>
                                    </div>
                                    <div className="about-sponsor">
                                        <div className="brand d-flex gap-4 align-items-center mb-xxl-8 mb-xl-7 mb-lg-5 mb-4">
                                            <h6>
                                                15 + Marques nous font confiance
                                            </h6>
                                            <span className="brand-border d-lg-block d-none">
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
