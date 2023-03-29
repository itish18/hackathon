import { Box } from "@mui/material";

import Inputs from "./Inputs";
import SubHeading from "./SubHeading";
import FilledButton from "./FilledButton";
import TextArea from "./TextArea";
import Image from "./Image";

const HackathonBox = ({
  handleSubmit,
  handleChange,
  handleImage,
  image,
  values,
  subHeading,
  text,
}) => {
  return (
    <Box sx={{ padding: "50px 142px", backgroundColor: "#F5F5F5" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: "30px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "40px",
          backgroundColor: "white",
          borderRadius: "24px",
        }}
      >
        <SubHeading heading={subHeading} />
        <>
          <Inputs
            label="Title"
            holder="Title of your submission"
            func={handleChange}
            name="title"
            value={values.title}
          />
          <Inputs
            label="Summary"
            holder="A short summary of your submission (this will be visible with your submission)"
            func={handleChange}
            name="summary"
            value={values.summary}
          />
          <TextArea
            func={handleChange}
            label="Description"
            holder="Write a long description of your project. You can describe your idea and approach here."
            name="desc"
            max={3000}
            value={values.desc}
          />

          <Image label="Cover Image" func={handleImage} image={image} />

          <Inputs
            label="Hackathon Name"
            holder="Enter the name of the hackathon"
            func={handleChange}
            name="hackName"
            value={values.hackName}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              gap: "32px",
            }}
          >
            <Inputs
              label="Hackathon Start Date"
              holder="Select start date"
              func={handleChange}
              type="date"
              name="start"
              value={values.start}
            />
            <Inputs
              label="Hackathon End Date"
              holder="Select end date"
              func={handleChange}
              type="date"
              name="end"
              value={values.end}
              min={values.start}
            />
          </Box>

          <Inputs
            label="GitHub Repository"
            holder="Enter your submission’s public GitHub repository link"
            func={handleChange}
            name="git"
            type="url"
            value={values.git}
          />
          <Inputs
            label="Other Links"
            holder="You can upload a video demo or URL of you demo app here."
            func={handleChange}
            name="otherLink"
            type="url"
            value={values.otherLink}
          />
        </>
        <Box
          sx={{ backgroundColor: "#E6E6E6", width: "100%", height: "1px" }}
        />
        <FilledButton text={text} func={null} fontWeight="500" type="submit" />
      </Box>
    </Box>
  );
};

export default HackathonBox;
