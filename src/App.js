import React, { Suspense, Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./layout";

const Home = React.lazy(() => import("./pages/Home/index"));
const Details = React.lazy(() => import("./pages/Details/index"));
const New = React.lazy(() => import("./pages/New/index"));
const Edit = React.lazy(() => import("./pages/Edit/index"));

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("myArray")) {
      let newArray = [];
      localStorage.setItem("myArray", JSON.stringify(newArray));
      setArray(newArray);
    } else {
      let existingArray = JSON.parse(localStorage.getItem("myArray"));
      setArray(existingArray);
    }
  }, []);

  const handleHack = (entry, operation) => {
    let updatedArray = [];

    switch (operation) {
      case "add":
        updatedArray = [...array, entry];
        break;
      case "edit":
        updatedArray = array.map((item) => {
          if (item.id == entry.id) {
            return entry;
          } else {
            return item;
          }
        });
        break;
      case "delete":
        updatedArray = array.filter((item) => item.id != entry.id);
        break;
      default:
        break;
    }

    localStorage.setItem("myArray", JSON.stringify(updatedArray));
    setArray(updatedArray);
  };

  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home data={array} />} />
            <Route
              path="/:id"
              element={
                <Details data={array} onDeleteAndFavEntry={handleHack} />
              }
            />
            <Route path="/new" element={<New onAddEntry={handleHack} />} />
            <Route
              path="/:id/edit"
              element={<Edit data={array} onEditEntry={handleHack} />}
            />
          </Routes>
        </Layout>
      </Suspense>
    </Fragment>
  );
}

export default App;
