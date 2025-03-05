import InvoicePDF from "./Factura.jsx";
import { PDFViewer } from "@react-pdf/renderer";
import Formulario from "./Formulario.jsx";

function App() {
  const data = {
    Invoice: "",
    Name: "",
    Address: "",
    City: "",
    ClientName: "",
    Date: "",
    ContactInfo: "",
    Email: "",
    Row1: "",
    Deposit: "500",
    AdditionalChanges: "400",
    Total: "50000"
  }

  return (
    // <PDFViewer width={800} height={800} >
    //     <InvoicePDF data={data}/>
    // </PDFViewer>
      <Formulario/>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'))

export default App
