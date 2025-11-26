'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Tilt } from 'react-tilt'
const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function Team1() {
    return (
        <>

            <section className="team-version01 pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                Notre équipe
                            </div>
                            <h2 className="stitle">
                            Découvrez notre <span className="fw-400">équipe</span>
                            </h2>
                        </div>
                         
                    </div>
                    <div className="row g-xxl-7 g-xl-5 g-4 justify-content-center">
                        <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-card01 tilt overflow-hidden">
                                <div className="thumb overflow-hidden w-100 position-relative mb-xxl-7 mb-xl-6 mb-5">
                                    <img src="/assets/img/team/team2.png" alt="img" className="w-100" />
                                    <ul className="common-social d-flex align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-1">
                                        <li>
                                            <Link href="https://www.linkedin.com/in/ilyassboukraa92/" target="_blank" className="text-center d-center">
                                            
                                                <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                         
                                    </ul>
                                </div>
                                <div className="content">
                                    <span className="bspan-clr position-relative mb-xxl-4 mb-xxl-3 mb-3">
                                        Directeur artistique
                                    </span>
                                    <h5 className="white-clr whitehover">
                                        <Link href="/team-details" className="white-clr whitehover">Ilyass. B</Link>
                                    </h5>
                                </div>
                            </div>
                        </Tilt>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-lg-18" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-card01 tilt overflow-hidden">
                                <div className="thumb overflow-hidden w-100 position-relative mb-xxl-7 mb-xl-6 mb-5">
                                    <img src="/assets/img/team/team3.png" alt="img" className="w-100" />
                                    <ul className="common-social d-flex align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-1">
                                        <li>
                                            <Link href="/#" className="text-center d-center">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                         
                                    </ul>
                                </div>
                                <div className="content">
                                    <span className="bspan-clr position-relative mb-xxl-4 mb-xxl-3 mb-3">
                                    Project Manager
                                    </span>
                                    <h5 className="white-clr">
                                        <Link href="/team-details" className="white-clr whitehover">Diallo. A</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <Tilt options={toltOptions} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-card01 tilt overflow-hidden">
                                <div className="thumb overflow-hidden w-100 position-relative mb-xxl-7 mb-xl-6 mb-5">
                                    <img src="/assets/img/team/anass.jpg" alt="img" className="w-100" />
                                    <ul className="common-social d-flex align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-1">
                                        <li>
                                            <Link href="https://www.linkedin.com/in/anassboukraa" target="_blank" className="text-center d-center">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                         
                                    </ul>
                                </div>
                                <div className="content">
                                    <span className="bspan-clr position-relative mb-xxl-4 mb-xxl-3 mb-3">
                                        Full Stack Developer
                                    </span>
                                    <h5 className="white-clr">
                                        <Link href="/team-details" className="white-clr whitehover">Anass. B</Link>
                                    </h5>
                                </div>
                            </div>
                        </Tilt>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-lg-18" data-aos="fadein" data-aos-duration={1400}>
                            <div className="team-card01 tilt overflow-hidden">
                                <div className="thumb overflow-hidden w-100 position-relative mb-xxl-7 mb-xl-6 mb-5">
                                    <img src="/assets/img/team/team1.png" alt="img" className="w-100" />
                                    <ul className="common-social d-flex align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-1">
                                        <li>
                                            <Link href="#" className="text-center d-center">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                         
                                    </ul>
                                </div>
                                <div className="content">
                                    <span className="bspan-clr position-relative mb-xxl-4 mb-xxl-3 mb-3">
                                    Traffic Manager
                                    </span>
                                    <h5 className="white-clr">
                                        <Link href="/team-details" className="white-clr whitehover">Phillipe. D</Link>
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
