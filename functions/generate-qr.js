import QRCode from 'qrcode';

export const generateQR = async (text) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(text);
    return qrCodeDataURL;
  } catch (error) {
    console.error("Failed to generate QR code:", error);
    throw error;
  }
};
