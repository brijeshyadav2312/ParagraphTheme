import React from "react";

const Paragraph = (props) => {
  const dummyText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis totam alias ullam, ea rerum velit. Rerum nostrum ea vitae! Cumque veniam omnis dolore sint ducimus. Nisi est totam inventore alias incidunt iure natus ea doloremque voluptas porro, vero impedit cupiditate facilis eligendi commodi dicta! Totam fugit earum dolores nesciunt.
  
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nemo qui blanditiis sint amet, cum obcaecati rerum, omnis ducimus nostrum distinctio quo impedit commodi iste recusandae vel minima iusto magnam aut maxime? Amet eveniet eaque cum nulla aut sunt beatae obcaecati iure laudantium quas excepturi numquam dicta debitis esse nam accusamus ullam enim dolorum culpa earum adipisci aspernatur, ut dolorem alias! Tempora assumenda corporis consectetur? Possimus omnis in voluptatum a necessitatibus debitis ipsa fugit tempore pariatur sint repudiandae fugiat totam veniam laudantium quidem libero quae, incidunt quibusdam modi! Quam architecto temporibus illum veniam doloribus nam libero quidem quo placeat reprehenderit!
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas labore incidunt consequuntur sint obcaecati vero blanditiis ullam! Odio nesciunt laboriosam reiciendis quis aspernatur facere quisquam sit animi consectetur dolore.`;

  return (
    <div>
      <textarea
        defaultValue={dummyText}
        style={{
          color: props.fontColor,
          fontFamily: props.fontFamily,
          fontSize: `${props.fontSize}px`,
          fontWeight: props.fontWeight,
        }}
      ></textarea>
    </div>
  );
};

export default Paragraph;
