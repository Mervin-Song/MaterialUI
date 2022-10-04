import AddIcon from "@mui/icons-material/Add";
import { Button, Box } from "@mui/material";
import {useState, useEffect} from 'react'
const UploadImage = () => {
  const [images, setImages] = useState([])
  const [imagesURL, setImagesURL] = useState([])
  const [fileName, setFileName] = useState([])
  const maxFileLimit = 3
  useEffect(()=>{
    if(images.length<1 || images.length>maxFileLimit) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImagesURL(newImageUrls)
  },[images])

  const handleImageChange = (e) =>{
    setImages([...e.target.files])
    var file = e.target.files[0].name
    setFileName(file)
  }

  return (
    <Box textAlign='center'>
      <Button variant="contained" component="label" sx={{margin:'auto', paddingTop:'10px'}}>
        <AddIcon style={{height:25, position:'relative', top:'-2px',left:'-3px'}}/> Upload Your ACRA Details here
        <input type="file" multiple accept="Image/*" onChange={handleImageChange} hidden/>
      </Button>
      <Box>
      {imagesURL.map(image =>{
        return(
            <>
            <img src={image} alt={fileName} />
            </>
        )
      })}
      </Box>
    </Box>
  );
};

export default UploadImage;
