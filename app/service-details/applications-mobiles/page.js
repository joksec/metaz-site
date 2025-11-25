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
export default function ServiceApps() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Applications mobiles">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                             
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                Conception et développement d’apps iOS/Android et cross‑platform orientées expérience et performance.
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/service-details/applications-mobiles" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    iOS
                                </Link>
                                <Link href="/service-details/applications-mobiles" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Android
                                </Link>
                                <Link href="/service-details/applications-mobiles" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Cross‑platform
                                </Link>
                                <Link href="/service-details/applications-mobiles" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Publication stores
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Présentation du service
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                Nous créons des applications performantes, robustes et scalables avec des stacks modernes et des UI fluides.
                                </p>
                                <p className="pra-clr">
                                Nous prenons en charge le design, le développement, l’API, les notifications, l’authentification et la publication.
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
                                                UX/UI mobile soignée
                                            </li>
                                            <li>
                                                Performance native
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                Architecture scalable
                                            </li>
                                            <li>
                                                Maintenance & évolutions
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Satisfaction UX
                                                </span>
                                                <span className="cons">92%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Stabilité & crash‑free
                                                </span>
                                                <span className="cons">98%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/service/app-1.jpeg" alt="img" className="w-100" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/service/app-2.jpeg" alt="img" className="w-100" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/service/app-3.jpeg" alt="img" className="w-100" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                    <i className="fas fa-chevron-left" />
                                </button>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                        Précédent
                                </span>
                            </div>
                            <h3 className="project-storke">
                                Applications mobiles
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    Suivant
                                </span>
                                <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                    <i className="fas fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

