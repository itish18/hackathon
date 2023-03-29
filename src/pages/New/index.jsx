import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { resizeFile } from "../../utils/ImageCompressor";
import { generateId } from "../../utils/RandomIdGenerator";
import HackathonBox from "../../components/HackathonBox";

const New = ({ onAddEntry }) => {
  const [values, setValues] = useState({});
  const [image, setImage] = useState({});
  const nav = useNavigate();

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const image = new Image();
        image.onload = async () => {
          if (image.width < 360 || image.height < 360) {
            return alert("Minimum resolution should be 360px X 360px");
          } else {
            const url = await resizeFile(file);
            setImage({ imageName: file.name, url });
          }
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { desc, end, start, git, hackName, summary, title, otherLink } =
      values;

    if (
      !desc ||
      !end ||
      !start ||
      !git ||
      !hackName ||
      !image.url ||
      !image.imageName ||
      !summary ||
      !title
    ) {
      return alert("Please fill all details");
    }
    if (values.desc.length > 3000) {
      return alert("Description length exceeds the limit");
    }

    if (
      !git.startsWith("http") ||
      (otherLink && !otherLink.startsWith("http"))
    ) {
      return alert("Please provide a valid link");
    }

    if (values.desc.length > 3000) {
      return alert("Description length exceeds the limit");
    }

    onAddEntry(
      {
        ...values,
        image,
        id: generateId(),
        uploaded: new Date(),
        isFavorite: false,
      },
      "add"
    );
    nav("/");
  };

  return (
    <HackathonBox
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleImage={handleImageChange}
      image={image}
      values={values}
      subHeading="New Hackathon Submission"
      text="Upload Submission"
    />
  );
};

export default New;
