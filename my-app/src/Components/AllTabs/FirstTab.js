import React ,{useEffect}from 'react'
import SeachBox from "../../Components/SearchBox"
import Card from '../Card'
import Pagination from '../pagination';

const FirstTab = ({post,postsPerPage,paginate,currentPage,setSearchValue}) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post?.slice(indexOfFirstPost, indexOfLastPost);
  return (
  <>
  <div style={{marginLeft:"100px"}}>
  <SeachBox setSearchValue={setSearchValue}/>
  </div>
    <div className='cardcontainer'>
    {currentPosts.map((p)=>(<Card p={p} />))}
    </div>
    <div style={{display:"flex",justifyContent: "flex-end", marginRight:"115px"}}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
      </div>
  </>
  )
}

export default FirstTab;