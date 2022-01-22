
import './App.css';
import BulletinBoard from './BulletinBoard';

function App() {

  const questionare = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "Flexibilitet: ReactJS-koden är lättare att uppdatera och hantera tack vare sin modulära struktur, appar byggda med ReactJS är flexibla och kan skalas vilket sparar utvecklarens tid. Återanvändbarhet: Det komplexa UI kan delas upp i mindre, återanvändbara komponenter som kan återanvändas för att bygga en annan applikation med samma funktionalitet.Prestanda: Kärnan i ramverket erbjuder ett virtuellt DOM-program och rendering på serversidan som gör att komplexa appar körs extremt snabbt."
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "SPA är en ensidig applikation som fungerar i en webbläsare för att utföra olika åtgärder som att rulla, byta till andra sidor etc där istället för att ladda om sidorna laddas bara vissa element in på grund av dynamisk uppdatering som ökar webbsidans prestanda. Exempel: Gmail, Facebook, Twitter etc. Medan på en vanlig webbplats gör varje ändring en begäran till en ny sida från servern i webbläsaren, vilket ökar belastningen på servern, vilket kan påverka webbsidans hastighet och övergripande systemprestanda. SPA:er är mycket reaktiva med hög hastighet, flexibla och lyhörda på grund av bristande återrendering, optimerade, tidsbesparande, förenklade jämfört med en vanlig webbplats och fungerar bra på både mobila och stationära enheter.SPA är enklare och snabbare att utveckla eftersom det kräver att skapa få sidor, bygga och testa mindre funktionalitet och därför kräver mindre ansträngning, tid och pengar jämfört med vanliga webbplatser som har ett stort antal funktioner som kräver mer ansträngning och resurser."
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "Angular är ett ramverk för webbapplikationer med öppen källkod för att utveckla dynamiska webbsidor utvecklade av Google medan React är ett front-end JavaScript-bibliotek för att bygga användargränssnitt utvecklat av Facebook.Angular är baserad på Model View Controller och React är baserad på virtuell DOM.Angular är baserat på Typescript (JavaScript + HTML) och React är baserat på JavaScript (JavaScript + JSX).Angular är idealiskt om vi vill utveckla storskaliga applikationer med rika funktioner, medan React är idealiskt för Single Page Applications. AngularJS tillhandahåller testning och felsökning för ett komplett projekt med ett enda verktyg medan React kräver en uppsättning verktyg för att utföra olika typer av testning."
    }
  ]

  return (
    <div className="App">
      <h1 className="Heading">Bulletin board</h1>
      <BulletinBoard container={questionare} />
    </div>
  );
}
export default App;

