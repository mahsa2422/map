import React from 'react';
import * as XLSX from "xlsx";
import { useDispatch } from 'react-redux';
import { FetchAction } from '../redux/action';
const ReadExcels=()=>{
   const dispatch=useDispatch();
   const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];
        console.log(wsname);

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((el) => {
       dispatch(FetchAction(el))
    });
    

  };

  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </>
      
  );
}

export default ReadExcels;
