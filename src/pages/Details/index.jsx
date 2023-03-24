import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { MdEdit, MdDelete, MdDateRange } from "react-icons/md";
import { AiFillGithub, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import Heading from "../../components/Heading";
import OutlineButton from "../../components/OutlineButton";
import Para from "../../components/Para";
import { convertUploadedDate } from "../../utils/DateFunctions";
import DeleteModal from "./DeleteModal";

const Details = ({ data, onDeleteAndFavEntry }) => {
  const [hackathon, setHackthon] = useState({});
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const foundHack = data.find((item) => item.id == id);
    setHackthon(foundHack);
  }, [id, data]);

  return (
    <>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        onDeleteEntry={onDeleteAndFavEntry}
        hackathon={hackathon}
      />
      <Box
        sx={{
          padding: "97px 142px",
          bgcolor: "#003145",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <img
                src={hackathon?.image?.url}
                alt="profile"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <Heading heading={hackathon?.title} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <OutlineButton
                text="Edit"
                icon={<MdEdit size="18px" />}
                func={() => nav(`/${id}/edit`)}
              />
              <OutlineButton
                text="Delete"
                icon={<MdDelete size="18px" />}
                func={() => setOpen(true)}
              />
            </Box>
          </Box>
          <Para text={hackathon?.summary} />
          <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {hackathon?.isFavorite ? (
              <AiFillStar
                cursor="pointer"
                size="14px"
                onClick={() =>
                  onDeleteAndFavEntry(
                    { ...hackathon, isFavorite: false },
                    "edit"
                  )
                }
              />
            ) : (
              <AiOutlineStar
                cursor="pointer"
                size="14px"
                onClick={() =>
                  onDeleteAndFavEntry(
                    { ...hackathon, isFavorite: true },
                    "edit"
                  )
                }
              />
            )}
            <Box
              sx={{ height: "29px", width: "1px", backgroundColor: "#F5F5F5" }}
            />
            <Box
              sx={{
                padding: "6px 12px",
                borderRadius: "100vw",
                backgroundColor: "#255973",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <MdDateRange />
              <Typography sx={{ font: "400 14px/17px inter,sans-serif" }}>
                {convertUploadedDate(hackathon?.uploaded)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "50px 142px",
          display: "flex",
          alignItems: "flex-start",
          gap: "116px",
        }}
      >
        <Box sx={{ width: "770px" }}>
          <Typography
            sx={{ font: "400 20px/30px poppins,sans-serif", color: "#222222" }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              font: "400 16px/20px inter,sans-serif",
              color: "#333333",
              mt: "16px",
            }}
          >
            {hackathon?.desc}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              gap: "12px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                font: "400 17px/25.5px poppins,sans-serif",
                color: "#858585",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "noWrap",
              }}
            >
              {hackathon?.hackName}
            </Typography>

            <Typography
              sx={{
                font: "500 20px/30px poppins,sans-serif",
                color: "#333333",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "noWrap",
              }}
            >
              {hackathon?.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdDateRange color="grey" size="14px" />
              <Typography
                sx={{
                  font: "500 14px/17px inter,sans-serif",
                  color: "#858585",
                }}
              >
                {`${convertUploadedDate(
                  hackathon?.start,
                  true
                )} - ${convertUploadedDate(hackathon?.end, true)}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
            <OutlineButton
              text="GitHub Repository"
              icon={<AiFillGithub color="grey" size="20px" />}
              color="grey"
              func={() => {
                window.open(hackathon?.git);
              }}
            />
            <OutlineButton
              text="Other Link"
              icon={<FiExternalLink color="grey" size="20px" />}
              color="grey"
              func={() => {
                window.open(hackathon?.otherLink);
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Details;
