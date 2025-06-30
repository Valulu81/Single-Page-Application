import { FormContent, logo } from "./FormContent";
import FormRegistro from "./FormRegister";
import FormSesion from "./FormSesion";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
export function FormNavbar() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <div className="container-fluid  saz<">
                        <a className="navbar-brand px-0" href="#">
                            <img width="40px" src={logo} alt="LogoSpotify" />
                        </a>
                        <Link to={"/"}>
                            <a className="btn btn-dark rounded-pill" aria-current="page" href="#">
                                <i className="fa-solid fa-house"></i>
                            </a>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-1">

                                <form className="d-flex col-10 " role="search">
                                    <input className="form-control me-2 w-100 rounded-5 ms-3" type="search" placeholder="¿Qué quieres reproducir?" aria-label="Search" style={{ color: 'white' }} />
                                    <button className="btn text-light" type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-white ms-3" href="#">Premium</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-white ms-3" href="#">Ayuda</a>
                                </li>
                                <li className="nav-item pt-1">
                                    <a className="nav-link text-white ms-3" href="#">Descargar</a>
                                </li>
                            </ul>

                            {/* Sección alineada a la derecha */}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <div className="vr mx-3 d-none d-lg-block text-white"></div>
                                <li className="nav-item ">
                                    <Link to={"/signin"}>
                                        <a className="nav-link text-white ms-3" href="#">Regístrate</a>
                                    </Link>
                                </li>
                                <li className="nav-item pt-1  ms-2 ">
                                    <Link to={"/login"}>
                                        <button className="btn btn-light rounded-pill px-3 fw-bold"> Iniciar sesión </button>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                {/**Rutas de destino */}
                <Routes>
                    <Route path="/" element={<FormContent />} />
                    <Route path="/login" element={<FormSesion />} />
                    <Route path="/signin" element={<FormRegistro />} />
                </Routes>

            </BrowserRouter>
        </>
    );
}
