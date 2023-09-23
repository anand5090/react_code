import "./App.css";
import Card from "./components/Card";
import "./index.css";

function App() {
  // let myObj={
  //   username:"Anand",
  //   age:23
  // }

  // let arr=[1,2,3,4]
  return (
    <>
    <h1 className="bg-green-400 text-black p-3 place-content-between rounded-xl w-64 text-4xl font-bold max-w-md mx-auto ">Tailwind Test</h1>
    <Card username="Anand" btnText="Visit Me" Img="https://th.bing.com/th/id/R.327d20eb3d22c30b636ecbb779da4e57?rik=vueUqQ%2bWpN6ZiQ&riu=http%3a%2f%2fcdn.onlyinyourstate.com%2fwp-content%2fuploads%2f2016%2f04%2f13535412304_3b829f6122_h.jpg&ehk=0qlz8yyMnCR9mwy6kZilBjxdy7ZpG9amzWDYXXciiJE%3d&risl=&pid=ImgRaw&r=0"/>
    <Card username="Aman" btnText="Save Changes" Img="https://th.bing.com/th/id/OIP.E9lupGrfb3f8kILz7jTpJgHaE8?pid=ImgDet&rs=1"/>
    <Card username="Akash" Img="https://wallpapercave.com/wp/wp2003539.jpg"/>
    </>
  );
}

export default App;
