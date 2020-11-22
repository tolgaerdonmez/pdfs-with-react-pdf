import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    margin: 0,
    flexGrow: 1,
  },
});

function PDF({ children }) {
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        {children}
      </Page>
    </Document>
  );
}

export default PDF;
