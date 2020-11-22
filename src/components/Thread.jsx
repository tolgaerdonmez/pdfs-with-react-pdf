// @ts-check
import { StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { View } from './shared';
import Tweet from './Tweet';
import User from './User';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    // padding: 10,
    flexGrow: 1,
  },
});

/**
 *
 * @param {Object} p
 * @param {CustomTweetsObject} p.thread
 */
function Thread({ thread }) {
  return (
    <View style={styles.section}>
      {thread.threads.map(({ data, common }, i) => (
        <View key={i.toString()}>
          {/* @ts-ignore */}
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
