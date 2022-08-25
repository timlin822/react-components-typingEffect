import {useState,useEffect,useRef} from 'react';

const TypeWriter=({text})=>{
    const [currentText,setCurrentText]=useState("");
    const index=useRef(0);

    useEffect(()=>{
        setCurrentText(text[0]);
        index.current=0;
    },[text]);

    useEffect(()=>{
        const timeoutId=setTimeout(()=>{
            setCurrentText(prevText=>prevText+text.charAt(index.current));
            index.current++;
        },500);
        
        if(currentText===text){
            setTimeout(()=>{
                setCurrentText(text[0]);
                index.current=0;
            },2000);
        }

        return ()=>{
            clearTimeout(timeoutId);
        }
    },[currentText,text]);

    return (
        <h1 className="banner-title">{currentText}</h1>
    );
}

export default TypeWriter;