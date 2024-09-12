import { useState } from "react";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState("none");

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const downloadImage = async () => {
    const element = document.getElementById("image-container");
    if (element) {
      const canvas = await html2canvas(element);
      const dataURL = canvas.toDataURL("image/png");
      downloadjs(dataURL, "download.png", "image/png");
    }
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      <div>
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="none">None</option>
            <option value="grayscale(100%)">Grayscale</option>
            <option value="sepia(100%)">Sepia</option>
            <option value="invert(100%)">Invert</option>
            <option value="contrast(1.5)">Contrast</option>
            <option value="blur(5px)">Blur</option>
            <option value="brightness(0.8)">Brightness</option>
          </select>
        </label>
      </div>

      <div
        id="image-container"
        style={{ filter: filter, maxWidth: "100%", height: "auto" }}
      >
        {image && <img src={image} alt="No image" />}
      </div>

      <button onClick={downloadImage}>Download</button>
    </div>
  );
};

export default ImageUpload;
