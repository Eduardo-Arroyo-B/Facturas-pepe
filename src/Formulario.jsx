import './Form.css'
import { useState } from "react";
import InvoicePDF from "./Factura.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";

const formulario = () => {

    const [showDownload, setShowDownload] = useState(false);
    const [formData, setFormData] = useState({
        Invoice: "",
        Name: "",
        Address: "",
        City: "",
        ClientName: "",
        Date: "",
        ContactInfo: "",
        Email: "",
        Row1: "",
        Row2: "",
        Row3: "",
        Row4: "",
        Row5: "",
        Row6: "",
        Row7: "",
        Row8: "",
        Row9: "",
        Row10: "",
        Deposit: "",
        AdditionalChanges: "",
        Total: ""
    })

    console.log(formData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()

        setShowDownload(true)
    }

    return(
        <section className="centrar">
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Factura</p>
                <p className="message">Ingrese los datos para crear su factura</p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input" name="Invoice" onChange={handleChange} />
                        <span>Invoice</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className="input" name="Name" onChange={handleChange} />
                        <span>Name</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="text" className="input" name="Address" onChange={handleChange} />
                    <span>Address</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className="input" name="City" onChange={handleChange} />
                    <span>City</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="ClientName" onChange={handleChange} />
                    <span>Client name</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Date" onChange={handleChange} />
                    <span>Date</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="ContactInfo" onChange={handleChange} />
                    <span>Contact Info</span>
                </label>
                <label>
                    <input required="" placeholder="" type="email" className="input" name="Email" onChange={handleChange} />
                    <span>Email</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row1" onChange={handleChange} />
                    <span>Row 1</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row2" onChange={handleChange}/>
                    <span>Row 2</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row3" onChange={handleChange}/>
                    <span>Row 3</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row4" onChange={handleChange}/>
                    <span>Row 4</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row5" onChange={handleChange}/>
                    <span>Row 5</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row6" onChange={handleChange}/>
                    <span>Row 6</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row7" onChange={handleChange}/>
                    <span>Row 7</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row8" onChange={handleChange}/>
                    <span>Row 8</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row9" onChange={handleChange}/>
                    <span>Row 9</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Row10" onChange={handleChange}/>
                    <span>Row 10</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Deposit" onChange={handleChange} />
                    <span>1st Deposit</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="AdditionalChanges" onChange={handleChange} />
                    <span>Additional changes</span>
                </label>
                <label>
                    <input required="" placeholder="" type="text" className="input" name="Total" onChange={handleChange} />
                    <span>Total</span>
                </label>
                <button className="submit">Subir Datos</button>
            </form>

            {/* Mostrar el botón de descarga solo si el usuario ha enviado el formulario */}
            <div style={{ width: "100%", textAlign: "center", marginTop: "20px",  }}>
            {showDownload && (
                <PDFDownloadLink
                    document={<InvoicePDF data={formData} />}
                    fileName="Factura.pdf"
                >
                    {({ loading }) => (
                        <button className="submit">
                            {loading ? "Generando PDF..." : "Descargar PDF"}
                        </button>
                    )}
                </PDFDownloadLink>
            )}
            </div>
        </section>
    )
}

export default formulario