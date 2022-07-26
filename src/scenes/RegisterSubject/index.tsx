/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  Alert,
} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import styles from './styles';
import {Button} from 'src/components/atoms';
import {useCalendar, useAuth} from 'src/hooks';
import moment from 'moment';
import {useState} from 'react';

const RegisterSubjectScreen = () => {
  const {subjectList, getListSubjectRegister, response, registerSubject} =
    useCalendar();
  const {teacherId} = useAuth();
  const [status, setStatus] = useState('Chưa đăng ký');

  const onGetListSubjectRegisSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onGetListSubjectRegisError: Function = (message: string) => {
    global.props.hideLoading();
    Alert.alert('Có lỗi', message);
  };

  const onRegisterSuccess: Function = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Đăng ký thành công');
  };

  const onRegisterError: Function = (message: string) => {
    global.props.hideLoading();
    Alert.alert('Có lỗi', message);
  };

  const handleRegisterSubject = (params: any, classId: number) => {
    global.props.showLoading();
    registerSubject(params, onRegisterSuccess, onRegisterError);
    if (response && response?.classId === classId) {
      setStatus('Đã đăng ký');
    } else {
      setStatus('Chưa đăng ký');
    }
  };

  useEffect(() => {
    global.props.showLoading();
    getListSubjectRegister(
      teacherId,
      onGetListSubjectRegisSuccess,
      onGetListSubjectRegisError,
    );
  }, []);

  interface ISubjectRegister {
    id: number;
    name: string;
    timeStudy: string;
    room: string;
    startTime: string;
    endTime: string;
    status: boolean;
    classId: number;
  }

  const renderTextIcon = (
    title: string,
    timeStudy: string,
    dateStart: string,
    dateEnd: string,
    address: string,
    // state: string,
  ) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.title}>Tên môn học</Text>
            <Text style={styles.title}>Thời gian học</Text>
            <Text style={styles.title}>Ngày bắt đầu</Text>
            <Text style={styles.title}>Ngày kết thúc</Text>
            <Text style={styles.title}>Phòng học</Text>
            {/* <Text style={styles.title}>Trạng thái đăng ký</Text> */}
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{timeStudy}</Text>
            <Text style={styles.title}>{dateStart}</Text>
            <Text style={styles.title}>{dateEnd}</Text>
            <Text style={styles.title}>{address}</Text>
            {/* <Text style={styles.title}>{state}</Text> */}
          </View>
        </View>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.titleInfo}>Thông tin đăng ký: </Text>
      </View>
    );
  };

  const renderItem = ({item}: ListRenderItemInfo<ISubjectRegister>) => {
    return (
      <View style={styles.containerItem}>
        {renderTextIcon(
          item?.name,
          item?.timeStudy === 'Ca sáng' ? 'Tiết(1,2,3,4,5)' : 'Tiết(7,8,9,10)',
          moment(item?.startTime).format('YYYY-MM-DD'),
          moment(item?.endTime).format('YYYY-MM-DD'),
          item?.room,
          // status,
        )}
        <Button
          title="Đăng ký"
          titleStyle={styles.titleBtn}
          style={styles.button}
          onPress={() =>
            handleRegisterSubject(
              {
                subjectName: item?.name,
                teacherId: teacherId,
                room: item?.room,
                classId: item?.classId,
                startTime: moment(item?.startTime).format('YYYY-MM-DD'),
                endTime: moment(item?.endTime).format('YYYY-MM-DD'),
                note: 'Đang học',
                status: item?.timeStudy,
              },
              item?.classId,
            )
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Đăng ký giảng dạy" />
      {subjectList && subjectList.length > 0 && (
        <FlatList
          ListHeaderComponent={renderHeader()}
          data={subjectList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          bounces={true}
          scrollEventThrottle={16}
        />
      )}
    </View>
  );
};

export default RegisterSubjectScreen;
