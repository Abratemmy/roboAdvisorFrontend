import React, { useEffect } from 'react';
import { getRiskToleranceData } from '../../Redux/actions/riskAction';
import { useDispatch, useSelector } from "react-redux";
import spinner from '../../Images/spinner.svg'

function ToleranceData({ indexNumber }) {
    const dispatch = useDispatch();

    const riskData = useSelector((state) => state.riskToleranceReducer)

    useEffect(() => {
        dispatch(getRiskToleranceData())
    }, [dispatch])
    return (
        <div className='toleranceDataWrapper'>
            {!riskData.posts.length ?
                <div className='NoPostErrorImg'>
                    <p>This might takes times as the backend is uploaded on a free hosting platform. Please refresh the browser if possible</p>
                    <div className='NoPost'>
                        <img src={spinner} alt='' />
                        <h3>Loading...</h3>
                    </div>

                </div> : <div>
                    {riskData.posts.filter(data => data.riskScore === indexNumber).map((filteredData, index) => {
                        return (
                            <div key={index} >
                                <div className='riskcontent'>
                                    <div className='Name'>Nigeria Stock</div>
                                    <div className='progress-line' data-percent="100%" >
                                        <span style={{ width: `${filteredData.nigerianStock}%` }} >{filteredData.nigerianStock}%</span>
                                    </div>
                                </div>
                                <div className='riskcontent'>
                                    <div className='Name'>Foreign Stock</div>
                                    <div className='progress-line' data-percent="100%" >
                                        <span style={{ width: `${filteredData.foreignStock}%` }} >{filteredData.foreignStock}%</span>
                                    </div>
                                </div>
                                <div className='riskcontent'>
                                    <div className='Name'>Tech Stock</div>
                                    <div className='progress-line' data-percent="100%" >
                                        <span style={{ width: `${filteredData.techStock}%` }} >{filteredData.techStock}%</span>
                                    </div>
                                </div>
                                <div className='riskcontent'>
                                    <div className='Name'>Emerging Stock</div>
                                    <div className='progress-line' data-percent="100%" >
                                        <span style={{ width: `${filteredData.emergingStock}%` }} >{filteredData.emergingStock}%</span>
                                    </div>
                                </div>
                                {filteredData.nigeriaBond === 0 ? <> </> :
                                    <div className='riskcontent'>
                                        <div className='Name'>Nigeria Bond</div>
                                        <div className='progress-line' data-percent="100%" >
                                            <span style={{ width: `${filteredData.nigeriaBond}%` }} >{filteredData.nigeriaBond}%</span>
                                        </div>
                                    </div>
                                }
                                {filteredData.foreignBond === 0 ? <> </> :
                                    <div className='riskcontent'>
                                        <div className='Name'>Foreign Bond</div>
                                        <div className='progress-line' data-percent="100%" >
                                            <span style={{ width: `${filteredData.foreignBond}%` }} >{filteredData.foreignBond}%</span>
                                        </div>
                                    </div>
                                }

                                {filteredData.commodities === 0 ? <> </> :
                                    <div className='riskcontent'>
                                        <div className='Name'>Commodities</div>
                                        <div className='progress-line' data-percent="100%" >
                                            <span style={{ width: `${filteredData.commodities}%` }} >{filteredData.commodities}%</span>
                                        </div>
                                    </div>
                                }

                                <div className='last'>
                                    <div className='content'>
                                        <div className='Name'>Real Estate</div>
                                        <span style={{ width: `${filteredData.realEstate}%` }} >{filteredData.realEstate}%</span>
                                    </div>
                                    <div className='content'>
                                        <div className='Name'>TBills</div>
                                        <span style={{ width: `${filteredData.tBills}%` }} >{filteredData.tBills}%</span>
                                    </div>
                                    <div className='content'>
                                        <div className='Name'>Alternative</div>
                                        <span style={{ width: `${filteredData.Alternative}%` }} >{filteredData.Alternative}%</span>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </div>}
        </div>
    )
}

export default ToleranceData