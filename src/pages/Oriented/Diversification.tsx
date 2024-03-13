import { Grid, Typography } from "@mui/material";
import { useSpring, animated } from '@react-spring/web';
import Image1 from '../../assets/images/Diversification1.jpg';
import Image2 from '../../assets/images/Diversification2.jpg';

export default function Diversification() {
  const springs = useSpring({
    from: { x: -1500 },
    to: { x: 0 },
  })
  return (
    <>
          <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12} style={{}}>
          <Typography variant="h3" style={{ color: "#000", fontWeight: 400 }}>Đa dạng văn hóa</Typography>
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
        <Grid item xs={12} md={6} style={{}}>
          <Typography variant="h6" style={{fontStyle:"italic"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam similique reiciendis illum voluptatibus voluptatum necessitatibus, deserunt reiciendis dolore obcaecati veritatis quasi nu illum voluptatibus </Typography>
        </Grid>
      </Grid>


      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6} style={{}} sx={{ p: 4 }}>
          <div>
            <img src={Image1} alt="" style={{ width: "100%", height: "500px" }} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{}} sx={{ p: 4 }}>
          <div>
            <img src={Image2} alt="" style={{ width: "100%", height: "500px" }} />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
