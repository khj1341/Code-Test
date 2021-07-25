import './App.css';
import React, { useRef, useState } from 'react';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

    const [doughnutCnt, setDoughnutCnt] = useState<number>(1);

    const divStyle: any = {
        width: '300px',
        height: '300px',
        top: '200px',
        left: '200px',
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'transparent',
        border: '1px solid black'
    };

    return (
        <>
            <div style={divStyle} onMouseOver={(e: React.MouseEvent) => { 
                if (ref && ref.current) {
                    ref.current.style.zIndex = '0';
                    ref.current.style.left = e.nativeEvent.pageX-140 + "px";
                    ref.current.style.top = e.nativeEvent.pageY-140 + "px";
                }

                if (ref?.current?.style && ref?.current?.style.left !== '') {
                    setDoughnutCnt(doughnutCnt + 1);
                }
            }}>
            </div>
            {
                new Array<number>(doughnutCnt).fill(0).map((_, index) => {
                    return (
                        <div ref={ref} key={index} className="circle" onMouseOver={(e: React.MouseEvent) => {
                            e.stopPropagation();
                        }}></div>
                    );
                })
            }
        </>
    )
}
