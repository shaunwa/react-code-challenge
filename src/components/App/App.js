import './App.css';
import { useState, useEffect, useRef } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
//import WebSocket from "ws";

//throughout the client side ES6 Javascript is being used.

const URL ='ws://localhost:8080/ws';
const statePlayer1 = {
	score: 0,
	isWinner : false,
  pads:{
    x : 50,
    y :50
  }
	

}

const statePlayer2 = {
	score : 0,
	isWinner: false,
  pads :{
    x : 50,
    y : 50
  }

	

}

const ballState ={

  posX : -50,
  posY : 50

}

function App() {


	const [val1, setVal1] = useState(-50);
  const [val2, setVal2] = useState(-50);
  //const [text, setText] = useState()
  const [keyPressed, setKeyPressed] = useState('')
  const [ws, setWs] = useState(new W3CWebSocket(URL));
  const [ gameState, setGameState] = useState({ player1 : {score : 0}, player2 : {score : 0}})
  const [elementRef, setElementRef] = useState(null)
  const [t,setT] = useState('tt')
  const canvasRef = useRef(null)
  //console.log(ballState)
  let ctx;
 // console.log(ballState, "this is ballstate")
  
  const clickHandler = () => {
    ws.send('hello')
  }


   //const elementRef = useRef();

  //let elem = document.getElementById("ball");
  
  //const rect = elementRef.getBoundingClientRect();
  //console.log(elementRef, "ball co-ords")

//to paint the game dynamically, as the props recieved is the updated state to render the changes at the frontend
  const paintGame = ({player1, player2, b}) => {
    //console.log(res.x, res.y, 'state')

ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 800, 600);
    const size = 800 / 40;
    //player1 paddle
     ctx.fillStyle = 'black';
     ctx.fillRect(player1.x* size, player1.y* size, size, 10*size);
     //player2 paddle
     ctx.fillStyle = 'black';
     //39,10
     ctx.fillRect(player2.x* size, player2.y* size, size, 10*size);

     ctx.fillStyle = 'black';
     ctx.strokeStyle = 'yellow';
//console.log(ballState.x,ballState.y, 'ballstate')
     ctx.beginPath();
ctx.arc(b.x* size, b.y* size, size/2, 0, 2 * Math.PI, false);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();
     
     // ctx.fillRect(19* size, 19* size, size, size);



/*
ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const size = canvas.width / 40;
     ctx.fillStyle = 'black';
     ctx.fillRect(0* size, 0* size, size, 10*size);
     ctx.fillStyle = 'black';
     ctx.fillRect(39 * size, 0* size, size, 10*size);

*/

  }
	

const apiCall = {
    hello : "ball"
  };
  useEffect(() => {


    const canvas = canvasRef.current
    console.log(canvas)
    
    console.log(elementRef?.current)

    canvas.width = 800;
    canvas.height = 600;

   ctx = canvas.getContext('2d')

   
   
    





    //ws.onopen for opening the websocket connection when the app is mounted for the first time and a three-way handshake is established
    //between the client and the browser
    ws.onopen = () => {
      //ws.send func is used for sending the response to backend from the client on the opened websocket connection.
      
     // ws.send(JSON.stringify(apiCall));
      console.log('websockets are connected')
    }
    
    //ws.onmessage is listening to any response we are getting from the opened websocket connection
    ws.onmessage = (e) => {
      const res = JSON.parse(e.data)
      //updating latest state
      console.log(res,'player1')
     paintGame(res)
     setGameState(res)
     //setT(res)

     // console.log('clicked')
     // paintGame()

      //console.log(res,'returned from websockets')
    }


    return () => ws.close();
    


  }, [])
  
  //listening to user actions
	document.onkeydown = function (e) {
    switch (e.key) {
      case "ArrowUp":
        // up arrow
        //ws.send for sending the client actions to the open websocket connection 
        //which was opened when the client app mounted.
        ws.send(JSON.stringify({ key: "up"}));
		
      setKeyPressed('up')
        console.log("up");
         
           
             
            
         
       
        
        break;
      case "ArrowDown":
        // down arrow
         ws.send(JSON.stringify({ key: "down"}));
		
        console.log("down");
        setKeyPressed('down')
        break;
      case "w":
        // left arrow
         ws.send(JSON.stringify({ key: "w"}));
		
      setKeyPressed('w')
			
        console.log("w");
        break;
      case "s":
        // right arrow
         ws.send(JSON.stringify({ key: "s"}));
		
      setKeyPressed('s')
        console.log("s");
    }
  }




	
	return (
    <div>
      <div style={{ textAlign: "center" }}>
        OM NAMAH SHIVAAY
        <br/>
        Karpoorgauram Karunavtaram Sansarsaram Bhujgendraharam, Sadavasantam Hridyaravinde Bhavam Bhavami Sahitam Namami
        <br />
        Pong Game For Piepacker Challenge
      </div>

      <button onClick={clickHandler}>Click</button>
      <div>{t}</div> 
      
      
      <div className='cover'>
      <div className='score' style={{fontSize : '20px', backgroundColor : 'white', overflow: "hidden" }}>
      <div>Player1 - {gameState.player1.score}</div>
      <div>Player2 - {gameState.player2.score}</div>
      </div>
      <canvas ref={canvasRef} style={{margin:'auto'}} className='canvas'  />
</div>
    
    </div>
  )
}

export default App;
