import React from "react";
// 1) JSX არის javascriptის გაფართოება react-ში. გვაძლევს საშუალებას რომ JS-ში HTML-ს მსგავსი კოდი დავწეროთ.

// 2) js-ს აქვს სუფთა javascript ხოლო jsx-ს javascript+html მსგავსი სინტაქსი. jsx ვქმნით რათგან კოდი უფრო წაკითხვადია, ლოგიკა და markup ერთად არის გაერთიანებული და react კომპონენტები უფრო ადვილად იწერება/იქმნება.

// 3) კომპონენტი არის ფუნქცია რომელიც აბრუნებს ui-ს ნაწილს, რომელიც შეიძლება გამოიყენებოდეს ბევრჯერ.

// 4)
function Greeting() {
  return <h1>hello!</h1>;
}

export default Greeting;

// 5)
function Header() {
  return <header>Header</header>;
}

function Footer() {
  return <footer>Footer</footer>;
}

export { Header, Footer };

// 6)
function Product({ name, price, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price} ₾</p>
      <img src={image} alt={name} />
    </div>
  );
}

export { Product }

// 7) hook არის ფუნქციები react-ში რომელიც საშუალებას გაძლევს state და სხვა React ფუნქციები გამოიყენო კომპონენტებში.

// 8) 
//useState – state
//useEffect – გვერდითა ეფექტები (fetch, timers)
//createContext
//useContext – context-ის მიღება
//useRef – DOM-ზე წვდომა
//useReducer – რთული state ლოგიკა რომელსაც ჩვენ ვუწერთ ლოგიკას
//useMemo – მძიმე გამოთვლებისთვის

// 9)
function figletText(text) {
  return `
*** ${text} ***
*  ${text}  *
*** ${text} ***
`;
}

console.log(figletText("HELLO"));