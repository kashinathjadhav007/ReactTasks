import React,{useState,useEffect} from "react";

const GetAPI=()=>
{
    const[data,setData]=useState([]);
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>
        {
            console.log("in fetch")
            result.json().then((response)=>
            {
                setData(response);
                console.log("in json")
            })
            console.log(result)
        })
    })
    console.log(data)
    return(
        <>
        <h2>Fetched data</h2>
        <table border="1">
            <tr>
                <td>userId</td>
                <td>Name</td>
                <td>user Name</td>
                <td>Email address</td>
            </tr>
            {
            data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
            </tr>)
            }
        </table>
        </>
    )
}

export default GetAPI;