<template>
  <main>
    <form @submit.prevent="handleSubmit" method="post" class="signup">
      <div class="signup-container">
        <h1>회원가입</h1>
        <p>회원이 되어 다양한 헤택을 경험해 보세요!</p>
        <div class="choose-member">
          <label class="general-user">
            <input
              type="radio"
              name="contact"
              value="user"
              v-model="formData.contact"
            />
            <span>일반 회원</span>
          </label>
          <label>
            <input
              type="radio"
              name="contact"
              value="teacher"
              v-model="formData.contact"
            />
            <span>강사</span>
          </label>
        </div>
        <div class="signup-id input-block">
          <label class="signup-label" for="id">아이디</label>
          <div class="signup-field">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요."
              class="signup-input"
              v-model="formData.id"
            />
            <button type="submit" class="signup-btn" @click="checkId">
              중복 확인
            </button>
          </div>
        </div>
        <div v-if="idCheckMessage" class="id-check-message">
          {{ idCheckMessage }}
        </div>
        <div class="signup-pw input-block">
          <label class="signup-label" for="password">비밀번호</label>
          <div class="signup-field">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
              class="signup-input"
              v-model="formData.password"
            />
          </div>
        </div>
        <div class="signup-pw-check input-block">
          <label class="signup-label" for="password-check"
            >비밀번호 확인
            <!-- 일치하면 메세지 -->
            <span v-if="passwordCheck && passwordMatch" class="password-match"
              >일치합니다</span
            >
            <!-- 불일치하면 메세지 -->
            <span
              v-if="passwordCheck && !passwordMatch"
              class="password-mismatch"
              >일치하지 않습니다</span
            >
          </label>
          <div class="signup-field">
            <input
              type="password"
              id="password-check"
              name="passwordcheck"
              placeholder="비밀번호 재입력"
              class="signup-input"
              v-model="passwordCheck"
            />
          </div>
        </div>
        <div class="signup-name input-block">
          <label class="signup-label" for="name">이름</label>
          <div class="signup-field">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름을 입력해주세요."
              class="signup-input"
              v-model="formData.name"
            />
          </div>
        </div>
        <div class="signup-phone input-block">
          <label class="signup-label" for="phone">전화번호</label>
          <div class="signup-field">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="전화번호를 입력해주세요."
              class="signup-input"
              v-model="formData.phone"
            />
          </div>
        </div>
        <div class="signup-email input-block">
          <label class="signup-label" for="email">이메일</label>
          <div class="signup-field">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              class="signup-input"
              v-model="emailLocalPart"
            />
            <span class="at">@</span>
            <select
              title="주소"
              name="email-domain"
              class="signup-email-domain"
              v-model="emailDomain"
            >
              <option value="">주소 선택</option>
              <option value="naver">naver.com</option>
              <option value="gmail">gmail.com</option>
              <option value="daum">daum.net</option>
            </select>
            <button type="submit" class="signup-btn" @click="emailAuth">
              인증 요청
            </button>
          </div>
        </div>
        <div class="signup-email-auth input-block">
          <label class="signup-label" for="email-number"
            >이메일 인증번호
            <span v-if="timerStarted && timeLeft > 0" class="timer"
              >{{ minutes }}:{{ seconds }}</span
            >
            <button
              v-if="!timerStarted && timeLeft === 0"
              class="re-request-btn"
              @click="handleReRequest"
            >
              재전송
            </button>
          </label>
          <div class="signup-field">
            <input
              type="text"
              id="email-number"
              name="email-number"
              placeholder="인증번호를 입력해주세요."
              class="signup-input"
            />
            <button type="submit" class="signup-btn">확인</button>
          </div>
        </div>
        <div class="signup-terms">
          <label class="signup-terms-label">
            <input
              type="checkbox"
              name="terms"
              value="agree"
              @click="selectAll"
            />
            <span class="signup-terms-text"
              >이용약관 전체 동의<span @click="goTos">&#62;</span></span
            >
          </label>
          <label class="signup-terms-label">
            <input
              type="checkbox"
              name="terms1"
              value="agree-1"
              id="agree01"
              v-model="agree01"
            />
            <span class="signup-terms-text"
              >이용약관 동의(필수)<span @click="goTos">&#62;</span></span
            >
          </label>
          <label class="signup-terms-label">
            <input
              type="checkbox"
              name="terms2"
              value="agree-2"
              id="agree02"
              v-model="agree02"
            />
            <span class="signup-terms-text"
              >개인정보 수집 및 이용 동의(필수)<span @click="goTos"
                >&#62;</span
              ></span
            >
          </label>
          <label class="signup-terms-label">
            <input
              type="checkbox"
              name="terms3"
              value="agree-3"
              id="agree03"
              v-model="agree03"
            />
            <span class="signup-terms-text"
              >프로모션 정보 수신 동의(선택)<span @click="goTos"
                >&#62;</span
              ></span
            >
          </label>
        </div>
        <button class="signup-terms-btn" type="submit" @click="account">회원가입</button>
        <p class="signup-account-check">
          이미 계정이 있으신가요?<span
            class="signup-account-check-text"
            @click="goLogin"
            >로그인 하기</span
          >
        </p>
      </div>
    </form>
  </main>
