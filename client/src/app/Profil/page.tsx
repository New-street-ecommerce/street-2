"use client";

import { MdEdit } from "react-icons/md";
import { FaCamera, FaImages } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Modal from "react-modal";
import PostsPictures from "./components/PostsPictures";
import { storage, storage, storage } from "../firebase/config";
import { error } from "console";

const Profil = () => {
  const [postContent, setPostContent] = useState("");
  const [postPicture, setPostPicture] = useState("");
  const [posts, setPosts] = useState<any>([]);
  const [artist, setArtist] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState<any>(false);
  const [modalContentType, setModalContentType] = useState<any>("");
  const [id, setId] = useState<string>("");
  const [profilePic, setProfilePic] = useState<any>("");
  const [coverPic, setCoverPic] = useState<any>("");

  const handleImageChange = (e) => {
    const files = e.target.files[0];
    if (modalContentType === "post") {
      setPostPicture(files);
    } else if (modalContentType === "camera") {
      setProfilePic(files);
    } else if (modalContentType === "editProfile") {
      setCoverPic(files);
    }
  };


  const uploadPostP=(file:File)=>{
const storageRef = ref(storage,`Posts/${file.name}`)
const uploadTask=uploadBytesResumable(storageRef,file)
uploadTask.on(
  "state_changed",
  (snapshot)=>{
    const progress= (snapshot.bytesTransferred/snapshot.totalBytes)*100
  console.log(progress);
  
  },
  (error)=>{
console.error(error);

  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
      console.log(downloadURL,"download");
      setPostPicture(downloadURL)
    })
  }
)
  }





  const uploadCoverP = (file: File) => {
    const storageRef = ref(storage, `Cover/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "download");
          setCoverPic(downloadURL);
        });
      }
    );
  };

  const uploadProfilP = (file: File) => {
    const storageRef = ref(storage, `Profile/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "download");
          setProfilePic(downloadURL);
        });
      }
    );
  };

  const openModal = (type: any) => {
    setModalContentType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setId(parsedUser.data.id);
    }
  }, []);

  const uploadCoverImage = async () => {
    try {
      await axios.put(
        `http://localhost:5000/artist/Profile/updateCoverPic/${id}`,
        {
          coverPic: "GHFJ.HF.",
        }
      );
      console.log("Upload coverpic successful:");
    } catch (error: any) {
      console.error(
        "Error posting:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const uploadProfilPic = async () => {
    try {
      await axios.put(`http://localhost:5000/artist/Profile/updatePfp/${id}`, {
        profilePic: profilePic,
      });
      console.log("Profileimg successfully uploaded");
    } catch (error: any) {
      console.error(
        "Error posting:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const uploadPostPic = async () => {
    try {
      await axios.put(`http://localhost:5000/posts/Profile/updatePostPic/${id}`, {
        postPicture:postPicture
      })
      console.log("post image successfully uploaded");
      
    } catch (error:any) {
      console.error("Error posting:",error.response ? error.response.data : error.message);
      
    }
  }

  const handlePost = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/posts/Profile/Post/${id}`,
        {
          content: postContent,
          picture: postPicture,
        }
      );
      console.log("Post successful:", response.data);
      setPosts([...posts, response.data]);
    } catch (error:any) {
      console.error(
        "Error posting:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="mb-10 relative">
      <div className="flex justify-between h-[450px] md:h-[550px] lg:h-[600px] relative">
        <img
          src="https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/instagram-fuer-unternehmen-t.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <button
          onClick={() => openModal("editProfile")}
          className="rounded-full h-9 w-9 bg-violet-700 p-3 flex absolute top-[79%] left-[95%] md:top-[85%] transform -translate-y-1/2"
        >
          <MdEdit className="text-white" />
        </button>
        <Link href="/Profil/EditProfil">
          <button className="bg-violet-700 text-white rounded-full py-2 px-4 flex items-center gap-2 absolute bottom-[-60px] right-[10px] transform -translate-x-1/2">
            <MdEdit />
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center mb-5 md:mb-10">
        <div className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-full p-2 relative">
          <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="Avatar"
            className="rounded-full w-full h-full cursor-pointer"
          />
          <button
            onClick={() => openModal("camera")}
            className="bg-violet-700 w-6 h-6 rounded-full flex absolute left-[70%] top-[80%] justify-center items-center"
          >
            <FaCamera className="text-white" />
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal 1"
            className="bg-white"
          >
            <div className="p-4 flex flex-col space-y-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-[50px]"
                onClick={closeModal}
              >
                x
              </button>

              <input
                type="file"
                accept="image/png"
                className="self-center mb-5"
                onChange={(e)=>handleImageChange(e)}
              />

              {modalContentType === "editProfile" && (
                <>
                  <button className="mb-5 bg-indigo-500 rounded-[10px] self-center justify-center gap-2.5 inline-flex w-[150px]">
                    Upload Cover Picture
                  </button>
                  <button
                    className="mb-5 bg-indigo-500 rounded-[10px] self-center justify-center gap-2.5 inline-flex w-[150px]">
                    Up-date Cover Picture
                  </button>
                </>
              )}

              {modalContentType === "camera" && (
                <>
                  <button className="mb-5 bg-indigo-500 rounded-[10px] self-center justify-center gap-2.5 inline-flex w-[150px]">
                    Upload Profile Picture
                  </button>
                  <button
                    onClick={uploadProfilPic}
                    className="mb-5 bg-indigo-500 rounded-[10px] self-center justify-center gap-2.5 inline-flex w-[150px]"
                  >
                    Update Profile Picture
                  </button>
                </>
              )}
            </div>
          </Modal>
        </div>
      </div>
      <div className="flex justify-center gap-[50px]">
        <div className="">
          <PostsPictures />
        </div>
        <div className="mb-10 mt-10 lg:mt-20 w-[700px]">
          <div className="bg-gray-500 bg-opacity-10 p-4 lg:p-10 text-white max-w-full border border-gray-700 mx-auto rounded-lg">
            <div className="px-3 py-3 flex justify-center items-center border-b border-gray-700">
              <h2 className="text-xl font-bold text-center">Create Post</h2>
            </div>
            <div className="px-3 py-3">
              <div className="flex space-x-3 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm">{posts.name}</h2>
                  <div className="bg-gray-700 rounded-md px-2 py-1 flex items-center cursor-pointer">
                    <span className="font-semibold text-xs">Public</span>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <textarea
                  id="content"
                  placeholder="What's on your mind?"
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full bg-transparent resize-none text-2xl text-white outline-none placeholder-gray-400 focus:placeholder-gray-500"
                ></textarea>
              </div>
              <div className="flex justify-between items-center right-8">
              <button
            onClick={() => openModal("gallery")}
            className="bg-violet-700 text-white  rounded-full p-3 mb-5"
          >
            <FaImages className="text-2xl" />
          </button>
          </div>
              <button
                className="w-full bg-violet-500 mt-3 rounded-full py-4 text-white font-bold text-xl"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          
          </div>
        </div>
      </div>
      <>
        {posts.map((post) => (
          <div
            key={post.id}
            className="shadow mt-10 rounded-lg max-w-full md:max-w-[800px] bg-[#ffffff1a] mx-auto p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <PostsPictures />
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src={artist.ProfilePic}
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <span className="text-sm text-gray-500 font-bold">10h</span>
              </div>
              <div className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer"></div>
            </div>
            <div className="text-justify py-2">
              <p className="text-white text-[16px]">{post.content}</p>
              {post.picture && (
                <img
                  src={post.picture}
                  alt="Post"
                  className="mt-4 mb-4 rounded-md w-full"
                />
              )}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Profil;
