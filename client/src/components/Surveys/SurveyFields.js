import React from 'react'

//distructuer here like props.input / just ({input}) equevalent
export default ({ input }) => {

// console.log(props.input)


    return (
<div>
<input {...input}/>
</div>
    )

}