</template>

<script>
import { reactive, watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTimer } from '@/utils/timer';
// import { sendAuthEmail } from "@/api/email";

export default {
  name: "Account",

  // 페이지 이동 코드
  setup() {
    const router = useRouter();
    const formData = reactive({
      contact: "",
      id: "",
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
      email: "",
    });
    console.log(formData);

    const idCheckMessage = ref("");
    const passwordCheck = ref("");
    const passwordMatch = ref(false);
    const emailLocalPart = ref("");
    const emailDomain = ref("");

    // 비밀번호 확인 코드
    watch(
      () => formData.password,
      (val) => {
        passwordMatch.value = val === passwordCheck.value;
      }
    );
    watch(
      () => passwordCheck.value,
      (val) => {
        passwordMatch.value = val === formData.password;
      }
    );
    // 이메일 변화 시 updateEmail() 호출
    // 이메일 저장 및 업데이트는 따로 파일을 만들어서 하는게 나을 듯? (회원가입, 아이디 찾기, 비밀번호 찾기 페이지에서 같이 사용해서?)
    watch(
      () => [emailLocalPart.value, emailDomain.value],
      () => {
        updateEmail();
      }
    );
    
    const updateEmail = () => {
      if (emailLocalPart.value && emailDomain.value) {
        formData.email = `${emailLocalPart.value}@${emailDomain.value}.com`;
      } else {
        formData.email = emailLocalPart.value;
      }
    };

    // 아이디 중복 확인 요청?
    // const message = ref("");
    // const checkId = async () => {
    //   try {
    //     const response = await axios.post("", formData.id);
    //     if (response.data.success) {
    //       message.value = "사용 가능한 아이디입니다.";
    //     } else {
    //       message.value = "중복된 아이디입니다.";
    //     }
    //   } catch (error) {
    //     console.log("아이디 중복 확인 요청 실패: ", error)
    //   }
    // };

    const goTos = () => {
      router.push({ name: "Tos" });
    };

    const goLogin = () => {
      router.push({ name: "Login" });
    };

    const account = () => {
      router.push({ name: "Login" });
    };

    // 서버에 사용자 회원가입 데이터 전송 코드?
    // const account = async () => {
    //   try {
    //     const response = await axios.post("", formData);
    //     if (response.data.success) {
    //       router.push({ name: "Login" });
    //     } else {
    //       alert("로그인 실패: " + response.data.message);
    //     }
    //   } catch (error) {
    //     console.log("오류", error);
    //     alert("서버 통신 오류");
    //   }
    // };

    const selectAll = () => {
      const allSelected = agree01.value && agree02.value && agree03.value;
      agree01.value = !allSelected;
      agree02.value = !allSelected;
      agree03.value = !allSelected;
    };

    // tos에서 선택한 동의 선택 데이터 가져오기
    const route = useRoute();
    const query = route.query;

    const agree01 = ref(query.agree01 === "true");
    const agree02 = ref(query.agree02 === "true");
    const agree03 = ref(query.agree03 === "true");

    const { timeLeft, minutes, seconds, start, reset, timerStarted } = useTimer(2);

    // 서버에 이메일 인증 요청?
    // const emailAuth = async() => {
    //   const email = this.formData.email;
    //   if (email) {
    //     try {
    //       await sendAuthEmail(email);
    //       start();
    //     } catch (error) {
    //       this.errorMessage = "인증번호가 틀렸습니다.";
    //       console.error(error);
    //     }
    //   }
    // };

    // const handleReRequest = () => {
    //   reset();
    //   const email = this.formData.email;
    //   if (email) {
    //     sendAuthEmail(email)
    //     .then(() => {
    //       console.log(`${email}`);
    //     })
    //     .catch(error => {
    //       this.errorMessage = "인증번호가 틀렸습니다.";
    //       console.error(error);
    //     })
    //   }
    // };

    function emailAuth() {
      start();
    }

    function handleReRequest() {
      reset();
    }

    return {
      formData,
      idCheckMessage,
      passwordCheck,
      passwordMatch,
      emailLocalPart,
      emailDomain,
      updateEmail,
      goTos,
      goLogin,
      account,
      agree01,
      agree02,
      agree03,
      selectAll,
      timeLeft,
      minutes,
      seconds,
      timerStarted,
      emailAuth,
      handleReRequest,
    };
  },
};
</script>

