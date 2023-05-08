import carretera from "../../Assets/Pictures/carretera.jpg";
import './NewsCards.css';
import 'tailwindcss/tailwind.css';


export default function Example() {

    let data = [{
        title: "Viaje 2023",
        subtitle: "A mar de plata",
        img: "../../Assets/Pictures/carretera.jpg"
    }]
    
console.info(data[0].title)
  return (
    <>
     {data.map((item) => 
    <div id="CardBorder" class="max-w-sm rounded overflow-hidden  border border-solid rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl pb-10 ">
      <img class="w-full rounded-br-none rounded-bl-3xl" src={carretera} alt="Sunset in the mountains" />
      <div class="font-bold text-xl mb-2 ml-3">{item.title}</div>
      <p class="text-gray-700 text-base pb-4 ml-4">
       {item.subtitle}
      </p>
     
    </div>
                )}
      
      
 
    </>
  );
}
