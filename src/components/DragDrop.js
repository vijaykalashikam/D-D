import React, { useState } from "react";
import Picture from "./Picture";
import "../App.css";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  },
  {
    id: 2,
    url: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Basketball_net.jpg",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures" style={{ display: "flex", justifyContent: "space-around" }}>
        {PictureList.map((picture) => (
          <Picture url={picture.url} key={picture.id} id={picture.id} />
        ))}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => (
          <Picture url={picture.url} key={picture.id} id={picture.id} />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
