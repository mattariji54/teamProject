<template>
  <main>
    <div class="finder-box">
      <h1>비밀번호 찾기</h1>
      <span class="finder-text">비밀번호를 잊어버리셨나요?</span>
      <form action="#" class="finder-form">
        <div class="finder-id input-block">
          <label class="finder-label" for="id">아이디</label>
          <div class="finder-field">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요."
              class="finder-field-input"
            />
            <button class="finder-field-btn" type="submit">확인</button>
          </div>
        </div>
        <div class="finder-email input-block">
          <label class="finder-label" for="email">이메일</label>
          <div class="finder-field">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="이메일을 입력하세요."
              class="finder-field-input"
            />
            <span>@</span>
            <select
              title="주소"
              name="email_domain"
              class="finder-field-domain"
            >
              <option value="">주소 선택</option>
              <option value="naver">naver.com</option>
              <option value="gmail">gmail.com</option>
              <option value="daum">daum.net</option>
            </select>
            <button class="finder-field-btn" type="submit" @click="emailAuth">인증 요청</button>
          </div>
        </div>
        <div class="finder-email-auth input-block">
          <label class="finder-label" for="email-auth">이메일 인증번호
            <span v-if="timerStarted && timeLeft > 0" class="timer">{{ minutes }}:{{ seconds }}</span>
            <button v-if="!timerStarted && timeLeft === 0" class="re-request-btn" @click="handleReRequest">재전송</button>
          </label>
          <div class="finder-field">
            <input
              type="text"
              id="email-auth"
              name="email-auth"
              placeholder="인증번호를 입력해주세요."
              class="finder-field-input"
            />
            <button class="finder-field-btn" type="submit">확인</button>
          </div>
        </div>
        <div class="finder-pw input-block">
          <label class="finder-label" for="password">비밀번호</label>
          <div class="finder-field">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
              class="finder-field-input"
            />
            <button class="finder-field-btn" type="submit">확인</button>
          </div>
        </div>
        <div class="finder-pw-check input-block">
          <label class="finder-label" for="pw-check">비밀번호 확인</label>
          <div class="finder-field">
            <input
              type="text"
              id="password-check"
              name="pw-check"
              placeholder="비밀번호 재입력"
              class="finder-field-input"
            />
            <button class="finder-field-btn" type="submit">확인</button>
          </div>
        </div>
        <button type="submit" class="finder-pw-btn" @click="goLogin">
          비밀번호 변경하기
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { useTimer } from "@/utils/timer";

export default {
  name: "FindPw",

  setup() {
    const router = useRouter();

    const goLogin = () => {
      router.push({ name: "Login" });
    };

    const { timeLeft, minutes, seconds, start, reset, timerStarted } = useTimer(180);

    function emailAuth() {
      start();
    }

    function handleReRequest() {
      reset();
    }

    return {
      goLogin,
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

main {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.finder-box {
  width: 500px;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}

h1 {
  margin-top: 21px;
  font-size: 30px;
}

.finder-text {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 15px;
  color: grey;
}

.input-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0;
  width: 100%;
  text-align: center;
}

.finder-label {
  margin-bottom: 10px;
  font-weight: bold;
}

.finder-field {
  display: flex;
  align-items: center;
  width: 404px;
  height: 35px;
}

.finder-field-input {
  flex: 1;
  padding: 5px 0 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  box-sizing: border-box;
  margin-right: 10px;
  width: 100px;
  height: 35px;
  outline: none;
}
.finder-field-btn {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}

input::placeholder {
  font-size: small;
}

.finder-field-domain {
  margin-right: 10px;
  margin-left: 10px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-radius: 10px;
  background-color: #fff !important;
  font-size: 12.3px;
}

.finder-pw-btn {
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 10px;
  background-color: #1a73e8;
  color: white;
  margin-top: 20px;
  font-weight: bold;
}
</style>
