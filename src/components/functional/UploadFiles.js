import AddIcon from "@mui/icons-material/Add";
import { Button, Box, Container } from "@mui/material";
import {useState, useEffect} from 'react'
const UploadFiles = () => {
    // state that will hold the Array of objects
    // initialized with empty array
    const [files, setFiles] = useState([]);
    // onChange function that reads files on uploading them
    // files read are encoded as Base64
    function onFileUpload(event) {
      event.preventDefault();
      // Get the file Id
      let id = event.target.id;
      // Create an instance of FileReader API
      let file_reader = new FileReader();
      // Get the actual file itself
      let file = event.target.files[0];
      file_reader.onload = () => {
        // After uploading the file
        // appending the file to our state array
        // set the object keys and values accordingly
        setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
      };
      // reading the actual uploaded file
      file_reader.readAsDataURL(file);
    }

    return (
    <>
    Upload Your ACRA Documents (.pdf)
    <Container style={{border:"1px solid black", display:"inline-flex", padding:"20px"}}>
      <form>
        <div className="upload--button">
          <input
            onChange={onFileUpload}
            id={1}
            accept=".pdf"
            type="file"
          />
        </div>
      </form>
    </Container>
    </>
    );
  };

export default UploadFiles