import { toast } from "react-toastify";




export const SaveToLocalStroage = (data) => {
    let saveData = JSON.parse(localStorage.getItem("readAllReady")) || [];
    if (!Array.isArray(saveData)) {
        saveData = [];
    }
    const existingDataIndex = saveData.findIndex((item) => item.id === data.id);
    if (existingDataIndex === -1) {
        saveData.push(data);
        localStorage.setItem("readAllReady", JSON.stringify(saveData));
        
    } 
    else {
        toast.error("Read this all ready");
        
    }
};

export const GetReadLocalStroge=()=>{
    const data = JSON.parse(localStorage.getItem("readAllReady")) ||[];
    return data;
}



export const setToLocalWishlist = (dwata) => {
    let saveData = JSON.parse(localStorage.getItem("WishListAllReady")) || [];
    if (!Array.isArray(saveData)) {
        saveData = [];
    }
    const existingDataIndex = saveData.findIndex((item) => item.id === dwata.id);
    if (existingDataIndex === -1) {
        saveData.push(dwata);
        localStorage.setItem("WishListAllReady", JSON.stringify(saveData));
        
    } 
    else {
        toast.error("Read this all ready");
        
    }  
}
export  const setToLocalWishlists =()=>{
    const dwata = JSON.parse(localStorage.getItem("WishListAllReady")) ||[];
    return dwata;
}





































// const getStoredJobApplication = () => {
//     const storedJobApplication = localStorage.getItem('job-applicatons');
//     if(storedJobApplication) {
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// }
// const saveJobApplication = id => {
//     const storedJobApplication = getStoredJobApplication();
//     const exists = storedJobApplication.find(jobId => jobId === id);
//     if(!exists) {
//         storedJobApplication.push(id);
       
//         localStorage.setItem('job-applicatons', JSON.stringify(storedJobApplication))
//     }
// }
// export { getStoredJobApplication, saveJobApplication };