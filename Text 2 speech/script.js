const textarea=document.querySelector("textarea");
const button =document.getElementById("cts");

const texttospeech =()=>{
    const synth=window.speechSynthesis;
    const text=textarea.value;

    if(!synth.speaking && text){
        const uttar=new SpeechSynthesisUtterance(text);
        synth.speak(uttar);
    }

    if(text.length >50){
        if(synth.speaking && isSpeaking){
            button.innerText="Pause";
            synth.resume();
            isSpeaking=false;
        }else{
            button.innerText="Resume";
            synth.pause();
            isSpeaking=true;
        }
    }else{
        isSpeaking=false;
        button.innerText="Speaking";

    }

    setInterval(()=>{
        if(!synth.speaking && text){
            isSpeaking=true;
            button.innerText="Convert to Speech";
        }


    })
}


button.addEventListener("click",texttospeech)
