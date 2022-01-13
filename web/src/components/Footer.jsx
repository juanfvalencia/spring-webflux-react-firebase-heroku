import React from "react";

const Footer = () => {

    return (
        <footer className="bg-dark text-center bg-gradient text-white fixed-bottom mt-3">
            <div className="container p-2 pb-0">
                <section className="mb-2">
                    <a className="btn btn m-2" role="button" target="_blank" style={{color: "white"}}>
                        Esta plataforma se centra en el registro de pregunta y respuestas
                    </a>
                </section>
            </div>
            <div className="text-center p-2 mb-2" style={{color: "white"}}>
                © 2022 Copyright: Juan Felipe Valencia.
            </div>
        </footer>
    )
}

export default Footer;