import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="h-screen bg-background text-foreground">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
