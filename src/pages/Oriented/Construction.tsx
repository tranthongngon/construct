import { Grid, Typography, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Image1 from '../../assets/images/Construction1.png';
import Image2 from '../../assets/images/Construction2.png';
import "./style.css";
export default function Construction() {

  const springs = useSpring({
    from: { x: -1500 },
    to: { x: 0 },
  })

  return (
    < >

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
          <Typography variant="h3" style={{ color: "#000", fontWeight: 500 }}> Xây dựng </Typography>
        </Grid>
        <Grid item xs={12} md={12} style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
          <Typography variant="h6" > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam similique illum voluptatibus voluptatum necessitatibus, deserunt reiciendis dolore obcaecati veritatis quasi numquam tenetur nesciunt nostrum eius beatae quam cum labore? Ad magni hic architecto ea.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }} >

        <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={Image1} alt="" />
              </div>
              <div className="back">
                <p>AAA</p>
                <h2>abcd</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim cupiditate quidem voluptate aut dolor iste a eveniet libero maxime!</p>
                <a href="#">Construction</a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
          <div className="box">
            <div className="card">
              <div className="front">
                <img src={Image2} alt="" />
              </div>
              <div className="back">
                <p>BBBB</p>
                <h2>efgh</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim cupiditate quidem voluptate aut dolor iste a eveniet libero maxime!</p>
                <a href="#">Construction</a>
              </div>
            </div>
          </div>
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
