import React from "react";
import { View } from "./shared";
import { StyleSheet } from "@react-pdf/renderer";

import Tweet from "./Tweet";
import User from "./User";
import thread from "../../thread.json";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    // padding: 10,
    flexGrow: 1,
  },
});

function Thread() {
  return (
    <View style={styles.section}>
      {thread.map(({ data, common }, i) => (
        <View key={i.toString()}>
          <User {...common.user} />
          {data.map((t) => (
            <Tweet {...t} key={t.id} />
          ))}
        </View>
      ))}
    </View>
  );
}

export default Thread;
