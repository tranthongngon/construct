import { Grid, Typography, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web'

export default function OrientedHeader() {

    const springs = useSpring({
        from: { x: -1500 },
        to: { x: 0 },
    })

    return (
        < >

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" style={{color:"#16315e",fontWeight: 500}}> ĐỊNH HƯỚNG <br /> PHÁT TRIỂN </Typography>
                </Grid>
                <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                    <Typography variant="h6" > Tập trung vào việc phát triển các dự án xây dựng bền vững, kết hợp công nghệ tiên tiến và quy trình làm việc hiệu quả, nhằm đáp ứng nhu cầu của khách hàng và góp phần vào sự phát triển bền vững của cộng đồng.
                    </Typography>
                </Grid>
            </Grid>

            <animated.div
                style={{
                    width: "100%",
                    height: "1px",
                    background: '#000',
                    borderRadius: 1,
                    ...springs,
                }}
            />
        </>

    )

}
