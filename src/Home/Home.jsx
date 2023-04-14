import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/barberia-jp.appspot.com/o/logo-barberia.png?alt=media&token=10422a2d-a06e-4789-bf30-694c79f42878" alt="foto" className="img-fluid w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                            <Agenda/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}