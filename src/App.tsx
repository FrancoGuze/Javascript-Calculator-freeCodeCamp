import { useState } from 'react'
import { Button } from './button'
import './App.css'

function App() {
  const [calcChain, setCalcChain] = useState('')
  const [actualNumber, setActualNumber] = useState('0')


  console.log(`actualnum: ${actualNumber} \nCalcChain: ${calcChain}`)




  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    const clickedButton = e.currentTarget.value;




    // actualNumber es un digito 
    if (actualNumber.match(/[\d]$/)) {
      console.log('numero actual es un DIGITO')

      //Si el boton usado es un operador
      if (clickedButton.match(/[+/*-]/)) {
        console.log('Number es DIGITO y clicked operador')

        if (calcChain.match('=')) {
          setCalcChain(actualNumber + clickedButton)
          setActualNumber(clickedButton)
        }
        else {
          setCalcChain(calcChain + clickedButton)
          setActualNumber(clickedButton)

        }


      }
      //Si el boton usado es un DIGITO
      else if (clickedButton.match(/[\d]/)) {
        console.log('Number es DIGITO y clicked DIGITO')
        if (calcChain.match('=')) {
          setCalcChain(clickedButton)
          setActualNumber(clickedButton)
        }
        else {
          setActualNumber(actualNumber == '0' ? clickedButton : actualNumber + clickedButton)
          setCalcChain(calcChain == '0' && actualNumber == '0' ? clickedButton : calcChain + clickedButton)
        }
      }
      //Si el boton usado es un PUNTO
      else if (clickedButton.match(/[.]/) && !actualNumber.match(/[.]/)) {
        setCalcChain(calcChain + clickedButton)
        setActualNumber(actualNumber + clickedButton)
      }
    }

    //Si el numero actual es un operador
    else if (actualNumber.match(/[+/*-]$/)) {
      if (clickedButton.match(/\d/)) {
        setCalcChain(calcChain + clickedButton)
        setActualNumber(clickedButton)
      }
      else if (clickedButton.match(/[+/*]/)) {
        console.log('Sale a la cancha c')
        if (calcChain.match(/[+/*-]$/)) {
          setCalcChain(calcChain.replace(/[*+/]-?$/, clickedButton));
        } else {
          setCalcChain(calcChain + clickedButton);
        }
        setActualNumber(clickedButton);
      }
      else if (clickedButton.match(/[-]/)) {
        if (!calcChain.match(/[-]$/)) {
          console.log('entro en la condicion del menos')
          setCalcChain(calcChain + clickedButton)
          setActualNumber(clickedButton)
        }
      }
    }

    else if (actualNumber.match(/[.]/)) {

      if (clickedButton.match(/[\d]/)) {
        setCalcChain(calcChain + clickedButton)
        setActualNumber(actualNumber + clickedButton)
      }
      else { return }
    }

    calcChain.charAt(0).match(/[+/*]/) ? setCalcChain(calcChain.slice(1, calcChain.length)) : '';

    // FINAL DE HANDLE CLICK
  }





  const handleClear = () => {
    setActualNumber('0')
    setCalcChain('')
  }

  // Handle calculation function
  const handleCalc = () => {

    console.log(calcChain)
    setCalcChain(calcChain + '=' + eval(calcChain))
    setActualNumber(String(eval(calcChain)))
  }

  return (
    <div className='calculator'>
      <div className='displays'>
        <div id="formula">{calcChain}</div>
        <div id="display">{actualNumber}</div>
      </div>
      <Button funct={handleClick} id="one" val="1" >1</Button>
      <Button funct={handleClick} id="two" val="2">2</Button>
      <Button funct={handleClick} id="three" val="3">3</Button>
      <Button funct={handleClick} id="four" val="4">4</Button>
      <Button funct={handleClick} id="five" val="5">5</Button>
      <Button funct={handleClick} id="six" val="6">6</Button>
      <Button funct={handleClick} id="seven" val="7">7</Button>
      <Button funct={handleClick} id="eight" val="8">8</Button>
      <Button funct={handleClick} id="nine" val="9">9</Button>
      <Button funct={handleClick} id="zero" val="0">0</Button>
      <Button funct={handleCalc} id="equals" val='='>=</Button>
      <Button funct={handleClick} id="add" val='+'>+</Button>
      <Button funct={handleClick} id="multiply" val='*'>X</Button>
      <Button funct={handleClick} id="subtract" val='-'>-</Button>
      <Button funct={handleClick} id="divide" val='/'>/</Button>
      <Button funct={handleClick} id="decimal" val='.'>.</Button>
      <Button funct={handleClear} id="clear" val='clear'>AC</Button>
    </div>
  )
}

export default App
