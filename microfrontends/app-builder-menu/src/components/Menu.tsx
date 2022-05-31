import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const MenuCmp = styled.menu`
  position: fixed;
  left: 0;
  top: 60px;
  background-color: black;
  width: 250px;
  height: 100%;
  color: white;
`;

export function Menu() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      const { data } = await axios.get<{ message: string }>("/your-endpoint");

      setMessage(data.message);
      setLoading(false);
    };

    request();
  }, []);

  return loading ? <div>{"Loading..."}</div> : <MenuCmp>{message}</MenuCmp>;
}
