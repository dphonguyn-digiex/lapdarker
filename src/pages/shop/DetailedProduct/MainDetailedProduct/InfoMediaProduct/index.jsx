import { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Button, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { styles } from "./styles";

function InfoMediaProduct({ data }) {
  const [idxImage, setIdxImage] = useState(1);
  return (
    <div style={styles.container_info_prd}>
      <div style={styles.header_slider}>
        <div style={{ display: "flex" }}>
          <Button
            className="custom-cursor"
            variant="outlined"
            sx={styles.btn_media}
          >
            <CameraAltIcon />
            <Typography sx={{ marginLeft: "6px" }}>
              {idxImage} / {data?.img.length}
            </Typography>
          </Button>
          <Button
            variant="outlined"
            disabled={true}
            sx={Object.assign({ marginLeft: "12px" }, styles.btn_media)}
          >
            <PlayCircleOutlineIcon />
            <Typography sx={{ marginLeft: "6px" }}>Video</Typography>
          </Button>
        </div>
      </div>
      <div style={styles.part_slider}>
        <div style={styles.body_slider}>
          <Carousel
            style={{ justifyContent: "start" }}
            selectedItem={0}
            showStatus={false}
            showThumbs={true}
            showIndicators={false}
            onClickThumb={(index) => setIdxImage(index + 1)}
            showArrows={false}
            renderThumbs={(arr_img) =>
              arr_img.map((elm, index) => (
                <img
                  key={index}
                  src={elm.props.children.props.src}
                  alt="img thumb"
                />
              ))
            }
          >
            {data?.img.map((img, index) => {
              return (
                <div key={index} style={styles.img_slider}>
                  <img src={img} alt="img slider" height="390" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default InfoMediaProduct;
