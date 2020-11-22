import React from "react";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
  },
});

function Comp() {
  return (
    <div>
      <h1 style={styles.header}>Hello</h1>
    </div>
  );
}

export default Comp;
