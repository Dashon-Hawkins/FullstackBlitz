import React from 'react'

//distructuer here like props.input / just ({input}) equevalent
export default ({ input, label }) => {

// console.log(props.input)
    return (
<div>
 <label>{label}</label>
<input {...input}/>
</div>
    )

}
