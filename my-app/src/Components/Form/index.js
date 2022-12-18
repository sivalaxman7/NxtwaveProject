import React from 'react';
import { ReactComponent as FormIcon } from "../../../src/formicon.svg";
import axios from "axios";
import { toast } from 'react-toastify'

const index = ({setShowUsers}) => {
    const getBlogRequest = async(data) => {
	// 	const url = "https://media-content.ccbp.in/website/react-assignment/add_resource.json";
	// 	const response = await axios.get(url,{
    //         params: data
    // });
    toast("Created Successfully")
	};
return (
    <>
    <a href="#" class="previous" onClick={()=>{setShowUsers(false)}}>&laquo; users</a>
    <div className='flex'>
    <div className='form'>
        <div className='Heading'>Item Details</div>
        <form>
        <label className='itemlabel'>Item Name</label>
        <div>
        <input className='itemname' name='itemname' required/>
        </div>
        <label className='itemlabel'>Link</label>
        <div>
        <input className='itemname' name='link' required/>
        </div>
        <label className='itemlabel'>Resource Name</label>
        <div>
        <input className='itemname' name='resourcename' required/>
        </div>
        <label className='itemlabel Descrition'>Descrition</label>
        <div>
        <textarea name='descrition' className='itemname' rows="10" style={{height:"100px"}} required/>
        </div>
        <button onClick={(e)=>{e.stopPropagation();
        getBlogRequest()

        }} className='createbutton'>create</button>
        </form>
    </div>
    <div className='formicon'>
    <FormIcon/>
    </div>
    </div>
    </>
  )
}

export default index