import { Typography } from '@mui/material'
import React, { CSSProperties } from 'react'

interface ValidationErrorMsgProps {
    msg: string,
    style?: CSSProperties
}

const ValidationErrorMsg = (props: ValidationErrorMsgProps) => {
  return (
    <Typography variant='body2' style={{color: "red", ...props.style}}>
        {props.msg}
    </Typography>
  )
}

export default ValidationErrorMsg