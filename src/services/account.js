import axios from "axios";

export const checkIdDuplication = async (id) => {
  try {
    const response = await axios.post("/account/check-id", { id });
    return response.data.isDuplicate;
  } catch (error) {
    console.error("failed:", error);
    throw error;
  }
};

export const signupUser = async (formData) => {
  try {
    const response = await axios.post("/accoun/signup", formData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

// methods: {
//   async checkId() {
//     try {
//       const isDuplicate = await checkIdDuplication(this.formData.id);
//       this.idCheckMessage = isDuplicate ? '중복된 아이디가 있습니다.' : '사용 가능한 아이디입니다.';
//       console.log('ID Check Response:', this.idCheckMessage);
//     } catch (error) {
//       this.idCheckMessage = '아이디 중복 확인 중 오류가 발생했습니다.';
//       console.error('ID Check Error:', error);
//     }
//   },
//   async handleSubmit() {
//     try {
//       const response = await signupUser(this.formData);
//       console.log('Signup successful:', response);
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }
//   }
// }
