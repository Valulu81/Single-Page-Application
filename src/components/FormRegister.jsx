import { useForm } from "react-hook-form";
import { logo } from "./FormContent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, dbStore } from "../firebase/appConfig";
import Swal from 'sweetalert2';


export default function FormRegistro() {
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
        const dominio = partes[1]?.toLowerCase();

        if (!dominio || !dominiosValidos.includes(dominio)) {
            setError("email", {
                type: "manual",
                message: `Dominio no permitido. Solo se aceptan: ${dominiosValidos.join(", ")}`,
            });
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            // Guardar datos en Firestore
            await setDoc(doc(dbStore, "usuarios", user.uid), {
                email: data.email,
                creadoEn: new Date(),
            });

            Swal.fire({
                title: "Registro Exitoso!!",   
                icon: "success",          
            });
            reset();

            // Si usás rutas protegidas, aquí podrías redirigir
            // navigate("/home");

        } catch (error) {
            console.error("Error en el registro:", error);
            setError("password", {
                type: "manual",
                message: error.message,
            });
        }
    };


    return (
        <div className="content2">

            <section className="caja text-center">
                <div className="Btn-inicio ">
                    <img width="40px" src={logo} alt="LogoSpotify" />
                    <h2>Regístrate para empezar a escuchar contenido</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label"> Direccion de Correo electrónico</label>
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
                        Registrarme
                    </button>
                    <div className="Btn-inicio ">
                        <p className="mt-3">o tambien puedes:</p>
                        <button className="btn btn-danger rounded-pill px-3 fw-bold py-2 my-2" >Continuar con Google</button>
                        <button className="btn btn-primary rounded-pill px-3 fw-bold py-2 my-2">Continuar con Facebook</button>
                        <button className="btn btn-light rounded-pill px-3 fw-bold py-2 my-2">Continuar con Apple</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
