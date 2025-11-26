import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-version-one zindex1 position-relative">
                <div className="container">
                    <div className="footer-topversion-one pt-20 pb-20">
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        MetaZ
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#2DBCEE" />
                                                    <stop offset={1} stopColor="#2DBCEE" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Est une entreprise de développement web et de marketing digital. Nous sommes spécialisés dans la création de sites web, de applications mobiles et de solutions IA.
                                    </p>
                                    <ul className="common-social d-flex align-items-center gap-2">
                                        <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <Link href="https://www.facebook.com/profile.php?id=100095004531899" target="_blank" className="d-center">
                                                <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                        <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6308_28">
                                                            <rect width={10} height={16} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="https://www.instagram.com/metaz_france" target="_blank" className="d-center">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 1h-7A3.5 3.5 0 0 0 1 4.5v7A3.5 3.5 0 0 0 4.5 15h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 11.5 1zm-3.5 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="white" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                            <Link href="http://www.linkedin.com/company/metazone-france/" target="_blank" className="d-center">
                                                <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Liens rapides
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#2DBCEE" />
                                                    <stop offset={1} stopColor="#2DBCEE" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/#agence" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                    À propos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Nos Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://blog.metaz.fr" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Nos Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Contactez-nous
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Nos Services
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#2DBCEE" />
                                                    <stop offset={1} stopColor="#2DBCEE" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/services/identite-de-marque" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Identité de marque
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/creation-de-site-web" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Création web/mobile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/marketing-reseaux-sociaux" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Marketing & RS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/solutions-ia" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Solutions IA
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Newsletter
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4306)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4306" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#2DBCEE" />
                                                    <stop offset={1} stopColor="#2DBCEE" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Inscrivez-vous à notre newsletter hebdomadaire pour recevoir les dernières mises à jour.
                                    </p>
                                    <form action="#" className="foote-formv1 d-flex align-items-center justify-content-between" data-aos="zoom-in-down" data-aos-duration={1200}>
                                        <input type="email" placeholder="Entrez votre adresse email" />
                                        <button type="submit" className="themebg d-center rounded-1">
                                            <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_6308_51)">
                                                    <path d="M24.177 2.42216C24.294 1.87753 23.7601 1.4183 23.2392 1.61705L0.645685 10.242C0.512852 10.2927 0.398516 10.3825 0.317763 10.4995C0.23701 10.6165 0.193635 10.7553 0.193361 10.8975C0.193087 11.0397 0.235926 11.1786 0.316228 11.2959C0.396529 11.4133 0.510518 11.5035 0.643154 11.5547L6.99011 14.006V21.7269C6.9901 21.8851 7.04344 22.0387 7.14153 22.1628C7.23961 22.287 7.3767 22.3744 7.53062 22.411C7.68454 22.4476 7.84631 22.4312 7.98976 22.3645C8.13322 22.2977 8.24997 22.1846 8.32116 22.0433L10.9462 16.8342L17.3522 21.5884C17.7419 21.8776 18.302 21.6936 18.4438 21.2289C24.425 1.61859 24.1664 2.47143 24.177 2.42216ZM18.5999 4.8933L7.59357 12.7316L2.85793 10.9027L18.5999 4.8933ZM8.39634 13.8863L17.9901 7.05398C9.7348 15.7628 10.166 15.3044 10.13 15.3529C10.0765 15.4248 10.223 15.1444 8.39634 18.7692V13.8863ZM17.3896 19.8649L11.7508 15.6802L21.9465 4.92423L17.3896 19.8649Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6308_51">
                                                        <rect width={24} height={24} fill="white" transform="translate(0.193359)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-6 py-xl-6 py-7 mb-xxl-10 mb-lg-9 mb-sm-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1600}>
                        <Link href="/" className="footer-logov1 m-sm-0 m-auto">
                            <img src="/assets/img/logo/logo.png" width={200} alt="img" />
                        </Link>
                        <Link href="/#mains" className="footer-topscroll d-center themebg">
                            <i className="fas fa-arrow-up" />
                        </Link>
                        <p className="pra-clr">
                            © Tous droits réservés {new Date().getFullYear()} par <Link href="/" className="theme-clr">MetaZ</Link>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
