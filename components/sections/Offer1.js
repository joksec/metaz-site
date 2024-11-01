
import Link from "next/link"

export default function Offer1() {
    return (
        <>

            <section className="offer-sectionv02 pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-3 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                                 Boostez votre impact en ligne
                            </div>
                            <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                                Nos <span className="fw-400">Services experts</span>
                                
                            </h2>
                        </div>
                        
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer1.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Identité de marque
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Création do logo, charte graphique, naming, branding complet pour révéler l'ADN de votre marque.
                                    </p>
                                    <Link href="/services/identite-de-marque" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={700}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer2.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        02
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Création de site web
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Sites vitrines, e-commerce ou plateformes complexes, design sur mesure, performance SEO, responsive & CMS.
                                    </p>
                                    <Link href="/services/creation-de-site-web" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer3.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        03
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Applications mobiles
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Conception d'apps iOS/Android hybrides (React Native, Flutter), UI intuitive & performance optimisée.
                                    </p>
                                    <Link href="/services/applications-mobiles" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer3.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        04
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Marketing & réseaux sociaux
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        De la stratégie à la création de contenu et à la publicité Meta/Google, tout est pensé pour convertir.
                                    </p>
                                    <Link href="/services/marketing-reseaux-sociaux" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer5.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        05
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Solutions IA
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Intégrez l'intelligence artificielle au cœur de votre stratégie business pour automatiser, anticiper et décider avec une précision inégalée.
                                    </p>
                                    <Link href="/services/solutions-ia" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={900}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer6.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        06
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        SEO/GEO
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Conception d'apps iOS/Android hybrides (React Native, Flutter), UI intuitive & performance optimisée.
                                    </p>
                                    <Link href="/services/seo-geo" className="white-clr d-flex gap-4">
                                        Explorez
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
