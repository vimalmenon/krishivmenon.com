
import React from "react";

export const usePhotos = () => {
const [base64, setBase] = React.useState<any>("")
  const savePhoto = (file: any) => {
    var r = new FileReader();
    r.onload = function(e){
        console.log(e.target?.result)
        // setBase(e.target?.result); 
    };
    r.readAsBinaryString(file);
    console.log()
    // fetch(' https://p1nqtdgh09.execute-api.us-east-1.amazonaws.com/test/image', {
    //     body: file,
    //     method: "POST",
    // }).then(() => {
    //     console.log("this is called")
    // }).catch(() => {
    //     console.log("this is catch")
    // });
  };
  return {
    base64,
    savePhoto,
  };
};
