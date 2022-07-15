import { useEffect, useState } from "react";
import {useDispatch, useSelector,} from "react-redux";
import {createNewUser} from "../store/user/actions"
import { useNavigate,Link } from "react-router-dom";
import { logInRedux } from "../store/user/actions";

const Registration = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();


  const [loginError, setLoginError] = useState({
    passwordError: true,
    emailError: true
  });

  const errors = {
    passwordError: 'Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters',
    emailError: 'Email is not correct',
    nameError: 'Name must contain 1-5 eng. letters', //and Last name
    emailAlreadyExists: "This email already exists!",
    loginError: "Email or password are incorrect"

  };
  const [btnActive,setBtnActive] = useState(false)

  const [error, setError] = useState({
    passwordError: true,
    emailError: true,
    nameError: true,
    lastNameError: true,
    genderError: true
  });

  const RegExps = {
    namesReg: /^[A-Za-z]{1,15}$/, //and Last name
    emailReg: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    passwordReg: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
  };

  const changeEmail = (e) => {
    const isValid = RegExps.emailReg.test(e.target.value);
    setError({ ...error, emailError: !isValid });
    setEmail(e.target.value);
  };

  const changeEmailLogin = (e) => {
    if (Object.keys(user.users).map((i) => i === email)) {
      setEmail(e.target.value);
    } else {
      setEmail(undefined);
    }
  };

  const getGender = (e) => {
    setGender(e.target.value);
    setError({
      ...error,
      genderError: false
    });
  };

  const checkLoginPassword = () => {
    if (email && Object.keys(user.users).includes(email)) {
      setLoginError({
        ...loginError,
        passwordError: user.users?.[email]?.password !== password
      });

    } else {
      setLoginError({
        ...loginError,
        passwordError: true
      });

    }
  };

  const checkLoginEmail = () => {
    setLoginError({
      ...loginError,
      emailError: !(email && !Object.keys(user.users).includes(email))
    });

  };

  const logIn = () => {
    if(user.sessionData.loggedIn) {
      navigate("/profile")
    }
    setBtnActive(true)
    checkLoginEmail();
    checkLoginPassword();



  };

  useEffect(() => {
    if (!loginError.passwordError) {
      dispatch(logInRedux(password,email))
      navigate("/profile")
    }
    if(user.sessionData.loggedIn) {
      navigate("/profile")
    }


  },[loginError])

  const register = () => {
    if (Object.values(error).includes(true)) {
    } else {
      if (
        !Object.keys(user.users)
          .map((i) => i === email)
          .includes(true)
      ) {
        console.log("created a new user");
        dispatch(createNewUser(password,email,gender,name,lastName))
        navigate("/login")

      }
    }
  };

  const changePasswordLogin = (e) => {
    if (e.target.value) {
      setPassword(e.target.value);
    }
  };

  const changePassword = (e) => {
    const isValid = RegExps.passwordReg.test(e.target.value);
    setError({ ...error, passwordError: !isValid });
    setPassword(e.target.value);
  };

  const changeName = (e) => {
    const isValid = RegExps.namesReg.test(e.target.value);
    setError({ ...error, nameError: !isValid });
    setName(isValid ? e.target.value : {});
  };

  const changeLastName = (e) => {
    const isValid = RegExps.namesReg.test(e.target.value);
    setError({ ...error, lastNameError: !isValid });
    setLastName(isValid ? e.target.value : {});
  };

  return (
    <>
      <div className="container">
        <main className="reg-main">
          {window.location.pathname === "/login" ? (
            <div className="inputs-reg">
              <div className="loginDetails reg">
                <span className="login-details">Login</span>
                <input id="reg-input" onChange={changeEmailLogin} placeholder="Email" type="email" />
                <input
                  onChange={changePasswordLogin}
                  id="reg-input"
                  placeholder="Password"
                  type={"password"}
                />
              </div>
              {loginError.passwordError && email && password && btnActive ? <span className={"errorMSG_"}>{errors.loginError}</span> : null}
              <div className={"loginBTN"}>
                <button onClick={logIn} className="btn-join-now">
                  login
                </button>
                <Link  className={"loginLink"} to={"/registration"}>signUp</Link>
              </div>

            </div>
          ) : (
            <div className="inputs-reg">
              <div className="NameAndLastName reg">
                <span style={{margin: "0 auto", marginTop: "20px"}} className="login-details">Registration</span>
                <span className="your-name">Your Name</span>
                <input onChange={changeName} id="reg-input" placeholder="First Name" type="text" />
                {error.nameError && name  ? <span className={"errorMSG_"}>{errors.nameError}</span> : null}
                <input onChange={changeLastName} id="reg-input" placeholder="Last Name" type="text" />
                {error.lastNameError && lastName  ? <span className={"errorMSG_"}>{errors.nameError}</span> : null}
              </div>

              <div className="male-or-femeale">

                <input
                  onChange={getGender}
                  value={'male'}
                  name="maleFemale"
                  type="radio"
                  className="male"
                  id="checkbox-reg"
                  style={{ display: 'block' }}
                />
                <span className="male">Male</span>
                <input
                  onChange={getGender}
                  value={'female'}
                  name="maleFemale"
                  className="male"
                  type="radio"
                  id="checkbox-reg checkbox-reg-2"
                />
                <span className={'male'}> Female</span> <br/>

              </div>
              { error.genderError && gender  ? <span className={"errorMSG_"}>Please choose a gender</span> : null }
              <div className="loginDetails reg">
                <span className="login-details">Login details</span>
                <input id="reg-input" onChange={changeEmail} placeholder="Email" type="email" />
                {error.emailError && email ? <span className={"errorMSG_"}>{errors.emailError}</span> : null}
                {Object.keys(user.users).includes(email)? <span className={"errorMSG_"}>{errors.emailAlreadyExists}</span> : null}
                <div className="password">
                  <input
                    onChange={changePassword}
                    id="reg-input"
                    placeholder="Password"
                    type={"password"}
                  />

                </div>
                {error.passwordError && password  ? <span className={"errorMSG_"}>{errors.passwordError}</span> : null}

              </div>



              <br />
              <br />
              <div className={"loginBTN"}> <button onClick={register} className="btn-join-now">
                join now
              </button>
                <Link  className={"loginLink"} to={"/login"}>logIn</Link></div>
            </div>
          )}
        </main>
      </div>

    </>

  );
};

export default Registration;
