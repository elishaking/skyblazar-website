import React from "react";
import "./ImageModal.scss";
import Close from "./icons/Close";

interface ImageModalProps {
  imgSrc: string;
  imgCaption: string;
  imgDescription: string;
  close: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function ImageModal({
  imgSrc,
  imgCaption,
  imgDescription,
  close
}: ImageModalProps) {
  return (
    <div id="image-modal" className="image-modal" onClick={close}>
      <span className="close" onClick={close}>
        <Close />
      </span>

      <img
        onClick={e => {
          e.stopPropagation();
        }}
        className="modal-content"
        src={imgSrc}
        alt="Project"
      />

      <div className="caption">{imgCaption}</div>
      <div className="caption">
        <small>{imgDescription}</small>
      </div>
    </div>
  );
}
