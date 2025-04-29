import { Modal } from "@mui/material";
import {Box} from "@mui/material";

const CourseViewer = ({ url, handleClose, open  }) => {
   
    
    return (
    
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="pdf-viewer"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "80%",
            height: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="fullscreen"
            title="PDF Viewer"
          />
        </Box>
      </Modal>
    );
  };
  export default CourseViewer