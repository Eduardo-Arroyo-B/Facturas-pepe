import { Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer"
import React from "react";

// Estilos del PDF
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        justifyContent: "space-between",
    },
    section: {
        marginBottom: 10,
        marginTop: 10
    },
    header: {
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
        wordBreak: "break-word",
    },
    footer: {
        marginTop: 20,
        fontSize: 8,
        textAlign: "center",
    },
    headerInfo: {
        backgroundColor: "red",
        color: "white",
        padding: "5px",
    },
    table2: {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: 10,
    },
    row2: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        padding: 5,
    },
    cell2: {
        flexGrow: 1,
        padding: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    redText: {
        color: 'red',
        fontWeight: 'bold',
    },
    footer2: {
        marginTop: 10,
        textAlign: 'center',
    },
});

const InvoicePDF = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Encabezado */}
            <View style={styles.section}>
                <Text style={styles.header}>REYGAR                                                INVOICE: {data.Invoice}</Text>
                <Text>170 MACE ST Unit# E2</Text>
                <Text>CHULA VISTA CA 91911</Text>
                <Text>Direct Number: 619-915-7607</Text>
            </View>

            {/* Información del Cliente */}
            {/*<View style={styles.section}>
                <Text>Name: {data.Name}</Text>
                <Text>Address: {data.Address}</Text>
                <Text>City: {data.City}</Text>
            </View>*/}

            {/* Tabla de detalles */}
            <View style={styles.table}>
                <View>
                    <Text style={styles.headerInfo}>HARDWOODS | CARPETS | TILE | STONE | SHUTTERS | LAMINATES | GRANITE COUNTERTOPS | CUSTOM CABINETS</Text>
                </View>

                <View style={[styles.row, { backgroundColor: "#ddd" }]}>
                    <Text style={styles.cell}>Client Name & Address</Text>
                    <Text style={styles.cell}>Start Date</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell}>{data.ClientName}</Text>
                    <Text style={styles.cell}>{data.Date}</Text>
                </View>

                <View style={[styles.row, { backgroundColor: "#ddd" }]}>
                    <Text style={styles.cell}>Contact Info</Text>
                    <Text style={styles.cell}>Email</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell}>{data.ContactInfo}</Text>
                    <Text style={styles.cell}>{data.Email}</Text>
                </View>

                <View style={[styles.row, { backgroundColor: "#ddd" }]}>
                    <Text style={styles.cell}>Descripción</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row1}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row2}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row3}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row4}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row5}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row6}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row7}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row8}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row9}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>{data.Row10}</Text>
                </View>
            </View>

            {/* Tabla de pago */}
            <View style={[styles.table2, { marginTop: 10 }]}>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>1st Deposit</Text>
                    <Text style={[styles.cell2, styles.bold]}>CHECK#</Text>
                    <Text style={styles.cell2}>AMOUNT: ${data.Deposit}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.cell2}>NOTE : Any Change Orders will be charged seperate            </Text>
                    <Text style={styles.cell2}>${data.AdditionalChanges}</Text>
                </View>
            </View>

            {/* Pago a */}
            <View style={[styles.row2, { backgroundColor: 'red', color: 'white' }]}>
                <Text style={[styles.cell2, styles.bold]}>MAKE CHECK PAYABLE TO:                                                                         </Text>
                <Text style={styles.cell2}>Pablo Reyes Garcia</Text>
            </View>

            {/* Totales */}
            <View style={styles.table2}>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>BALANCE DUE                                                                         </Text>
                    <Text style={styles.cell2}>${data.Total}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>TOTAL DUE                                                                               </Text>
                    <Text style={styles.cell2}>${data.Total}</Text>
                </View>
            </View>

            {/* Términos y condiciones */}
            <Text style={[styles.bold, { textAlign: 'center', marginBottom: 5 }]}>THE FOLLOWING TERMS AND CONDITIONS...</Text>
            <Text>
                MEASUREMENTS: *Pablo Floor Covering is not responsible for any issues related to materials shortages due to customer measurements.
                MATERIAL WARRANTY: No manufacturer’s warranty is implied or stated.
                BACK CHARGES: No back charges will be accepted.
                ARBITRATION: If either party becomes involved in litigation, arbitration may be required.
            </Text>

            {/* Confirmación */}
            <Text style={[styles.redText, styles.footer2]}>
                I/WE THE BUYER(S) HAVE READ, UNDERSTAND AND AGREE TO ABOVE TERMS AND CONDITIONS:
            </Text>

            {/* Pie de página */}
            <View style={styles.footer}>
                <Text>Owner x____ agrees to pay the amount of $_____ Contractor x___agrees to complete the scope of work as described above in exchange of payment.</Text>
            </View>
        </Page>
    </Document>
);

export default InvoicePDF;