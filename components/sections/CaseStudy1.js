
import Link from "next/link"

export default function CaseStudy1() {
    return (
        <>

            <section className="case-study-vsesion01 bg2-clr pb-space">
                <div className="container">
                    <div className="row g-xxl-7 g-xl-5 g-4">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400}>
                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/portfolio/p1.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/services/applications-mobiles" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                            App mobile
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                        Application mobile d’IA culinaire personnalisée
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/portfolio/p2.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/services/creation-de-site-web" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                            Création de site web
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                        Site web de médecine esthétique à L’Isle-Adam
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/portfolio/p3.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/services/identite-de-marque" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                            Identité de marque
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                        Identité visuelle pour une marque de robes de mariée
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
