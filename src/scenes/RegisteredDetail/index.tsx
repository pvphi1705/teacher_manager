/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useEffect, useState} from 'react';
import {Text, Alert, View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import NavBar from 'src/components/molecules/NavBar';
import {useSubject, useUser, useAuth} from 'src/hooks';
import {DetailItem} from 'src/components/atoms';
import styles from './styles';
import moment from 'moment';
import {EmptyList, BaseBottomSheet} from 'src/components/molecules';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RegisteredScreen = () => {
  const route = useRoute<any>();
  const subjectInfo = route?.params;
  const {subjectById, getSubjectById} = useSubject();
  const {student, getListStudent} = useUser();
  const {teacherId} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [infoDetail, setInfoDetail] = useState([]);

  const getSubjectByIdSuccess = () => {
    global.props.hideLoading();
  };
  const getSubjectByIdError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Có lỗi');
  };
  const getStudentSuccess = () => {
    global.props.hideLoading();
  };
  const getStudentError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Có lỗi');
  };

  useEffect(() => {
    global.props.showLoading();
    getSubjectById(
      subjectInfo?.name,
      getSubjectByIdSuccess,
      getSubjectByIdError,
    );
    getListStudent(
      subjectInfo?.classId,
      teacherId,
      getStudentSuccess,
      getStudentError,
    );
  }, []);

  const renderContentBottomSheet = (item: any) => {
    return (
      <View>
        <Text style={styles.titleBottomSheet}>Thông tin sinh viên</Text>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.info}>Họ tên:</Text>
            <Text style={styles.info}>Mã sinh viên:</Text>
            <Text style={styles.info}>Ngày sinh:</Text>
            <Text style={styles.info}>Quê quán:</Text>
            {/* <Text>Số điện thoại:</Text> */}
          </View>
          <View>
            <Text style={styles.info}>{item?.nameStudent}</Text>
            <Text style={styles.info}>{item?.phone}</Text>
            <Text style={styles.info}>
              {moment(item?.dateOfBirth).format('DD-MM-YYYY')}
            </Text>
            <Text style={styles.info}>{item?.address}</Text>
            {/* <Text>Số điện thoại:</Text> */}
          </View>
        </View>
      </View>
    );
  };

  const renderItemDetail = (info: string, content: string) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTextInfo}>{info}</Text>
          <Text style={styles.itemTextContent}>{content}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Chi tiết lớp học" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailItem
          title="Thông tin môn học"
          children={
            <View>
              {renderItemDetail('Tên lớp: ', subjectById?.name)}
              {renderItemDetail('Số tín chỉ: ', subjectById?.numberCredit)}
              {renderItemDetail('Hình thức học: ', subjectById?.typeStudy)}
              {renderItemDetail(
                'Ngày bắt đầu: ',
                moment(subjectInfo?.startTime).format('YYYY-MM-DD'),
              )}
              {renderItemDetail(
                'Ngày kết thúc: ',
                moment(subjectInfo?.endTime).format('YYYY-MM-DD'),
              )}
              {renderItemDetail('Phòng học: ', subjectInfo?.room)}
            </View>
          }
        />
        <Text style={styles.titleInfo}>Danh sách sinh viên: </Text>
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <View style={{borderWidth: 0.5, flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'center',
                flex: 2,
                paddingVertical: 20,
                borderRightWidth: 0.5,
              }}
              children={
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                  children={'Mã sinh viên'}
                />
              }
            />

            <View
              style={{
                justifyContent: 'center',
                flex: 2,
                paddingVertical: 20,
              }}
              children={
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                  children={'Họ tên'}
                />
              }
            />
          </View>
          {student && student.length > 0 ? (
            student?.map((e: any) => {
              return (
                <View
                  style={{borderWidth: 0.5, flexDirection: 'row'}}
                  key={e?.id}>
                  <View
                    style={{
                      justifyContent: 'center',
                      flex: 2,
                      paddingVertical: 20,
                      borderRightWidth: 0.5,
                    }}
                    children={
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          fontWeight: '500',
                        }}
                        children={e?.phone}
                      />
                    }
                  />

                  <View
                    style={{
                      justifyContent: 'center',
                      flex: 2,
                      paddingVertical: 20,
                    }}
                    children={
                      <TouchableOpacity
                        onPress={() => {
                          setIsOpen(true);
                          setInfoDetail(e);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '500',
                          }}
                          children={e?.nameStudent}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
              );
            })
          ) : (
            <EmptyList isCalendar={false} />
          )}
        </View>
      </ScrollView>
      {isOpen && (
        <BaseBottomSheet
          isOpen={isOpen}
          onClosed={() => setIsOpen(false)}
          renderContent={renderContentBottomSheet(infoDetail)}
        />
      )}
    </View>
  );
};

export default RegisteredScreen;
