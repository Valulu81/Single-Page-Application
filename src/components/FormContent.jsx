import { FormSongs } from "./FormSongs"

export const logo = "https://res.cloudinary.com/dhotqeo6c/image/upload/v1750634300/Spotify-Logo-PNG-Images_ptn8gj.png"

export function FormContent() {
    return (
        <>
            <body>
                <div class="layout">
                <aside class="lateral p-2">


                    <a href="" class=" sidebar-link text-decoration-none ">Tu biblioteca</a>
                    <a href="" class=" sidebar-link  text-decoration-none "><i class="fa-solid fa-plus icon-plus"></i><br /></a>
                    <div class="card text-bg-dark rounded-4">

                    <div class="card-body ">
                        <h5 class="card-title ">Crea tu primera lista</h5>
                        <p class="card-text">Es muy facil, y te hecharemos la mano.</p>
                        <a href="#" class="btn btn-light rounded-pill ">Crear lista</a>
                    </div>
                </div>
                <div class="card text-bg-dark rounded-4">

                    <div class="card-body">
                        <h5 class="card-title">Encuentra pódcasts que quieras seguir</h5>
                        <p class="card-text">Te avisaremos cuando salgan nuevos episodios</p>
                        <a href="#" class="btn btn-light  rounded-pill ">Explorar podcasts</a>
                    </div>
                </div>
            </aside>
            <main class="content">
                <FormSongs></FormSongs>
            </main >
            </div>
            </body>

            
        </>


    )


}