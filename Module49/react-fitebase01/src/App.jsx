import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "./Firebase/firebase"
import { useState } from "react"
import UserCard from "./Components/UserCard";

function App() {

  const [userData, setUserData] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handelSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUserData(res.user);
        console.log("Successfully Sign In  !!")
        console.log(userData)
        console.log(res.user)
      })
      .catch(error => {
        console.log("ERROR : ", error);
        setUserData(null);
      })
  }

  const handelSignInWithGithub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(res => {
        setUserData(res.user);
        console.log("Successfully Sign In  !!")
        console.log(userData)
        console.log(res.user)
      })
      .catch(error => {
        console.log("ERROR : ", error);
        setUserData(null);
      })
  }

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful !!");
        setUserData(null);
      })
      .catch(error => {
        console.log("Sign Out Error : ", error);
        setUserData(null);
      });
  }


  return (
    <>
      <div>
        <h1 className="text-3xl text-center">Simple FireBase</h1>
        <div className="flex gap-8 justify-center my-5">
          {
            !userData &&
            <div className="space-x-2">
              <button onClick={handelSignInWithGoogle} className="btn border-white hover:border-white text-lg">Sign In With Google</button>
              <button onClick={handelSignInWithGithub} className="btn border-white hover:border-white text-lg">Sign In With Github</button>
            </div>
          }
          {
            userData && <button onClick={handelSignOut} className="btn border-white hover:border-white text-lg">Sign Out</button>
          }
        </div>
      </div>
      <hr />
      {
        userData && <UserCard userData={userData}></UserCard>
      }
    </>
  )
}

export default App
