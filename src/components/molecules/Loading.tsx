import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {RootSiblingPortal} from 'react-native-root-siblings';

import {colors, metrics} from 'src/themes';

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({show}) => {
  if (!show) {
    return null;
  }

  return (
    <RootSiblingPortal>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <View style={styles.content}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    </RootSiblingPortal>
  );
};

export default memo(Loading);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.windowTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: metrics.space.s10,
    borderRadius: metrics.space.s10,
    backgroundColor: colors.white,
  },
});
