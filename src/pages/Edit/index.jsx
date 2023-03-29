import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { resizeFile } from "../../utils/ImageCompressor";
import HackathonBox from "../../components/HackathonBox";

const Edit = ({ data, onEditEntry }) => {
  const [values, setValues] = useState({});
  const [image, setImage] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const foundHack = data.find((item) => item.id == id);
    if (foundHack) {
      setImage({
        imageName: foundHack.image.imageName,
        url: foundHack.image.url,
      });

      setValues(foundHack);
    }
  }, [id, data]);

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

    const {
      desc,
      end,
      start,
      git,
      hackName,

      summary,
      title,
      otherLink,
    } = values;

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

    onEditEntry({ ...values, image, id }, "edit");
    nav(`/${id}`);
  };

  return (
    <HackathonBox
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleImage={handleImageChange}
      image={image}
      values={values}
      subHeading="Edit Hackathon Submission"
      text="Save Submission"
    />
  );
};

export default Edit;
