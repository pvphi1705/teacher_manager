/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from 'src/themes';
import {metrics} from 'src/themes';
import {images} from 'src/themes';

interface NoteCardProps {
  title: string;
  subTitle: string;
  content: string;
  dateCreate: string;
  typeNote: string;
  onDelete: () => void;
  onEdit: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  title,
  subTitle,
  content,
  dateCreate,
  typeNote,
  onDelete,
  onEdit,
}) => {
  return (
    <View style={styles(typeNote).container}>
      <TouchableOpacity onPress={onEdit}>
        <View style={styles(typeNote).trash}>
          <Text style={styles(typeNote).date}>{dateCreate}</Text>
          <TouchableOpacity onPress={onDelete}>
            <Image source={images.icDelete} style={styles(typeNote).icDelete} />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={1} style={styles(typeNote).title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles(typeNote).category}>
          {subTitle}
        </Text>
        <Text numberOfLines={5} style={styles(typeNote).note}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (typeNode: string) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        typeNode === 'Nhà trường'
          ? colors.noteLightRed
          : typeNode === 'Cá nhân'
          ? colors.noteOrange
          : colors.noteYellow,
      padding: 15,
      borderRadius: 10,
      margin: 8,
      width: '44%',
      alignSelf: 'center',
    },
    date: {
      ...fonts.style.smallBold,
      color: colors.whiteText,
      // alignSelf: 'flex-end',
    },
    title: {
      ...fonts.style.mediumBold,
      color: colors.whiteText,
      marginTop: metrics.space.s10,
    },
    category: {
      fontSize: fonts.size.regular,
      color: colors.whiteText,
    },
    note: {
      marginTop: metrics.space.s10,
      ...fonts.style.regularNormal,
      color: colors.whiteText,
    },
    trash: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icDelete: {
      width: metrics.space.s20,
      height: metrics.space.s20,
    },
  });

export default NoteCard;
