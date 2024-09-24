import React, { useState } from 'react'
import './App.css';

const App = () => {
  const sofaBtnColors = [
    '/images/sofaBtns/1@4x.png',
    '/images/sofaBtns/2@4x.png',
    '/images/sofaBtns/3@4x.png',
    '/images/sofaBtns/4@4x.png',
    '/images/sofaBtns/5@4x.png'
  ];
  const sofas = [
    '/images/sofa/sofa1.png',
    '/images/sofa/sofa2.png',
    '/images/sofa/sofa3.png',
    '/images/sofa/sofa4.png',
    '/images/sofa/sofa5.png',
  ];
  const tableBtnColors = [
    '/images/tableBtns/btn1.png',
    '/images/tableBtns/btn2.png',
    '/images/tableBtns/btn3.png'
  ];
  const tables = [
    '/images/table/table1.png',
    '/images/table/table2.png',
    '/images/table/table3.png',
  ];

  const [selectedSofaIndex, setSelectedSofaIndex] = useState(0);
  const [sofaBtn, setSofaBtn] = useState(false);
  const [selectedTableIndex, setSelectedTableIndex] = useState(0);
  const [tableBtn, setTableBtn] = useState(false);

  const onSelectSofa = (index) => {
    setSelectedSofaIndex(index);
  };
  const onSelectTable = (index) => {
    setSelectedTableIndex(index);
  }


  return (
    <div id='main' className="max-w-[300px] max-h-[250px]">
      <img src='/images/LCLogo.png' alt='logo' width={69} height={30} className='ml-auto mr-5 py-2'/>
      <img src='/images/+@4x.png' alt='sofaButton' width={26} height={26} className=' relative left-[80px] top-12' onClick={() => setSofaBtn(true)}/>
      <div>
        <img src='/images/table.png' alt='table' className='relative top-[65px] left-12'/>
        <img src='/images/+@4x.png' alt='tableButton' width={26} height={26} className=' relative left-[150px] -top-2'  onClick={() => setTableBtn(true)}/>       
      </div>
      <h1 className='text-[#ffff00] text-[15px] relative ml-5 font-medium'>Պրեմիում որակի <p className='text-white'>բազմոցներ ԵՎ սեղաններ</p></h1>
      {sofaBtn && (
        <div className="fixed top-0 left-0 w-[300px] h-[250px] bg-[#cccccc] z-50">
          <img src='/images/close.png' alt='closeButton' className='cursor-pointer ml-auto mr-3 mt-3 w-[16px] h-[16px]' onClick={() => setSofaBtn(false)}/>
          <img src={sofas[selectedSofaIndex]} alt={`sofa-${selectedSofaIndex}`} className="mx-auto w-[210px] h-[95px]" width={258} height={122}/>
          
          <div className="flex justify-center space-x-2 mt-5">
            {sofaBtnColors.map((color, index) => (
              <div key={index} className="relative">
                <img 
                  src={color} 
                  alt={`color-${index}`} 
                  width={31} 
                  height={31} 
                  className={`cursor-pointer ${selectedSofaIndex === index && "relative bottom-3"}`} 
                  onClick={() => onSelectSofa(index)}
                />

                {selectedSofaIndex === index && (
                  <img 
                    src='/images/1selected@4x.png' 
                    alt='selected' 
                    className='relative bottom-[48px] w-[29px] h-[26px] '
                    width={100} 
                    height={100}
                  />
                )}
              </div>
            ))}
          </div>
          <button className='font-medium rounded-3xl bg-[#ff3333] text-white w-[146px] h-[37px] block mx-auto text-center animate-scale-loop'>Պատվիրել հիմա</button>
        </div>
      )}
      {tableBtn && (
        <div className="fixed top-0 left-0 w-[300px] h-[250px] bg-[#cccccc] z-50">
          <img src='/images/close.png' alt='closeButton' className='cursor-pointer ml-auto mr-3 mt-3 w-[16px] h-[16px]' onClick={() => setTableBtn(false)}/>
          <img src={tables[selectedTableIndex]} alt={`sofa-${selectedTableIndex}`} className="mx-auto w-[210px] h-[95px]" width={258} height={122}/>

          <div className="flex justify-center space-x-2 mt-5">
            {tableBtnColors.map((color, index) => (
              <div key={index} className="relative">
                <img 
                  src={color} 
                  alt={`color-${index}`} 
                  width={31} 
                  height={31} 
                  className={`cursor-pointer ${selectedTableIndex === index && "relative bottom-3"}`} 
                  onClick={() => onSelectTable(index)}
                />

                {selectedTableIndex === index && (
                  <img 
                    src='/images/1selected@4x.png' 
                    alt='selected' 
                    className='relative bottom-[48px] w-[29px] h-[26px] '
                    width={100} 
                    height={100}
                  />
                )}
              </div>
            ))}
          </div>
          
          <button className='font-medium rounded-3xl bg-[#ff3333] text-white w-[146px] h-[37px] block mx-auto text-center animate-scale-loop'>Պատվիրել հիմա</button>
        </div>  
      )}
      
    </div>
  );
}

export default App;
