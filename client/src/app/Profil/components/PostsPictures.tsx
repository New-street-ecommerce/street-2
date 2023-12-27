import React,{useState} from 'react'
import AllPhotosPopUp from './AllPhotosPopUp';
// interface PostsPicturesProps {
//   posts: [];
// }
const PostsPictures: React.FC = ({ posts }) => {
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const handleClosePopUp = () => {
        setOpenPopup(!openPopup);
    }
    return (
        
      <div className="shadow  mt-4 mr-4 rounded-lg h-max w-[400px] bg-[#ffffff1a] p-2.5 ">
          <div className="flex justify-between">
            <span
              className="text-white font-sans text-[16px]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Pictures
            </span>
            <span
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
              className="font-sans text-[16px] text-[#6c5dd3] whitespace-nowrap font-normal cursor-pointer"
              onClick={() => setOpenPopup(true)}
            >
              See All Photos
            </span>
            {openPopup && (
              <AllPhotosPopUp  posts={posts} handleClosePopUp={handleClosePopUp} />
            )}
          </div>
          <div className="flex flex-wrap w-full h-full m-5 p-3 ">
            {posts?.map(
              (post: {
                id: React.Key | null | undefined;
                imageUrl: string | undefined;
              }) => {
                return (
                  <img
                    key={post.id}
                    src={post.picture}
                    className="flex w-[100px] h-[95px] m-1 rounded-md p-1 cursor-pointer"
                    alt=""
                  />
                );
              }
            )}
          </div>
        </div>
    
  )
}

export default PostsPictures
