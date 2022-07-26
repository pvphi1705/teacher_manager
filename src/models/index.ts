declare interface Hobby {
  customer_id: number;
  category_id: number;
  Idate: string;
  Udate: string;
  Iuser: string;
  Uuser: string;
  Remove: number;
  name: string;
}

declare interface User {
  Id: number;
  NameTeacher: string;
  Phone: string;
  Address: string;
  DateOfBirth: Date;
  Avatar: string;
  Gender: string;
  IsDelete?: any;
  ModifiedDate?: any;
  CreatedDate: Date;
  Status: string;
  MajorId: number;
  UserId: number;
  Name: string;
  majorAddress: string;
  Description: string;
  Founding: Date;
  majorCreatedDate: Date;
  majorModifiedDate: Date;
}

declare interface RegisterSubjectRequest {
  subjectName: string;
  teacherId: number;
  room: string;
  classId: number;
  startTime: string;
  endTime: string;
  note: string;
  status: string;
}
