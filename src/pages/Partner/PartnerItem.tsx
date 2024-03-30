import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function PartnerItem({ img = "", text = "abc", companyName = "" }) {
    return (
        <>
            <div>
                <img src={img} alt="" height={'300px'} width={'100%'} className="" />
            </div>
            <div>
                <Typography variant="h3" style={{ fontFamily: 'cursive' }}> {companyName}</Typography>
                <p style={{ fontFamily: 'cursive' }}>{text}</p>
            </div>
   
        </>
    )
}
