import { CalculatorTab } from '../Calc/CalculatorTab.jsx';
import { ChartTab } from '../Calc/ChartTab.jsx';
import React, { useState,  } from 'react';
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer.jsx';
import './HomePage.css';
import { useSelector } from 'react-redux'

export function Homepage() {
  const chartClicked = useSelector((state) => state.chartClicked.value)

  const [calcData, getCalcData] = useState([])
  const fetchData = (data) => { //fetch data from calc and pass to chart
    getCalcData(data)  //set data and pass to chart 
  }
// style={chartClicked ? { display: '' } : { display: 'none' }}
  return (
    <>
    <Navbar />
      <div className="homePage_outer">

        <div className="homePage_logo">
          <h1>
            Bitcoin position size calculator
          </h1>
        </div>

        <div className="homePage_row">
          <div className="homePage_cal_tab">
            {/* ADD EVENT LISTNER INSTEAD  */}
            <React.StrictMode>
              <CalculatorTab onCalculate={fetchData} />
            </React.StrictMode>

          </div>
          <div className="homePage_chart_tab" style={chartClicked ? { display: 'flex' } : { display: 'none' }}>

            <ChartTab reload={calcData} />
          </div>
        </div>
      </div>
      <Footer />


    </>
  )

}