<style scoped>
.timer {
  color: red;
  font-size: 14px;
  margin-left: 170px;
}

.re-request-btn {
  margin-left: 170px;
  border: none;
  background-color: white;
  color: blue;
}

.password-match {
  margin-left: 225px;
  font-size: 14px;
  color: blue;
}

.password-mismatch {
  margin-left: 180px;
  font-size: 14px;
  color: red;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup {
  margin-top: 50px;
}

.signup-container {
  width: 500px;
  height: 1300px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.signup-container h1 {
  margin: 22px 0px;
}

.signup-container p {
  margin: 20px 0px;
}

.general-user::after {
  content: "|";
  color: rgba(0, 0, 0, 0.356);
  margin: 5px;
}

.input-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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

.signup-input {
  flex: 1;
  padding: 5px 0px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  box-sizing: border-box;
  width: 100px;
  height: 35px;
  outline: none;
}

.signup-btn {
  padding: 8px 16px;
  margin-left: 10px;
  font-weight: bold;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.signup-id,
.signup-pw,
.signup-pw-check,
.signup-name,
.signup-phone,
.signup-email,
.signup-email-auth,
.signup-account-check {
  margin: 30px 0px 0px 40px;
}

input::placeholder {
  font-size: small;
}

.at {
  margin: 8px 0px 5px 10px;
}

.signup-email-domain {
  margin-left: 10px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  background-color: white !important;
  border-radius: 10px;
  font-size: 13.3333px;
  color: rgba(0, 0, 0, 0.616);
  outline: none;
}

.signup-terms {
  width: 380px;
  text-align: left;
  margin-top: 10px;
  margin: 30px 0px 0px 40px;
}

.signup-terms-label {
  display: block;
  margin-top: 20px;
  font-weight: bold;
}

.signup-terms-text span {
  font-size: 14px;
  font-weight: bold;
  float: right;
  cursor: pointer;
}

.signup-terms-text {
  margin-left: 5px;
  font-size: 13px;
}

.signup-terms-btn {
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin: 40px 0px 0px 125px;
}

.signup-account-check-text {
  color: #007bff;
  margin-left: 20px;
  margin-right: 45px;
  cursor: pointer;
}
</style>
