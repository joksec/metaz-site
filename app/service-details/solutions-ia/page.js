'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function ServiceIA() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Solutions IA">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                        <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src="/assets/img/service/ia.png" alt="img" className="w-100" />
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                Automatisation, chatbots et analytics propulsés par l’IA pour accélérer votre croissance.
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/service-details/solutions-ia" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Chatbots
                                </Link>
                                <Link href="/service-details/solutions-ia" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Automatisation
                                </Link>
                                <Link href="/service-details/solutions-ia" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Analyse de données
                                </Link>
                                <Link href="/service-details/solutions-ia" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Intégrations
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Présentation du service
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                Nous intégrons des modèles IA et des workflows d’automatisation adaptés à vos processus métiers.
                                </p>
                                <p className="pra-clr">
                                Du prototypage à la production, nous garantissons sécurité, conformité et ROI mesurable de vos projets IA.
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    Avantages de notre service
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                Gains de productivité
                                            </li>
                                            <li>
                                                Réduction des coûts
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                Meilleure prise de décision
                                            </li>
                                            <li>
                                                Intégration à vos outils
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Automatisation des tâches
                                                </span>
                                                <span className="cons">93%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Qualité des décisions
                                                </span>
                                                <span className="cons">89%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </section>

            </Layout>
        </>
    )
}

