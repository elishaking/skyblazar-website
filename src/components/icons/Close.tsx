import React from "react";

interface CloseProps {
  color?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Close({ color = "#fff", onClick }: CloseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 23.024 23.024"
      onClick={onClick}
    >
      <g
        id="Group_43"
        data-name="Group 43"
        transform="translate(-219.086 -1192.086)"
      >
        <line
          id="Line_4"
          data-name="Line 4"
          x2="20.195"
          y2="20.195"
          transform="translate(220.5 1193.5)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-width="2"
        />
        <line
          id="Line_5"
          data-name="Line 5"
          x1="20.195"
          y2="20.195"
          transform="translate(220.5 1193.5)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}
