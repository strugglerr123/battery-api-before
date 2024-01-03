let url = "https://jsonplaceholder.typicode.com/users";
import Axios  from "axios";
// let xhr=new XMLHttpRequest();
// xhr.open("GET",url,true);

// xhr.onreadystatechange=()=>{
//     if(xhr.readyState===4&&xhr.status===200){
//         let a=xhr.responseText;
//         // document.write(a)
//         console.log(JSON.parse(a));
//     }
//     else{
//         console.log(xhr.statusText);
//     }
// }

// xhr.send();

// let fetch_data=()=>{
//     fetch(url).then((data)=>{
//         // console.log(data.json());
//         return data.json();
//     }).then((res)=>{
//         console.log(res);
//     })
// }



// fetch_data();

// let fetch_data_2=async ()=>{
//     let a=await fetch(url);
//     // console.log(a);
//     return a.json();
// }

// fetch_data_2().then((res)=>{
//     console.log({res});
// });

// let fetch_axios=()=>{
//     Axios.get(url).then((e)=>{
//         console.log(e);
//     }).catch((e)=>{
//         console.log(e);
//     })
// }

// fetch_axios();

let func=async ()=>{
    let data=await Axios.get(url);
    console.log(data); 
};

func();

console.log()