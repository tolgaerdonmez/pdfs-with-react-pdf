import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import { View, Text as span } from './shared';

const styles = StyleSheet.create({
  tweetContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

/**
 *
 * @param {import("../../types").CustomTweetData}
 */
function Tweet({ id, created_at, tweet }) {
  return (
    <View style={styles.tweetContainer}>
      <span dangerouslySetInnerHTML={{ __html: tweet.replace(/<\/?[^>]+(>|$)/g, '') }}></span>
    </View>
  );
}

export default Tweet;
