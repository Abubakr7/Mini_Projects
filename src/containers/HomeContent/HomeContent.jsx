import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Divider } from "@mui/material";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../utils/axiosRequest";

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
// ];

const HomeContent = () => {
  const [logo, setLogo] = useState({
    tj: "",
    ru: "",
    en: "",
  });

  const [home, setHome] = useState({});

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `TJ`,
      children: (
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          value={logo.tj}
          onChange={(value) => {
            setLogo((prev) => ({ ...prev, tj: value }));
          }}
        />
      ),
    },
    {
      key: "2",
      label: `RU`,
      children: (
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          value={logo.ru}
          onChange={(value) => {
            setLogo((prev) => ({ ...prev, ru: value }));
          }}
        />
      ),
    },
    {
      key: "3",
      label: `EN`,
      children: (
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          value={logo.en}
          onChange={(value) => {
            setLogo((prev) => ({ ...prev, en: value }));
          }}
        />
      ),
    },
  ];

  const getLogoData = async () => {
    try {
      const { data } = await axiosRequest.get("home");
      setHome(data);
    } catch (error) {}
  };

  const saveChanges = async () => {
    home.logo = { ...logo };

    try {
      const { data } = await axiosRequest.put("home", home);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getLogoData();
  }, []);
  return (
    <div>
      <h1>Home Content</h1>
      <Divider />
      <h2>Logo</h2>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <button onClick={saveChanges}>save</button>
    </div>
  );
};

export default HomeContent;
