import React from "react";

function Heading(){
  //logic for changing color and text
    //variables to store message and color
    let message;
    let color = {
      color: "",
      border: "solid black 5px"
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
  
  return (
    <heading>
      <h1 style={color}>
        {message}
      </h1>
    </heading>
  );
}

export default Heading;