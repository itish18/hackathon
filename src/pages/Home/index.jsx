import { useState } from "react";
import { Box } from "@mui/material";
import { MdSearch } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import Lines from "../../assests/images/waves.png";

import Left from "./Left";
import Right from "./Right";
import Card from "../../components/Card";
import Tab from "../../components/Tab";

const Home = ({ data }) => {
  const [selected, setSelected] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [selectedSort, setSelectedSort] = useState("new");
  const [filtered, setFiletered] = useState(data);

  const handleOldSort = () => {
    setSelectedSort("old");
    setFiletered((prev) =>
      prev.sort((a, b) => new Date(a.start) - new Date(b.start))
    );
    setClicked(false);
  };

  const handleNewSort = () => {
    setSelectedSort("new");
    setFiletered((prev) =>
      prev.sort((a, b) => new Date(b.start) - new Date(a.start))
    );
    setClicked(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      let filtered = data.filter((item) =>
        item.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setFiletered(filtered);
    } else {
      setFiletered(data);
    }
    if (selectedSort === "old") {
      setFiletered((prev) =>
        prev.sort((a, b) => new Date(a.start) - new Date(b.start))
      );
    } else {
      setFiletered((prev) =>
        prev.sort((a, b) => new Date(b.start) - new Date(a.start))
      );
    }
  };

  const handleTab = (value) => {
    setSelected(value);
    if (value === 1) {
      const filtered = data.filter((item) => item.isFavorite === true);
      setFiletered(filtered);
    } else {
      setFiletered(data);
    }
    if (selectedSort === "old") {
      setFiletered((prev) =>
        prev.sort((a, b) => new Date(a.start) - new Date(b.start))
      );
    } else {
      setFiletered((prev) =>
        prev.sort((a, b) => new Date(b.start) - new Date(a.start))
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          padding: "88px 142px",
          bgcolor: "#003145",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Left />
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            bottom: "-5px",
            left: "-10px",
            width: "100%",
          }}
        >
          <img src={Lines} alt="lines" />
        </Box>
        <Right />
      </Box>
      <Box sx={{ padding: "50px 142px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tab
              text="All Submissions"
              value={0}
              selected={selected}
              onSelect={handleTab}
            />
            <Tab
              text="Favourite Submissions"
              value={1}
              selected={selected}
              onSelect={handleTab}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "100vw",
                padding: "5px 12px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <MdSearch color="grey" size="1.2em" />
              <input
                placeholder="Search"
                onChange={handleSearch}
                style={{
                  border: "none",
                  outline: "none",
                  font: "400 17px/25.5px poppins,sans-serif",
                }}
              />
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  border: "1px solid grey",
                  borderRadius: "100vw",
                  padding: "7px 14px",
                  cursor: "pointer",
                }}
                onClick={() => setClicked((prev) => !prev)}
              >
                <span
                  style={{
                    font: "400 17px/25.5px poppins,sans-serif",
                    color: "grey",
                  }}
                >
                  {selectedSort === "new" ? "Newest" : "Oldest"}
                </span>
                <IoMdArrowDropdown color="grey" />
              </Box>
              {clicked && (
                <Box
                  sx={{
                    bgcolor: "white",
                    width: "100%",
                    filter: "drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15))",
                    mt: "5px",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    font: "400 17px/25.5px poppins,sans-serif",
                    color: "black",
                  }}
                >
                  <span
                    style={{ cursor: "pointer", padding: "7px 16px" }}
                    onClick={handleNewSort}
                  >
                    Newest
                  </span>
                  <span
                    style={{ cursor: "pointer", padding: "7px 16px" }}
                    onClick={handleOldSort}
                  >
                    Oldest
                  </span>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "50px 0px",
            display: "Grid",
            gap: "50px 30px",
            justifyContent: "flex-start",
            gridTemplateColumns: "repeat(auto-fit,minmax(360px,390px))",
          }}
        >
          {filtered.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              summary={item.summary}
              uploaded={item.uploaded}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
