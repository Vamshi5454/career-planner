import axios from "axios";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  const [user, setUser] = useState<any[]>();
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await axios.get(
          `http://localhost:3001/user/getUser/1`
        );
        setUser(userDetails.data);
        console.log(userDetails.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <form>
        <h1>User details</h1>
      </form>
    </div>
  );
};

export default Profile;
