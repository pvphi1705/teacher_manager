/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import styles from './styles';
import {useUser, useFaculty} from 'src/hooks';
import moment from 'moment';
import {images} from 'src/themes';
import {EmptyList} from 'src/components/molecules';

const FacultyScreen = () => {
  const [facultyList, setFacultyList] = useState();
  const [isShowInfo, setIsShowInfo] = useState(false);
  const {getAllFaculty, getFacultyById, faculty, allFaculty} = useFaculty();

  const {userData} = useUser();

  const handleOpenLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Lỗi');
    }
  };

  const getFacultyByIdSuccess: Function = () => {
    global.props.hideLoading();
  };

  const getFacultyByIdError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Lỗi');
  };

  const getFacultySuccess: Function = (response: any) => {
    global.props.hideLoading();
    let newList = response?.filter((item: any) => item?.id !== faculty?.id);
    let newList1 = newList?.filter((item: any) => item?.id !== 6);
    setFacultyList(newList1);
  };

  const getFacultyError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Lỗi');
  };

  const handleGetAll = () => {
    global.props.showLoading();
    getAllFaculty(getFacultySuccess, getFacultyError);
  };

  useEffect(() => {
    global.props.showLoading();
    getFacultyById(
      userData?.MajorId,
      getFacultyByIdSuccess,
      getFacultyByIdError,
    );
  }, []);

  return (
    <View>
      <NavBar isShowLeftIcon title="Thông tin khoa quản lý" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Tên khoa</Text>
          <Text style={styles.title}>Văn phòng khoa</Text>
          <Text style={styles.title}>Ngày thành lập</Text>
          <Text style={styles.title}>Thông tin chi tiết</Text>
        </View>
        <View>
          <Text style={styles.title}>{faculty?.name}</Text>
          <Text style={styles.title}>{faculty?.address}</Text>
          <Text style={styles.title}>
            {moment(new Date(faculty?.founding)).format('DD/MM/YYYY')}
          </Text>
          <TouchableOpacity
            onPress={() => handleOpenLink(faculty?.description)}>
            <Text style={styles.title1}>{'Xem thêm >>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setIsShowInfo(!isShowInfo);
          handleGetAll();
        }}
        style={styles.more}>
        <Text style={styles.title1}>{'Xem thêm thông tin các khoa khác'}</Text>
        <Image
          source={isShowInfo ? images.icArrowUp : images.icArrowDown}
          style={styles.icArrow}
        />
      </TouchableOpacity>
      {facultyList && facultyList.length > 0 && isShowInfo && (
        <FlatList
          //   bounces={false}
          ListEmptyComponent={<EmptyList isCalendar={false} />}
          showsVerticalScrollIndicator={false}
          data={facultyList}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return (
              <View style={styles.container1}>
                <View>
                  <Text style={styles.title}>Tên khoa</Text>
                  <Text style={styles.title}>Văn phòng khoa</Text>
                  <Text style={styles.title}>Ngày thành lập</Text>
                  <Text style={styles.title}>Thông tin chi tiết</Text>
                </View>
                <View>
                  <Text style={styles.title}>{item?.name}</Text>
                  <Text style={styles.title}>{item?.address}</Text>
                  <Text style={styles.title}>
                    {moment(new Date(item?.founding)).format('DD/MM/YYYY')}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleOpenLink(item?.description)}>
                    <Text style={styles.title1}>{'Xem thêm >>'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default FacultyScreen;
