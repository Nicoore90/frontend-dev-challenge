import { Fragment } from "react"
import { Header } from "./header/Header"
import adv from "./assets/adv.png"
import image from "./assets/hero.png"
import { Articles } from "./articles/articles"
import { Faq } from "./faq/faq"
import testimony from "./assets/testimonio-1.png"

export function Home() {
    return (
        <Fragment>
            <Header />
            <img className="adv" src={adv} alt="" />
            <img className="hero" src={image} alt="" />
            <Articles />
            <Faq />
            <img src={testimony} alt="" />
        </Fragment>
    )
}