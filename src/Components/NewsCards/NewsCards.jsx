
import './NewsCards.css';
import 'tailwindcss/tailwind.css';


export default function NewsCards({card}) {

    
  
  return (
    
      
    <div id="CardBorder" class="mt-6 h-82 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer">
      <img class="h-60 w-72 object-cover rounded-br-none rounded-bl-3xl" src={card.urlImg} alt="Sunset in the mountains" />
      <div class="font-bold text-xl mb-2 ml-3">{card.title}</div>
      <p class="text-gray-700 text-base pb-4 ml-4">
       {card.description.substring(0, 50)}...
      </p>
     
    </div>
      
    
  );
}
