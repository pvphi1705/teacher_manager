/* eslint-disable simple-import-sort/imports */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ListRenderItemInfo, Image} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import {SubjectRegistered} from 'src/components/atoms';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from 'src/themes';
import {useCalendar, useAuth} from 'src/hooks';
import moment from 'moment';
import navigationService from 'src/services/navigationService';
import {REGISTERED_SCREEN} from 'src/navigation/appRouters';
import {EmptyList} from 'src/components/molecules';

const ClassInfoScreen = () => {
  const [showIndex, setShowIndex] = useState<number | null>(null);
  const {subjectRegistered, getRegisteredSubject} = useCalendar();
  const {teacherId} = useAuth();

  const onGetListSubjectSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onGetListSubjectError: Function = () => {
    global.props.hideLoading();
    // Handle error
    // Alert.alert('Có lỗi', 'Danh sách trống');
  };

  useEffect(() => {
    global.props.showLoading();
    getRegisteredSubject(
      teacherId,
      onGetListSubjectSuccess,
      onGetListSubjectError,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface ISubjectRegistered {
    room: string;
    startTime: string;
    subjectName: string;
    endTime: string;
    classId: number;
  }

  const handleShowInfo = (index: number) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<ISubjectRegistered>) => {
    const isShowInfo = index === showIndex;
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonSubject}
          activeOpacity={0.9}
          onPress={() => handleShowInfo(index)}>
          <Text style={styles.itemTitle}>{item?.subjectName}</Text>
          <Image
            source={isShowInfo ? images.icArrowUp : images.icArrowDown}
            style={styles.icArrow}
          />
        </TouchableOpacity>
        {isShowInfo && (
          <SubjectRegistered
            credit={moment(item?.endTime).format('YYYY-MM-DD')}
            typeStudy={moment(item?.startTime).format('YYYY-MM-DD')}
            name={item?.room}
            detail={
              <TouchableOpacity
                style={styles.detail}
                onPress={() => {
                  navigationService.navigate(REGISTERED_SCREEN, {
                    classId: item?.classId,
                    name: item?.subjectName,
                    startTime: item?.startTime,
                    endTime: item?.endTime,
                    room: item?.room,
                  });
                }}>
                <Image source={images.icInfo} style={styles.info} />
                <Text style={styles.textDetail}>Xem chi tiết</Text>
              </TouchableOpacity>
            }
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Danh sách môn học" />
      {subjectRegistered && subjectRegistered.length > 0 ? (
        <FlatList
          data={subjectRegistered}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          bounces={true}
          scrollEventThrottle={16}
          ListEmptyComponent={<EmptyList isCalendar={false} />}
        />
      ) : (
        <EmptyList isCalendar={false} />
      )}
    </View>
  );
};

export default ClassInfoScreen;
