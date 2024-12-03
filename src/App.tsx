import React from "react";
import GameButton from "./components/GameButton";
import { DataInterface } from "./main";

 type AppProps = {
    data: DataInterface;
    correctColor?: string;
    wrongColor?: string;
  };

 function App({ data, correctColor = "#0000ff", wrongColor = "#ff0000" }: AppProps) {
    const [isConcluded, setIsConcluded] = React.useState(false)
    const [firstSelection, setFirstSelection] = React.useState<{ value: string; index: number | undefined }>({ value: '', index: undefined })
   
    const [secondSelection, setSecondSelection] =React.useState<{ value: string; index: number | undefined }>({ value: '', index: undefined })
    const [wrongAnswer, setWrongAnswer] = React.useState(false)
    const [gameData, setGameData] = React.useState<string[]>([])
    
 
    React.useEffect(()=> {
        const initializedGameData = () =>{
            const countrys = Object.keys(data);
            const capitals = Object.values(data);
            let temp = [...countrys, ...capitals];
            temp = temp.sort(()=> Math.random() - 0.5);
            setGameData(temp);
          
        };
        initializedGameData();
    },[data, isConcluded])

    const reset = () => {
        setFirstSelection({'value': '', 'index': 0})
        setSecondSelection({'value': '', 'index': 0})
        setWrongAnswer(false)
    }

    const isEmptyState = !firstSelection.value && !secondSelection.value && !wrongAnswer;

    const isCorrect = (value : string) => {
        return data[value] === firstSelection.value || data[firstSelection.value] === value;
    }

    const isWrong = (value : string) => {
        return data[value] !== firstSelection.value && data[firstSelection.value] !== value;
    }
   
    const handleClick = (value : string, index: number) =>{
        if (wrongAnswer){
            reset();
        }
        if (isEmptyState || wrongAnswer){
            setFirstSelection({'value': value, 'index': index})
        }
        if(firstSelection.value === value){
            return;
        }
        if(firstSelection.value && !secondSelection.value){
            setSecondSelection({'value': value, 'index': index})
            if(isWrong(value)){
                setWrongAnswer(true)
            }
            if(isCorrect(value)){
                if(gameData.length === 2){
                    setIsConcluded(true)
                }
                const temp = [...gameData];
                if (firstSelection.index !== undefined) {
                    temp.splice(firstSelection.index, 1);
                }
                if (firstSelection.index !== undefined) {
                    temp.splice(index > firstSelection.index ? index - 1 : index, 1);
                }
                setGameData(temp);
                reset();
            } 
        }
        
    }
    return (
  <div>
  {!isConcluded &&
    <div className='game-box'>
    {gameData.map((elem, index) => 
        <GameButton
        correctColor={correctColor}
        wrongColor={wrongColor}
        role="button" 
        onClick={()=> handleClick(elem, index)}
        isWrongAnswer={wrongAnswer} 
        isSelected={firstSelection['value'] == elem || secondSelection['value'] == elem} 
        key={elem+index} 
        title={elem}
        />
    )}  
               <style>{`
                    .game-box{
                        width: 100%;
                        display: flex;
                        gap: 12px;
                        justify-content: start;
                        flex-wrap: wrap
                    }
                    button{
                        text-wrap: nowrap
                    }
                `}</style>
     </div>}
      {isConcluded && 'Congratulations'}  
    </div>
    );
}

export default App;

