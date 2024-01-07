import { useState } from "react";

const messages = [
  "Hello Shwe Yee 🌼",
  "I wanna tell you that 😶",
  "I love u so much & u r my sun shine ☀️ ",
];

export default function App() {
  return(
    <div>
      <Steps />
      <Steps />
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1)
  }
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1)
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)} >
        &times;
      </button>
      {isOpen && (
        <div className="steps" >
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button 
            style={{backgroundColor: '#7950f2', color: '#fff'}}
            onClick={handlePrevious} 
            >Previuos</button>
            <button 
            style={{backgroundColor: '#7950f2', color: '#fff'}} 
            onClick={handleNext}
            >Next</button>
          </div>
        </div>
      )}
    </div>
  )
}