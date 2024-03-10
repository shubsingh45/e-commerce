import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import { man_product } from './Assests/all_product';

const Product = () => {
 const {id} = useParams();
//  const productname = {id}.item

 const [data, setData] = useState({
  // id:"",
  image: "",
  name:"",
  old_price:"",
  new_price:"",
 })
 useEffect(()=>{
  async function getData(){
    const _doc = man_product(id)
     const _data = await man_product(_doc);
    setData(_data.data())

  }
  getData();
 },[])


  return (
    <div>
  {/* {productname} */}
  <div>
    <img src={data.img} alt="" />
    <p></p>
  </div>
hllllllll
    </div>
  )
}

export default Product