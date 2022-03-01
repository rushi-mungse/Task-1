import styles from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [getUserInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const loginUser = async () => {
    if (!getUserInfo.email || !getUserInfo.password) {
      return alert("All fields are required!");
    }
    const { data } = await axios.post(
      "http://localhost:5500/api/login",
      getUserInfo
    );
    const { isAuth } = data;
    if (!isAuth) {
      return alert("Something went wrong");
    }
    navigate("/welcome");
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.left_side}>
        <div className={styles.main_content_left}>
          <div className={styles.logo_img}>
            <img src="/images/foot-logo.png" alt="logo" />
          </div>
          <h1>CleanMyCar</h1>
          <p>
            India's first waterless <br />
            car cleaning company
          </p>
        </div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.main_content}>
          <p className={styles.need_help}>Need help?</p>
          <div className={styles.sign_in_content}>
            <div className={styles.sign_in_info}>
              <p className={styles.log_in}>Log in</p>
              <div className={styles.input_box}>
                <div className={styles.input}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required="true"
                    placeholder="joe.email.com"
                    onChange={(e) =>
                      setUserInfo({ ...getUserInfo, email: e.target.value })
                    }
                  />
                </div>
                <div className={styles.input}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    required="true"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      setUserInfo({
                        ...getUserInfo,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.botton_content}>
                  <a href="/">Forgot Password?</a>
                  <button className={styles.btn} onClick={loginUser}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
