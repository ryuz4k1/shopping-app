import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Masonry from "react-masonry-css";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8001/categories/" + id, {
      method: "DELETE",
    });
    const newCategories = categories.filter((note) => note.id !== id);
    setCategories(newCategories);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <ul>
          {categories.map((c) => (
            <li key={c.id}>
              {c.name}
              <IconButton onClick={() => handleDelete(c.id)}>
                <DeleteOutlined />
              </IconButton>
            </li>
          ))}
        </ul>
      </Masonry>
    </Container>
  );
}
