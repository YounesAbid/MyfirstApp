import "./Welcom.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const Welcom = () => {
  const [user, setuser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/user");
      if (response.status == 401) {
        console.log("noooo");
        navigate("/lg");
      } else setuser(response.data.username);
    })();
  }, []);

  return <h1>Hello {user}</h1>;
};

export default Welcom;
