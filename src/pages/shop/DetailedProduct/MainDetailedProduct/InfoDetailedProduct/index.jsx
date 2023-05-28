import { Button, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import { BsCpu, BsBatteryCharging } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { RiCpuLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import {
  MdOutlineDeveloperBoard,
  MdStorage,
  MdLineWeight,
} from "react-icons/md";
import { SiGithubactions } from "react-icons/si";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styles } from "./styles";

function InfoDetailedProduct({ data }) {
  const checkLaptopPath = localStorage.getItem("_pathname").includes("laptop");
  const LaptopDetail = () => (
    <>
      <div style={styles.side_info}>
        <div style={styles.wrap_elm_info}>
          <div>
            <BsCpu style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Vi xử lý (CPU) <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.CPU}</Typography>
          </div>
        </div>
        {/* 2.1 */}
        <div style={styles.wrap_elm_info}>
          <div>
            <RiCpuLine style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              RAM <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.RAM}</Typography>
          </div>
        </div>
      </div>
      {/*  */}
      {/* 3 */}
      <div style={styles.side_info}>
        <div style={styles.wrap_elm_info}>
          <div>
            <FiMonitor style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Màn hình <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.monitor}</Typography>
          </div>
        </div>
        {/* 3.1 */}
        <div style={styles.wrap_elm_info}>
          <div>
            <MdOutlineDeveloperBoard style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Card đồ họa (GPU) <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.card_graphic}</Typography>
          </div>
        </div>
      </div>
      {/*  */}
      {/* 4 */}
      <div style={styles.side_info}>
        <div style={styles.wrap_elm_info}>
          <div>
            <MdStorage style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Lưu trữ <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.storage}</Typography>
          </div>
        </div>
        {/* 4.1 */}
        <div style={styles.wrap_elm_info}>
          <div>
            <BsBatteryCharging style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              PIN <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.PIN}</Typography>
          </div>
        </div>
      </div>
      {/*  */}
      {/* 5 */}
      <div style={styles.side_info}>
        <div style={styles.wrap_elm_info}>
          <div>
            <SiGithubactions style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Kết nối chính <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.ports}</Typography>
          </div>
        </div>
        {/* 5.1 */}
        <div style={styles.wrap_elm_info}>
          <div>
            <MdLineWeight style={styles.icon_elm} />
          </div>
          <div style={styles.main_elm_info}>
            <Typography sx={{ fontWeight: "600" }}>
              Trọng lượng <FcAbout />
            </Typography>
            <Typography>{data?.configuration?.weight}</Typography>
          </div>
        </div>
      </div>
    </>
  );
  // const arrValueConfig = Object?.values(data?.configuration);
  const AnotherDetail = () => (
    <>
      {Object.keys(data?.configuration).map((config, index) => {
        // console.log(arrValueConfig[index]);
        return (
          <div key={index} style={styles.side_info}>
            <div style={styles.wrap_elm_info}>
              <div style={styles.main_elm_info}>
                <Typography
                  sx={{ fontWeight: "600", textTransform: "capitalize" }}
                >
                  {config}
                </Typography>
                {/* <Typography>{arrValueConfig[index]}</Typography> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <div style={styles.container_info_prd}>
      {/* 1 */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <CameraIcon />
        <Typography variant="h6" sx={{ fontWeight: "bold", pl: "8px" }}>
          Cấu hình đặc điểm
        </Typography>
      </div>
      {/*  */}
      {/* 2 */}
      {checkLaptopPath ? <LaptopDetail /> : <AnotherDetail />}
      {/*  */}
      {/* 6 */}
      <div>
        <Button
          disableRipple
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <Typography
            sx={{
              color: "#0065ee",
              fontSize: "13px",
              textTransform: "initial",
            }}
          >
            Xem cấu hình chi tiết
          </Typography>
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default InfoDetailedProduct;