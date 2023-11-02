import { toast } from "react-toastify";

const sendTele = async (message) => {
  const token = '5707387674:AAFVS_oBVCiPvi0e0EavpKyMNg0cx9ss0mQ';
  const chatId = '1216230336';

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Error sending message to Telegram');
    }


    return true;
  } catch (error) {
    console.error('Error:', error);

    return false;
  }
};

export default sendTele;
