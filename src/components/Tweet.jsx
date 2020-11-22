import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import { View, Text, Link, Image } from './shared';
import parse from 'html-react-parser';

const styles = StyleSheet.create({
  tweetContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

/**
 * @param {import("../../types").CustomTweetData}
 */
function Tweet({ id, created_at, tweet }) {
  return (
    <View style={styles.tweetContainer}>
      <Text>
        {parse(tweet.replace(/<br \/>/gi, '\n'), {
          replace: (node) => {
            if (node.name === 'a') {
              return <Link href={node.attribs.href}>{node.children[0].data}</Link>;
            }

            if (node.name === 'img') {
              return <Image src={node.attribs.src} />;
            }

            return node;
          },
        })}
      </Text>
    </View>
  );
}

export default Tweet;
