import { useEffect, useState } from "react";
import { checkEnvironment } from "../../../../config/apiUrl";

export const getUserCourse = (id: number) => (setData: (data: any) => void) => {
  fetch(checkEnvironment() + `/usercourse/${id}`)
    .then((response) => response.json())
    .then((data) => setData(data));
};

const useData = (id: number) => {
  const [userCourse, setUserCourse] = useState<UserCourse[]>([]);

  useEffect(() => {
    getUserCourse(id)(setUserCourse);
  }, []);

  return {
    userCourse,
  };
};

export default useData;
