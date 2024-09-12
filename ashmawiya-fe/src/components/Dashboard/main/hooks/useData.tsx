import { useEffect, useState } from "react";
import { checkEnvironment } from "../../../../config/apiUrl";

export const getUser = (id: number) => (setData: (data: any) => void) => {
  fetch(checkEnvironment() + `/users/${id}`)
    .then((response) => response.json())
    .then((data) => setData(data));
};

const useData = (id: number) => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    courses: [],
  });

  useEffect(() => {
    getUser(id)(setUser);
  }, []);

  return {
    user,
  };
};

export default useData;
