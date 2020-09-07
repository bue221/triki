import React,{useState} from 'react';

//components
import Board from './Board'

const Game = ()=>{

        const [xisNext, setXisNext]= useState(true);
        const [stepNum, setStepNum]= useState(0);
        const [history, setHistory]= useState([
                {squares: Array(9).fill(null)}
        ]);


        const onClick = (i) =>{
                const history1 = history.slice(0,stepNum+1);
                const current = history1[history1.length-1];
                const squares = current.squares.slice(); 

                squares[i] = xisNext ? 'X': 'O';

                setHistory(history.concat({
                        squares: squares
                }))
                setXisNext(!xisNext);
                setStepNum(history1.length)
        }
        const jumpTo = (move)=>{
                setStepNum(move);
                setXisNext((move%2)===0);

        }

        const current = history[stepNum];
        const win = winner(current.squares);
        const moves = history.map((step, move)=>{
                const desc = move? 'Ir al # '+move :'Comenzar el juego';

                return(
                        <li key={move}>
                                <button onClick={()=>{jumpTo(move)}}>
                                        {desc}
                                </button>
                        </li>
                        );
        });
        let status;

        if(win){
                status =  'Winner is '+win
        }else{
                status = 'Next Player is '+ (xisNext ?'X':'O')
        }

        return(
                <div className="game">
                        <div className="game-board">
                                <Board onClick={(i)=>onClick(i)} squares={current.squares}  />
                        </div>
                        <div className="game-info">
                                <div>{status}</div>
                                <ul>{moves}</ul>
                        </div>
                </div>
                );
}

export default Game;

const winner = (squares)=>{
        const lines = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,8,4],
                [2,4,6]
        ]

        for(let i=0; i<lines.length; i++ ){
                const [a,b,c] = lines[i];
                if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
                        return squares[a];
                }
        }
        return null;
}

