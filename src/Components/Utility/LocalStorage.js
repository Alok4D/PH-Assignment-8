// import { toast } from "react-toastify";

// export const SaveToLocalStroage = (data) => {
//     let saveData = JSON.parse(localStorage.getItem("readAllReady")) || [];
//     if (!Array.isArray(saveData)) {
//         saveData = [];
//     }
//     const existingDataIndex = saveData.findIndex((item) => item.id === data.id);
//     if (existingDataIndex === -1) {
//         saveData.push(data);
//         localStorage.setItem("readAllReady", JSON.stringify(saveData));
//         toast.success("Card Data Applied Successfully!")
//     } 
//     else {
//         toast.error("Read this all ready!");
        
//     }
// };
// export const GetReadLocalStroge = () =>{
//     const data = JSON.parse(localStorage.getItem("readAllReady")) || [];
//     return data;
// }



// export const setToLocalWishlist = (dwata) => {
//     let saveData = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
//     if (!Array.isArray(saveData)) {
//         saveData = [];
//     }
//     const existingDataIndex = saveData.findIndex((item) => item.id === dwata.id);
//     if (existingDataIndex === -1) {
//         saveData.push(dwata);
//         localStorage.setItem("WishListAllReady", JSON.stringify(saveData));
        toast.success("Card Data Applied Successfully!");
        
//     } 
//     else {
//         toast.error("Read this all ready");
        
//     }  
// }
// export  const setToLocalWishlists =()=>{
//     const dwata = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
//     return dwata;
// }

// 

import { toast } from "react-toastify";

export const SaveToLocalStroage = (data) => {
    let saveData = JSON.parse(localStorage.getItem("readAllReady")) || [];
    if (!Array.isArray(saveData)) {
        saveData = [];
    }
    const existingDataIndex = saveData.findIndex((item) => item.id === data.id);
    console.log(existingDataIndex);
    if (existingDataIndex ===  -1) {
       
        saveData.push(data);
        localStorage.setItem("readAllReady", JSON.stringify(saveData));
        toast.success("Card Data Applied Successfully!");
    } 
    else {
        toast.error("Read this already!");
    }
};
export const GetReadLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("readAllReady")) || [];
    return data;
};




export const setToLocalWishlist = (data) => {
    let saveData = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
    if (!Array.isArray(saveData)) {
        saveData = [];
    }
    const existingDataIndex = saveData.findIndex((item) => item.id === data.id);
    if (existingDataIndex === -1) {
        saveData.push(data);
        localStorage.setItem("WishListAllReady", JSON.stringify(saveData));
        toast.success("Card Data Applied Successfully!");
    } 
    else {
        toast.error("Already in the wishlist");
    }
};

export const getFromLocalWishlist = () => {
    const data = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
    return data;
};


