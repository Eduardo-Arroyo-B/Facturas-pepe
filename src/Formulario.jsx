import './Form.css'

const formulario = () => {
    return(
        <section className="centrar">
            <form className="form">
                <p className="title">Factura</p>
                <p className="message">Ingrese los datos para crear su factura</p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input"/>
                            <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className="input"/>
                            <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="email" className="input"/>
                        <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" className="input"/>
                        <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" className="input"/>
                        <span>Confirm password</span>
                </label>
                <button className="submit">Descargar Factura</button>
            </form>
        </section>
    )
}

export default formulario