import { canciones } from "./Songs.json"
import {artists} from "./artists.json"
export function FormSongs() {
    return (
        <>
            <section className="py-4">
                <h4 className="text-light mb-3">Canciones del momento</h4>
                <div
                    className="d-flex flex-wrap gap-3 justify-content-start"
                    style={{ rowGap: '1rem' }}
                >
                    {canciones.map((cancion, index) => (
                        <div
                            key={index}
                            className="text-center"
                            style={{ minWidth: '140px', flex: '1 0 140px' }}
                        >
                            <img
                                src={cancion.portada}
                                alt={cancion.nombre}
                                className="img-fluid rounded-3 mb-2"
                            />
                            <p className="text-light mb-0">{cancion.nombre}</p>
                            <small className="text-secondary">{cancion.Autores}</small>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-4">
                <h4 className="text-light mb-3">Artistas Populares</h4>
                <div
                    className="d-flex flex-wrap gap-3 justify-content-start"
                    style={{ rowGap: '1rem' }}
                >
                    {artists.map((artists, index) => (
                        <div
                            key={index}
                            className="text-center"
                            style={{ minWidth: '140px', flex: '1 0 140px' }}
                        >
                            <img
                                src={artists.imagen}
                                alt={artists.nombre}
                                className="img-fluid rounded-3 mb-2"
                            />
                            <p className="text-light mb-0">{artists.nombre}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}