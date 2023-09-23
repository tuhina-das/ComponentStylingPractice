import './App.css'

//Create a React app from scratch
//Show a single h1 that says "Good morning" if between midnight and 12pm
//"Good Evening" if between 6pm and midnight

//variables to store message and color
let message;
let color = {
  color: ""
}

//series of if statements to set the text and color
  const date = new Date();
  const hour = date.getHours();

  if (hour>=18 && hour <= 23){
    message = "Good evening!";
    color.color = "blue";
  }
  else if (hour >= 13 && hour <= 17){
    message = "Good afternoon!";
    color.color = "green";
  }
  else if (hour >= 0 && hour <= 12){
    message = "Good morning!";
    color.color = "red";
  }


export default function App() {
  return (
    <main>
      <h1 style={color}>
        {message}
      </h1>
    </main>
  )
}
