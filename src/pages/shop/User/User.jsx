import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { fetchAllOrders } from "~/apis";
import SpinnerLoader from "~/components/common/SpinnerLoader/Spinner";
import { handleOrdersData } from "~/utils";

import LeftAsideContainer from "./UserContainer/LeftAsideContainer";
import RightAsideContainer from "./UserContainer/RightAsideContainer";

function User() {
  const outletContext = useOutletContext();
  const [userInfo, setUserInfo] = useState({});
  const [userOrders, setUserOrders] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    if (tokenUser) {
      fetchUserData()
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  }, []);

  const fetchUserData = async (token) => {
    setLoading(true);
    const rsOrders = await fetchAllOrders(token);
    if (rsOrders?.status === 200) {
      setUserOrders(handleOrdersData(rsOrders?.data || rsOrders));
    }
    if (localStorage.getItem("user")) {
      setUserInfo(JSON.parse(localStorage.getItem("user")));
    }
  }

  if (loading) {
    return (<SpinnerLoader/>)
  }
  
  return (
    <div style={{ padding: "80px 0 0 0", backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg" sx={{ p: "16px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#0065ee" }}>
            Trang chủ
          </Link>
          <IoIosArrowForward style={{ color: "#8c91a1", fontWeight: "bold" }} />
          <Link
            to="/user/account"
            style={{ textDecoration: "none", color: "#0065ee" }}
          >
            Tài khoản
          </Link>
        </div>
        <Grid columnSpacing={4} container sx={{ pt: "16px" }}>
          <Grid item md={4.2}>
            <LeftAsideContainer />
            {/* <BoxUser/> */}
          </Grid>
          <Grid item md={7.8}>
            <RightAsideContainer outlet={<Outlet context={{ ...outletContext }}/>} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default User;
