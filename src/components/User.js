import React from "react";
import { StyleSheet } from "@react-pdf/renderer";
import { View, Text, Image } from "./shared";

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "column",
  },
  img: { width: 100, height: 100 },
});

function User({ profile_image_url, name, username }) {
  return (
    <View style={styles.userContainer}>
      <Image src={profile_image_url} style={styles.img} />
      <Text>
        {name} - @{username}
      </Text>
    </View>
  );
}

export default User;
