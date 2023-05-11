
import './NewsCards.css';
import 'tailwindcss/tailwind.css';


export default function NewsCards({ card }) {



  return (

    <div id="CardBorder" class="w-4/5 min-w-[70%] max-w-[70%] md:min-w-[25%] max-w-[25%] rounded overflow-hidden border border-solid rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl pb-10 ">
      <img class="w-full rounded-br-none rounded-bl-3xl " src={card.urlImg} alt="Sunset in the mountains" />
      <div class="font-bold text-xl mb-2 ml-3">{card.title}</div>
      <p class="text-gray-700 text-base pb-4 ml-4">
        {card.description}
      </p>
    </div>
  );
}
