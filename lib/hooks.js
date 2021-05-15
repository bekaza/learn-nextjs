import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth, firestore } from "../lib/firebase";

const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubcribe;
    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubcribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubcribe;
  }, [user]);

  return { user, username };
};

export default useUserData;
