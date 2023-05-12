import './NewsCards.css';
import 'tailwindcss/tailwind.css';


export default function NewsCards({ card }) {
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
const month = months[new Date(card.date).getMonth()];
const day = new Date(card.date).getDate();
const year = new Date(card.date).getFullYear();

  return (

    <div id="CardBorder" className="w-4/5 min-w-[70%] max-w-[70%] md:min-w-[25%] max-w-[25%] rounded overflow-hidden border border-solid border-2 border-[#51C8FC] rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl pb-10 ">
      <img className="w-full rounded-br-none rounded-bl-3xl h-44 " src={card.urlImg} alt="Sunset in the mountains" />
      <p id="date" className="mx-4 my-4 text-gray-600">{day} de {month} de {year}</p>
      <h4 className="font-bold my-4 mx-4 h-10 text-[#51C8FC] ">{card.title}</h4>
      <p className="text-gray-700 text-justify text-xs mx-4 ">
        {card.description.substring(0, 130)}...
      </p>
    </div>


  );
}
