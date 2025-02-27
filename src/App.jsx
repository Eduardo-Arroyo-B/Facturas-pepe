import ReactDOM from "react-dom";
import InvoicePDF from "./Factura.jsx";
import { PDFViewer } from "@react-pdf/renderer";

function App() {

    const invoiceData = {
        customerName: "Hector Ojeda",
        customerAddress: "2916 Ranch Gate Rd",
        customerCity: "Chula Vista",
        customerState: "CA",
        customerZip: "91914",
        items: [
            { description: "Instalación de piso en clóset", qty: 1, total: 800.00 },
            { description: "Materiales comprados en Home Depot", qty: 1, total: 82.82 },
            { description: "Seguro Tec Wood", qty: 1, total: 200.00 },
        ],
        totalDue: 1082.82,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Corporis cumque eum, illum maxime nihil omnis saepe? Assumenda cum dicta dolore illo laboriosam necessitatibus. Quis quos totam. Autem dolore laboriosam repellat. Otra línea adicional para ocupar espacio extra."
    };



  return (
    <PDFViewer width={800} height={800} >
        <InvoicePDF data={invoiceData} />
    </PDFViewer>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'))

export default App
