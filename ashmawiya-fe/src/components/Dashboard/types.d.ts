type UserCourse = {
  id: number;
  userId: number;
  courseId: number;
  watchedTime: number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type Course = {
  id?: number;
  title: string;
  url: string;
  videoDuration: number;
};

type User = {
  id?: number;
  username: string;
  email: string;
  courses?: UserCourse[];
  password?: string;
};
