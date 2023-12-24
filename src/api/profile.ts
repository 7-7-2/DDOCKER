import { doc, getFirestore, updateDoc, DocumentReference } from 'firebase/firestore'
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';
import { getUserId } from '@/api/user';
import { app } from '@/firebase.config';
import { Collections } from '@/types/types';

export const storage = getStorage(app);

// 생성된 문서를 가져오는 함수
export const getUserDocRef = async (): Promise<DocumentReference> => {
  const userId = (await getUserId()) as string;
  return doc(getFirestore(), Collections.USERS, userId);
};

// storage 에 이미지를 업로드 하는 함수
export const setStorageImg = async (path: string, file: File) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
  };

// storage 에 저장된 이미지를 다운로드 하는 함수
export const getStorageImg = async (path: string): Promise<string | void> => {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef).catch(error =>
    console.log('다운로드 실패:', error)
  );
};

// 생성된 문서에 다운로드 받은 이미지를 업데이트(수정, 추가) 하는 함수
export const setProfileImg = async (getUserDocRef: DocumentReference, filePath: string): Promise<void> => {
    const downloadURL = await getStorageImg(filePath);
    await updateDoc(getUserDocRef, {
      'user.profileUrl': downloadURL
    }).catch(error => console.log(error));
  };