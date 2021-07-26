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
        backgroundColor: 'blue',
    };

    return (
        <>
            <div style={divStyle} onMouseOver={(e: React.MouseEvent) => {
                if (ref && ref.current) {
                    ref.current.style.zIndex = '0';
                    ref.current.style.left = e.nativeEvent.pageX - 140 + "px";
                    ref.current.style.top = e.nativeEvent.pageY - 140 + "px";
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

            <div style={{marginTop: '700px'}}>
                <div className="division-element-1">
                    Division Element #1
                </div>
                <div className="division-element-2">
                    Division Element #2
                </div>
                <div className="division-element-3">
                    Division Element #3
                </div>
                <div className="division-element-4">
                    Division Element #4
                </div>
                <div className="division-element-5">
                    Division Element #5
                </div>
                <div className="division-element-6">
                    Division Element #6
                </div>
                <div className="division-element-7">
                    Division Element #7
                </div>
            </div>
        </>
    )
}
