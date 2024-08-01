<template>
  <main>
    <div class="login-container">
      <form action="#" class="signup-form">
        <h1>로그인</h1>
        <div class="signup-id input-block">
          <label class="signup-label" for="id"
            >아이디<span class="signup-id-find" @click="FindId">아이디 찾기</span
            ></label>
          <div class="signup-field">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요."
              class="signup-field-input"
              v-model="formData.userid"
            />
          </div>
        </div>
        <div class="signup-pw input-block">
          <label class="signup-label" for="id"
            >비밀번호<span class="signup-pw-find" @click="FindPw"
              >비밀번호 찾기</span
            ></label
          >
          <div class="signup-field">
            <input
              type="text"
              id="pw"
              name="id"
              placeholder="비밀번호를 입력하세요."
              class="signup-field-input"
              v-model="formData.password"
            />
          </div>
        </div>
        <button type="submit" class="signup-login-btn" @click="Complete">
          로그인
        </button>
        <div class="signup-social">
          <button type="submit" class="signup-social-btn">
            <img
              src="../assets/image/google.png"
              alt="구글 로그인"
              class="signup-social-image"
            />
          </button>
          <button type="submit" class="signup-social-btn">
            <img
              src="../assets/image/naver.png"
              alt="네이버 로그인"
              class="signup-social-image"
            />
          </button>
          <button type="submit" class="signup-social-btn">
            <img
              src="../assets/image/kakao.png"
              alt="카카오 로그인"
              class="signup-social-image"
            />
          </button>
        </div>
        <p class="signup-account">
          아직 회원이 아니신가요?<span
            class="signup-join"
            @click="createAccount"
            >회원가입</span
          >
        </p>
      </form>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
// import axios from 'axios';

export default {
  name: "Login",

  setup() {
    const router = useRouter();
    const formData = reactive({
      userid: "",
      password: "",
    });
    console.log(formData);

    // 로그인 성공 시 메인으로 이동
    const Complete = () => {
      router.push({ name: "Home" });
    };

    // 로그인 버튼 클릭 시 서버에 요청 후 확인되면 로그인?
    // const Complete = async() => {
    //   try {
    //     const response = await axios.post("", {
    //       userid: formData.userid,
    //       password: formData.password
    //     });

    //     if (response.data.success) {
    //       router.push({ name: "Home" });
    //     } else {
    //       // 로그인이 알맞지 않은지, 비밀번호가 알맞지 않은지 메시지
    //       alert('로그인 실패: ' + response.data.message);
    //     }
    //   } catch (error) {
    //     console.log("로그인 오류: ", error);
    //     alert('서버 오류 발생');
    //   }
    // };

    // 회원가입 페이지로 이동
    const createAccount = () => {
      router.push({ name: "Account" });
    };

    // 아이디 찾기로 이동
    const FindId = () => {
      router.push({ name: "FindId" });
    };

    // 비밀번호로 이동
    const FindPw = () => {
      router.push({ name: "FindPw" });
    };

    return {
      Complete,
      createAccount,
      FindId,
      FindPw,
      formData,
    };
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.164);
}

h1 {
  text-align: center;
  font-weight: bold;
  margin: 8px 0;
}

.input-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  width: 100%;
}

.signup-pw {
  position: relative;
  top: 10px;
}

.signup-label {
  margin-bottom: 10px;
  font-weight: bold;
}

.signup-field {
  display: flex;
  width: 404px;
  height: 35px;
}

.signup-field-input {
  flex: 1;
  padding: 5px 0px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  box-sizing: border-box;
  margin-right: 10px;
  width: 100px;
  height: 35px;
  outline: none;
}

.signup-id-find {
  margin-left: 283px;
  font-size: 12px;
  color: #1a73e8;
  cursor: pointer;
}

.signup-pw-find {
  margin-left: 256px;
  font-size: 12px;
  color: #1a73e8;
}

.signup-login-btn {
  width: 394px;
  height: 35px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;
  background-color: #1a73e8;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.signup-social {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.signup-social-btn {
  width: 55px;
  height: 50px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  margin: 0 7px;
  font-weight: bold;
}

.signup-social-image {
  width: 60px;
  height: 48px;
  border-radius: 10px;
}

.signup-account {
  font-size: 14px;
  margin-top: 35px;
  margin-left: 80px;
  position: relative;
}
.signup-join {
  margin-left: 20px;
  color: #1a73e8;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>
