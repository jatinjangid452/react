import React from "react";

const user=[{
    name:"jatin",
    image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",

    deacription:"welcome to class",
}]  
const Header = () =>{
 return (
<>
<p>hi, my name is {user[0].name}</p> 
<img src={user[0].image} alt="" style={{width:'100px',height:'100px',borderRadius:'50px'}}/>
<p>{user[0].deacription}</p>
</>)
 };
// // function Header()
// // {

// // }

export default Header;