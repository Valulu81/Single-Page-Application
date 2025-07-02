import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/appConfig";
import { logo } from "./FormContent";
import Swal from "sweetalert2";
import {
    BrowserRouter,
    Link,
} from "react-router-dom";

export default function FormSesion() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        reset,
    } = useForm();

    const dominiosValidos = ["gmail.com", "outlook.com", "hotmail.com", "udb.edu.sv"];

    const onSubmit = async (data) => {
        const partes = data.email.split("@");
        if (partes.length !== 2) {
            setError("email", {
                type: "manual",
                message: "Formato de correo inválido.",
            });
            return;
        }

        const dominio = partes[1].toLowerCase();
        if (!dominiosValidos.includes(dominio)) {
            setError("email", {
                type: "manual",
                message: `Dominio no permitido. Solo se aceptan: ${dominiosValidos.join(", ")}`,
            });
            return;
        }

        try {
           
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

            localStorage.setItem("usuario", data.email);
            Swal.fire({
                title: "¡Inicio de sesión exitoso!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
            reset();

            setTimeout(() => {
                const modal = document.querySelector("#loginModal");
                modal?.classList.remove("show");
                document.body.classList.remove("modal-open");
                document.querySelector(".modal-backdrop")?.remove();
            }, 300);
        } catch (error) {
            console.log("Código de error:", error.code);
            if (error.code === "auth/user-not-found") {
                setError("email", {
                    type: "manual",
                    message: "Este correo no está registrado.",
                });
            } else if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/user-not-found"
            ) {
                
                setError("password", {
                    type: "manual",
                    message: "Correo o contraseña incorrectos.",
                });
            } else {
                console.error("Error al iniciar sesión:", error);
                Swal.fire({
                    title: "Oops...",
                    text: "Error inesperado. Intenta de nuevo.",
                    icon: "error",
                });
            }
        }
    };

    return (
        <div className="content2">
            <section className="caja text-center">
                <div className="Btn-inicio">
                    <img width="40px" src={logo} alt="LogoSpotify" />
                    <h2>Inicia sesión en Spotify y disfruta de la música</h2>
                    <button className="btn btn-danger rounded-pill px-3 fw-bold py-2 mb-2 mt-3">
                        Continuar con Google
                    </button>
                    <button className="btn btn-primary rounded-pill px-3 fw-bold py-2 my-2">
                        Continuar con Facebook
                    </button>
                    <button className="btn btn-light rounded-pill px-3 fw-bold py-2 my-2">
                        Continuar con Apple
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Dirección de Correo Electrónico</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            {...register("email", { required: "El correo es obligatorio" })}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password", { required: "La contraseña es obligatoria" })}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-success rounded-pill w-100">
                        Iniciar Sesión
                    </button>
                    <Link to={"/signin"} className="nav-link text-white ms-3 mt-3 ">No estas registrado? Registrate aqui!
                    </Link>
                </form>
            </section>
        </div>
    );
}
