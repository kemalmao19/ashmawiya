export type User = {
  id?: number;
  username: string;
  email: string;
  courses?: UserCourse[];
  password?: string;
};

export type Course = {
  id?: number;
  title: string;
  url: string;
  videoDuration: number;
};

export type UserCourse = {
  id: number;
  userId: number;
  courseId: number;
  watchedTime: number;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Message = {
  message: string;
};
