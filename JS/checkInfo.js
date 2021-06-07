function checkInfo() {
  
  if (userId.value == "") {
    alert("아이디를 입력하세요");
    userId.focus();
    return false;
  } 
  else {
    if (!checkId(userId.value)) {
      alert("유효하지 않은 아이디입니다.");
      userId.focus();
      return false;
    }
  }

  if (userPwd.value == "") {
    alert("비밀번호를 입력하세요");
    userPwd.focus();
    return false;
  } 
  else {
    if (!checkPwd(userPwd.value)) {
      alert("유효하지 않은 비밀번호입니다.");
      userPwd.focus();
      return false;
    }
  }

  if (userPwd_ck.value == "") {
    alert("비밀번호 확인을 입력하세요");
    userPwd_ck.focus();
    return false;
  } 
  else {
    if (!checkPwdCk(userPwd_ck.value)) {
      alert("비밀번호가 일치하지 않습니다.");
      userPwd_ck.value = "";
      userPwd_ck.focus();
      return false;
    }
  }

  if (userEmail.value == "") {
    alert("이메일을 입력하세요");
    userEmail.focus();
    return false;
  } else {
    if (!checkEmail(userEmail.value)) {
      alert("유효하지 않은 이메일입니다.");
      userEmail.focus();
      return false;
    }
  }
  if (telNum.value == "") {
    alert("휴대폰을 입력하세요");
    telNum.focus();
    return false;
  } else {
    if (!checkTell(telNum.value)) {
      alert("유효하지 않은 휴대폰 번호입니다.");
      telNum.focus();
      return false;
    }
  }

  alert("검사 OK");
}

function checkId(id) {
  const ID_CHECK = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;

  if (!ID_CHECK.test(id)) {
    return false;
  } else {
    return true;
  }
}
function checkPwd(pwd) {
  const PWD_CHECK = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=-]).{8,15}$/;

  if (!PWD_CHECK.test(pwd)) {
    return false;
  } else {
    return true;
  }
}
function checkPwdCk(pwd_ck) {
  if (pwd_ck != userPwd.value) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(email) {
  const EMAIL_CHECK =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!EMAIL_CHECK.test(email)) {
    return false;
  } else {
    return true;
  }
}
function checkTell(tel) {
  const NUM_CHECK = /[0-9]+$/;
  if (!NUM_CHECK.test(tel)) {
    return false;
  } else {
    return true;
  }
}
