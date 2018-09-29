import React from 'react'

//distructuer here like props.input / just ({input}) equevalent
export default ({ input, label, meta}) => {

    console.log(meta)
// console.log(props.input)
    return (
<div>
 <label>{label}</label>
<input {...input} style={{ marginBottom:'5px' }}/>
<div className="red-text" style={{marginBottom:'20px'}}>
{meta.touched && meta.error}
</div>
</div>
    )

}
