"use client";

import { MdEdit } from "react-icons/md";
import { FaCamera, FaImages } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Modal from "react-modal";
import PostsPictures from "./components/PostsPictures";
import { storage } from "../firebase/config";
import { FaUpload, FaRegSave } from "react-icons/fa";

const Profil = () => {
  const [postContent, setPostContent] = useState("");
  const [postPicture, setPostPicture] = useState("");
  const [posts, setPosts] = useState<any>([]);
  const [artist, setArtist] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState<any>(false);
  const [modalContentType, setModalContentType] = useState<any>("");
  const [id, setId] = useState<any>("");
  const [profilePic, setProfilePic] = useState<any>("");
  const [coverPic, setCoverPic] = useState<any>("");
  const [postP, setPostP] = useState("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleImageChange = (e) => {
    const files = e.target.files[0];
    if (modalContentType === "gallery") {
      setPostP(files);
    } else if (modalContentType === "camera") {
      setProfilePic(files);
    } else if (modalContentType === "editProfile") {
      setCoverPic(files);
    }
  };

  const uploadPostP = (file: File) => {
    const storageRef = ref(storage, `Posts/${file.name}`);
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
          setPostP(downloadURL);
        });
      }
    );
  };

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
  const getAllPost = async () => {
    console.log(id);

    try {
      const response = await axios.get(
        `http://localhost:5000/posts/getAllPosts/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (id) {
      getAllPost()
        .then((data) => setPosts(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const updateCoverImage = async () => {
    try {
      await axios.put(
        `http://localhost:5000/artist/Profile/updateCoverPic/${id}`,
        {
          coverPic: coverPic,
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
  const getOneArtist = () => {
    axios
      .get(`http://localhost:5000/artist/Profile/get/${id}`)
      .then((response) => {
        console.log(response.data);

        setArtist(response.data);
      })
      .catch((error) => {
        console.error(
          "Error posting:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const updateProfilPic = async () => {
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
  const updatePostPic = async () => {
    try {
      await axios.put(
        `http://localhost:5000/posts/Profile/updatePostPic/${id}`,
        {
          postPicture: postPicture,
        }
      );
      console.log("post image successfully uploaded");
    } catch (error: any) {
      console.error(
        "Error posting:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/posts/Profile/Post/${id}`,
        {
          content: postContent,
          picture: postP,
        }
      );
      console.log("Post successful:", response.data);
      setPosts([...posts, response.data]);
    } catch (error: any) {
      console.error(
        "Error posting:",
        error.response ? error.response.data : error.message
      );
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setId(parsedUser.data.id);
    }
    if (id) {
      getOneArtist();
    }
  }, [id]);
  console.log(id, "ggggggggggggg");

  return (
    <div className="mb-10 ">
      <div className="md:flex md:flex-row-reverse flex justify-center w-full relative h-[450px] md:h-[550px] lg:h-[600px] mt-[50px]">
      <div className="md:flex md:flex-row-reverse justify-center items-center w-full relative h-[450px] md:h-[550px] lg:h-[600px] mt-[50px]">
  <div className="flex justify-center items-center">
    <img
      src={artist.coverPic}
      alt="Background"
      className="object-cover w-full h-[300px] md:h-full md:w-[70%]"
    />
    <button
      onClick={() => openModal("editProfile")}
      className="rounded-full h-9 w-9 bg-violet-700 p-3 flex absolute top-0 left-0 md:top-auto md:left-auto bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 md:translate-x-0 md:translate-y-0"
    >
      <MdEdit />
    </button>
  </div>
</div>
        <Link href="/Profil/EditProfil">
          <button className="bg-violet-700 text-white rounded-full py-2 px-4 flex items-center gap-2 absolute bottom-[-60px] right-[10px] md:right-[50%] md:transform md:-translate-x-1/2">
            <MdEdit /> Edit Profile
          </button>
        </Link>
      </div>
      <div className="flex  justify-center mb-5 md:mb-10">
        <div className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-full p-2 relative">
          <img
            src={artist.profilePic}
            alt="Avatar"
            className="rounded-full w-full h-full cursor-pointer"
          />
          <button
            onClick={() => openModal("camera")}
            className="bg-violet-700 w-6 h-6 rounded-full flex absolute left-3/4 top-3/4 justify-center items-center transform -translate-x-1/2 -translate-y-1/2"
          >
            <FaCamera className="text-white" />
          </button>
          <h1 className="text-white text-center text-xl mt-5 whitespace-nowrap font-semibold">
            {artist.username}
          </h1>
          <h4 className="text-white text-center text-lg mt-2 whitespace-nowrap font-semibold">
            {artist.bio}
          </h4>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal 1"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-md p-6 w-3/4 md:w-1/2 lg:w-1/3">
            <button
              className="text-black hover:text-gray-500 absolute top-3 right-3"
              onClick={closeModal}
            >
              <MdEdit />
            </button>

            <div className="flex flex-col space-y-4">
              <input
                type="file"
                accept="image/png"
                className="w-full p-2 border rounded border-gray-300 text-black bg-gray-200"
                onChange={handleImageChange}
              />

              <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>

              {modalContentType === "editProfile" && (
                <>
                  <button
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-500 flex items-center justify-center"
                    onClick={() => {
                      uploadCoverP(coverPic);
                    }}
                  >
                    <FaUpload className="mr-2" /> Upload Cover Picture
                  </button>
                  <button
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-500 flex items-center justify-center"
                    onClick={() => {
                      updateCoverImage(), window.location.reload();
                    }}
                  >
                    <FaRegSave className="mr-2" /> Update Cover Picture
                  </button>
                </>
              )}

              {modalContentType === "camera" && (
                <>
                  <button
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-500 flex items-center justify-center"
                    onClick={() => uploadProfilP(profilePic)}
                  >
                    <FaUpload className="mr-2" /> Upload Profile Picture
                  </button>
                  <button
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-500 flex items-center justify-center"
                    onClick={() => {
                      updateProfilPic(), window.location.reload();
                    }}
                  >
                    <FaRegSave className="mr-2" /> Update Profile Picture
                  </button>
                </>
              )}

              {modalContentType === "gallery" && (
                <button
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-500 flex items-center justify-center"
                  onClick={() => uploadPostP(postP)}
                >
                  <FaUpload className="mr-2" /> Upload Post Picture
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>

      <div className="md:flex md:flex-row justify-between items-start md:items-center gap-4 lg:gap-10">
        <div className="flex-1">
          <PostsPictures posts={posts} />
        </div>

        <div className="mb-10 mt-10 lg:mt-20 flex-1 lg:max-w-[700px]">
          <div className="bg-gray-500 bg-opacity-10 p-4 lg:p-10 text-white border border-gray-700 mx-auto rounded-lg">
            <div className="px-3 py-3 flex justify-center items-center border-b border-gray-700">
              <h2 className="text-xl font-bold text-center">Create Post</h2>
            </div>
            <div className="px-3 py-3">
              <div className="flex space-x-3 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={artist.profilePic}
                    alt="Profile Pic"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm">{artist.name}</h2>
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
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openModal("gallery")}
                  className="bg-violet-700 text-white rounded-full p-3 mb-5"
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

      {posts &&
        posts?.map((post) => (
          <div
            key={post.id}
            className="shadow mt-10 rounded-lg max-w-full md:max-w-[800px] bg-[#ffffff1a] mx-auto p-4"
          >
            <div className="flex items-center justify-between">
              
              <div className="flex space-x-2 items-center mr-[650px]">
                <img
                  src={artist.profilePic}
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div>
                <div className="font-semibold text-sm">{artist.username}</div>
                <span className="text-sm text-gray-500 font-bold">10h</span>
                <br />
                <span className="font-semibold text-xs">Public</span>
                </div>
              </div>
       
            </div>

            <div className="text-justify py-2">
              <p className="text-white text-[16px]">{post.content}</p>
              <img
                src={post.picture}
                alt="Post"
                className="mt-4 mb-4 rounded-md w-full"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Profil;
