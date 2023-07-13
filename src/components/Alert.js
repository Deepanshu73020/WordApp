import React from 'react'

function Alert(props) {
    // let box = document.querySelector('.btn-close')
    // setTimeout(()=>{
    //     box.click()
    // },3000)
    return (
        <div className="alert  alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alert}</strong>
        </div>
    )
}

export default Alert