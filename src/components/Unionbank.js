import React from 'react'
import Andhrabank from './Andhrabank'
import Corporatebank from './Corporatebank'

export default function Unionbank() {
    return (
        <div>
            <Andhrabank location="Kavali" />
            <Corporatebank location="Kakinada" />
        </div>
    )
}
