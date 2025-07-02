import { FormSongs } from "./FormSongs"

export const logo = "https://res.cloudinary.com/dhotqeo6c/image/upload/v1750634300/Spotify-Logo-PNG-Images_ptn8gj.png"

export function FormContent() {
    return (
        <>
                <div className="layout">
                <aside className="lateral p-2">
                    <a href="" className=" sidebar-link text-decoration-none ">Tu biblioteca</a>
                    <a href="" className=" sidebar-link  text-decoration-none "><i className="fa-solid fa-plus icon-plus"></i><br /></a>
                    <div className="card text-bg-dark rounded-4">

                    <div className="card-body ">
                        <h5 className="card-title ">Crea tu primera lista</h5>
                        <p className="card-text">Es muy facil, y te hecharemos la mano.</p>
                        <a href="#" className="btn btn-light rounded-pill ">Crear lista</a>
                    </div>
                </div>
                <div className="card text-bg-dark rounded-4">

                    <div className="card-body">
                        <h5 className="card-title">Encuentra pódcasts que quieras seguir</h5>
                        <p className="card-text">Te avisaremos cuando salgan nuevos episodios</p>
                        <a href="#" className="btn btn-light  rounded-pill ">Explorar podcasts</a>
                    </div>
                </div>
            </aside>
            <main className="content">
                <FormSongs></FormSongs>
            </main >
            </div>           
        </>


    )


}