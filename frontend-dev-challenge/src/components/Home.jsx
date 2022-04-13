import { Fragment } from "react"
import { Header } from "./header/Header"

export function Home() {
    return (
        <Fragment>
            <Header />
            <h1>Hola, aca va a estar el home de la pagina</h1>
        </Fragment>
    )
}