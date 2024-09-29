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
        toast.success("Book Added to Read List");
    } 
    else {
        toast.error("You have Already Read this book!");
    }
};
export const GetReadLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("readAllReady")) || [];
    return data;
};




export const setToLocalWishlist = (data) => {

    let saveReadData = JSON.parse(localStorage.getItem("readAllReady")) || [];
    if (!Array.isArray(saveReadData)) {
        saveReadData = [];
    }
    const existingReadDataIndex = saveReadData.findIndex((item) => item.id === data.id);
    console.log(existingReadDataIndex);
    if (existingReadDataIndex !== -1) {
        toast.error("You have Already Read this book!");  
     return;
    } 
    
 

    let saveData = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
    if (!Array.isArray(saveData)) {
        saveData = [];
    }
    const existingDataIndex = saveData.findIndex((item) => item.id === data.id);
    if (existingDataIndex === -1) {
        saveData.push(data);
        localStorage.setItem("WishListAllReady", JSON.stringify(saveData));
        toast.success("Book Added to Read List");
    } 
    else {
        toast.error("You have Already Read this book!");
    }
};

export const getFromLocalWishlist = () => {
    const data = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
    return data;
};


