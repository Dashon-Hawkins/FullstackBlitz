import React from 'react'

//distructuer here like props.input / just ({input}) equevalent
export default ({ input, label, meta }) => {

    console.log(meta)
// console.log(props.input)
    return (
<div>
 <label>{label}</label>
<input {...input}/>
{meta.touched && meta.error}
</div>
    )

}
