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

    toast.success('Pesan berhasil terkirim!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return true;
  } catch (error) {
    console.error('Error:', error);

    toast.error('Gagal mengirim pesan ke Telegram!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return false;
  }
};

export default sendTele;
