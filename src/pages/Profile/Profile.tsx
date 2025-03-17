import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: string;
  name: string;
  password: string;
}
const Profile: React.FC = () => {
  const [user, setUser] = useState<string[]>();
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await axios.get(
          `http://localhost:3001/user/getUser`,
          { withCredentials: true }
        );
        setUser(userDetails.data);
        console.log(userDetails);
      } catch (err) {
        console.log(err);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>{/* <h1>{user.id}</h1> */}</div>
  );
};

export default Profile;
