import React, { useState } from 'react'
import { useDispatch, } from "react-redux";
import { createRiskToleranceData } from '../../Redux/actions/riskAction';
import './RiskForm.scss';



function RiskForm() {
    const [values, setValues] = useState({
        riskScore: '',
        nigerianStock: '',
        foreignStock: '',
        techStock: '',
        emergingStock: '',
        nigeriaBond: '',
        foreignBond: '',
        commodities: '',
        realEstate: '',
        tBills: '',
        Alternative: '',
    })
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value.replace(/\D/g, ""),
        });
    };
    const clearValues = () => {
        setValues({
            riskScore: '',
            nigerianStock: '',
            foreignStock: '',
            techStock: '',
            emergingStock: '',
            nigeriaBond: '',
            foreignBond: '',
            commodities: '',
            realEstate: '',
            tBills: '',
            Alternative: '',

        })
    }
    console.log("value is", values)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRiskToleranceData(values));
        alert('risk tolerance created successfully');
        clearValues();
    }


    return (
        <div className='RiskFormContainer'>
            <div className='container'>
                <div className='form-input'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <form onSubmit={handleSubmit} >
                                <div className='input-div'>
                                    <label >riskScore</label>
                                    <input maxLength='2' type="text" placeholder="riskScore" name="riskScore" className='inputfield' value={values.riskScore} required onChange={handleChange} />
                                </div>

                                <div className='input-div'>
                                    <label >nigerianStock</label>
                                    <input maxLength='2' type="text" placeholder="nigerianStock" name="nigerianStock" className='inputfield' value={values.nigerianStock} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >foreignStock</label>
                                    <input maxLength='2' type="text" placeholder="foreignStock" name="foreignStock" className='inputfield' value={values.foreignStock} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >techStock</label>
                                    <input maxLength='2' type="text" placeholder="techStock" name="techStock" className='inputfield' value={values.techStock} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >emergingStock</label>
                                    <input maxLength='2' type="text" placeholder="emergingStock" name="emergingStock" className='inputfield' value={values.emergingStock} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >nigeriaBond</label>
                                    <input maxLength='2' type="text" placeholder="nigeriaBond" name="nigeriaBond" className='inputfield' value={values.nigeriaBond} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >foreignBond</label>
                                    <input maxLength='2' type="text" placeholder="foreignBond" name="foreignBond" className='inputfield' value={values.foreignBond} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >commodities</label>
                                    <input maxLength='2' type="text" placeholder="commodities" name="commodities" className='inputfield' value={values.commodities} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >realEstate</label>
                                    <input maxLength='2' type="text" placeholder="realEstate" name="realEstate" className='inputfield' value={values.realEstate} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >tBills</label>
                                    <input maxLength='2' type="text" placeholder="tBills" name="tBills" className='inputfield' value={values.tBills} required onChange={handleChange} />
                                </div>
                                <div className='input-div'>
                                    <label >Alternative</label>
                                    <input maxLength='2' type="text" placeholder="Alternative" name="Alternative" className='inputfield' value={values.Alternative} required onChange={handleChange} />
                                </div>

                                {/* <div className='button-div'>
                                            <button onClick={clearBlog} className="submitButton clear">Clear</button>
                                            
                                        </div> */}
                                <div style={{ width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                    <button type="submit" className='pageButton'>Submit</button>
                                </div>


                            </form>
                        </div>
                        <div className='col-lg-1 col-md-1 col-sm-12'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskForm