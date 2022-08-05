import React from 'react';
import ReactDOM from 'react-dom/client';
import {useEffect,useState} from "react";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import axios from "axios";
import "./styles.css"

function App() {
  const [post, setPost]=useState({});
  const [loading,setloading]=useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  let requestposts=[];
  let userposts=[];
  if(!loading){
  requestposts=post.filter((p)=>(p.tag==="request"))
  userposts=post.filter((p)=>(p.tag==="user"))

  }

  const paginate = pageNumber => setCurrentPage(pageNumber);
	const getBlogRequest = async() => {
		const url = "https://media-content.ccbp.in/website/react-assignment/resources.json";
		const response = await axios.get(url);
    setloading(false)
    setPost(response.data)
	};
	useEffect(() => {
		getBlogRequest()
	},[]);

  return (
    <>
    <Header/>
    {loading && <h2>Loading... Please Wait</h2>}
    {!loading &&<>
      <Tabs post={post} currentRequestPosts={requestposts} currrentUserPosts={userposts} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage}/>
      </>}
    </>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
