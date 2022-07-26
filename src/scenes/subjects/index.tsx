/* eslint-disable simple-import-sort/imports */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  Image,
  Alert,
} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import {SubjectDetail} from 'src/components/atoms';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from 'src/themes';
import {useSubject, useUser} from 'src/hooks';

const SubjectScreen = () => {
  const [showIndex, setShowIndex] = useState<number | null>(null);
  const {subject, getSubjectList} = useSubject();
  const {userData} = useUser();

  const onGetListSubjectSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onGetListSubjectError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  useEffect(() => {
    global.props.showLoading();
    getSubjectList(
      userData.MajorId,
      onGetListSubjectSuccess,
      onGetListSubjectError,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface ISubject {
    id: number;
    name: string;
    numberCredit: number;
    typeStudy: string;
  }

  const handleShowInfo = (index: number) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const renderItem = ({item, index}: ListRenderItemInfo<ISubject>) => {
    const isShowInfo = index === showIndex;
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonSubject}
          activeOpacity={0.9}
          onPress={() => handleShowInfo(index)}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Image
            source={isShowInfo ? images.icArrowUp : images.icArrowDown}
            style={styles.icArrow}
          />
        </TouchableOpacity>
        {isShowInfo && (
          <SubjectDetail
            credit={item?.numberCredit}
            typeStudy={item?.typeStudy}
            name={item?.name}
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Danh sách môn học" />
      <FlatList
        data={subject}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default SubjectScreen;
