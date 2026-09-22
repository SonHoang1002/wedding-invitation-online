import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "./config"; // Giả sử đã export app

export const uploadImageToStorage = async (file: File, folder: string = "templates"): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const storage = getStorage(app);
      const fileName = `${new Date().getTime()}_${file.name}`;
      const storageRef = ref(storage, `${folder}/${fileName}`);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {
          // Có thể emit progress ở đây nếu cần (tùy chọn)
        },
        () => {
          console.error("Lỗi upload ảnh");
          reject(new Error("Lỗi upload ảnh"));
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    } catch {
      console.warn("Lưu ý: Bạn cần thiết lập Firebase Project và Security Rules để tính năng này hoạt động thật.");
      // Chế độ MOCK (Dùng khi chưa có backend thật)
      resolve(URL.createObjectURL(file)); 
    }
  });
};
