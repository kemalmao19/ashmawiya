type UserCourse = {
  user: {
    id: number;
    username: string;
  };
  course: {
    id: number;
    title: string;
    videoDuration: number;
  };
} & {
  id: number;
  userId: number;
  courseId: number;
  note: string;
  watchedTime: number;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type Course = {
  id?: number;
  title: string;
  url: string;
  videoDuration: number;
  tag: string;
};

type User = {
  id?: number;
  username: string;
  email: string;
  courses?: UserCourse[];
  password?: string;
};

type tagGroup = {
  wudu: Course[];
  salaat: Course[];
  siyam: Course[];
  [key: string]: Course[];
};

type Note = {
  id?: number;
  userId: number;
  text: string;
};
