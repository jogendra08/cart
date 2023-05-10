import { useState } from "react"
import React from 'react'

const Form = () => {

    const [form, setForm] = useState()

    const handleData=()=>{
        
    }

    const handleChange = () => {
        console.log(setForm)
    }

    return (
        <div>
            <form>
                <label>username</label>
                <input onChange={handleChange} value={form} />
                <label>password</label>
                <input onChange={handleChange} value={form} />
                <button onClick={handleData}>click me</button>
            </form>
        </div>
    )
}

export default Form
