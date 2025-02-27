import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
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

const PaymentTermsPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Tabla de pago */}
            <View style={styles.table2}>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>PAYMENT</Text>
                    <Text style={[styles.cell2, styles.bold]}>CHECK#</Text>
                    <Text style={styles.cell2}>$1,082.82</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.cell2}>NOTE: Payments must be made to avoid delays.</Text>
                    <Text style={styles.cell2}>0.00</Text>
                </View>
            </View>

            {/* Pago a */}
            <View style={[styles.row2, { backgroundColor: 'red', color: 'white' }]}>
                <Text style={[styles.cell2, styles.bold]}>MAKE CHECK PAYABLE TO:                                                 </Text>
                <Text style={styles.cell2}>Pablo Reyes Garcia</Text>
            </View>

            {/* Totales */}
            <View style={styles.table2}>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>BALANCE DUE                                                      </Text>
                    <Text style={styles.cell2}>$1,082.82</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={[styles.cell2, styles.bold]}>TOTAL DUE                                                            </Text>
                    <Text style={styles.cell2}>$1,082.82</Text>
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
        </Page>
    </Document>
);

export default PaymentTermsPDF;
