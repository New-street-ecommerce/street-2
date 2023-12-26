import React from 'react';

interface AllPhotosPopUpProps {
    handleClosePopUp: () => void;
}

const AllPhotosPopUp: React.FC<AllPhotosPopUpProps> = ({ handleClosePopUp,posts }) => {
console.log(posts,'gbhnhn');


  return (
    <div
    id='ProfilePicturesPopUp'
    onClick={handleClosePopUp}
    className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm  overflow-y-auto'>

      <div
        className='w-full p-3 justify-center items-center'>
        <React.Fragment>
        <div className="px-4 mt-5 shadow w-auto self-center rounded-lg dark:bg-dark-second">
            <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
            <img className='flex  h-[500px] mt-10 rounded-md p-1' src="" alt=""  />
            {posts.map(e=>{
              return <div>
<img src={e.picture} />
              </div>
            })}

            </div>
        </div>
    </React.Fragment>
  </div>
      </div>

  )
}

export default AllPhotosPopUp