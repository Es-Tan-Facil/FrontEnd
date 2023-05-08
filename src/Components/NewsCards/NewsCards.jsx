import carretera from "../../Assets/Pictures/carretera.jpg";
import './NewsCards.css';
import 'tailwindcss/tailwind.css';


export default function Example() {
  return (
    <div id="CardBorder" class="max-w-sm rounded overflow-hidden  border border-solid rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl pb-10 ">
      <img class="w-full rounded-br-none rounded-bl-3xl" src={carretera} alt="Sunset in the mountains" />
      <div class="font-bold text-xl mb-2 ml-3">Viaje 2023</div>
      <p class="text-gray-700 text-base pb-4 ml-4">
        A Mar de Plata
      </p>
     
    </div>
  );
}
