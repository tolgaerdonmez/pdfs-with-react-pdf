import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tweetContainer: {
    marginVertical: 10,
  },
});

/**
 *
 * @param {{id:string,created_at:string,tweet:string}}
 */
function Tweet({ id, created_at, tweet }) {
  return (
    <View style={styles.tweetContainer}>
      <Text>{tweet.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
    </View>
  );
}

export default Tweet;
