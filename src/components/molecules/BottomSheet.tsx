/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {StyleSheet} from 'react-native';
import ModalBox from 'react-native-modalbox';
import {colors} from 'src/themes';

interface BaseBottomSheetProps {
  renderContent: React.ReactNode;
  isOpen: boolean;
  onClosed: () => void;
}

const BaseBottomSheet: React.FC<BaseBottomSheetProps> = ({
  renderContent,
  isOpen,
  onClosed,
}) => {
  return (
    <ModalBox
      isOpen={isOpen}
      entry={'bottom'}
      position={'bottom'}
      swipeToClose={false}
      onClosed={onClosed}
      style={styles.modalContainer}
      coverScreen={true}>
      {renderContent}
    </ModalBox>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    flex: 0.35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default BaseBottomSheet;
