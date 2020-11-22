import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
});

function PDF({ children }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {children}
      </Page>
    </Document>
  );
}

export default PDF;
