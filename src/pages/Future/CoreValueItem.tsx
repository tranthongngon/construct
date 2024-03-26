import { Divider, Grid, Typography } from '@mui/material'

export default function CoreValueItem({ color = "blue", img = "", textMain = "", text = "" }) {
    return (
        <div style={{ padding: "10px 20px" }}>
            <div>
                <img src={img} alt="" height={100} width={100} />
            </div>
            <div style={{}}>
                <Divider />
                <Typography variant="h4" style={{ color: color, fontStyle: "italic", textAlign: "right" }}>{textMain}</Typography>
                <p>{text}</p>
            </div>
        </div>
    )
}
