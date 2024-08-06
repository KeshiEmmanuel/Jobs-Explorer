/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function HomeCards({ card }) {
  const navigate = useNavigate();
  function handleNavigate(content) {
    if (content === "Add Job") {
      navigate("/add-job");
    }
    if (content === "Browse Jobs") {
      navigate("/jobs");
    }
  }
  return (
    <section
      className={`lg:w-[470px] py-5 px-5 shadow-md`}
      style={{
        backgroundColor: card.colors.bg_color,
      }}
    >
      <h1 className="font-bold text-xl ">{card.title}</h1>
      <p className="whitespace-nowrap text-sm">{card.content}</p>
      <button
        onClick={() => handleNavigate(card.button_content)}
        className="mt-3 text-white w-[125px] py-1 rounded-md"
        style={{
          backgroundColor: card.colors.btn_color,
        }}
      >
        {card.button_content}
      </button>
    </section>
  );
}
