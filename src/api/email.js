import axios from 'axios';

export async function sendAuthEmail(email) {
    try {
        const response = await axios.post('/api/send-auth-email', { email });
        return response.data;
    } catch (error) {
        throw new Error("이메일 보내기 실패");
    }
}