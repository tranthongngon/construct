import { Grid, Typography, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Image1 from '../../assets/images/Construction1.png';
import Image2 from '../../assets/images/Construction2.png';
import Image3 from '../../assets/images/Construction3.png';
import Image4 from '../../assets/images/Construction4.png';
import Image5 from '../../assets/images/Construction5.png';
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

            <Grid container spacing={2} sx={{ mt: 2 }} >

                <Grid item xs={12} md={4} sx={{ p: 4 }}>
                    <animated.div
                        style={{
                            width: "100%",
                            height: "1px",
                            background: 'red',
                            borderRadius: 1,
                            ...springs,
                        }}
                    />
                    <div style={{ margin: "8px 0px" }}>
                        <Typography style={{ fontFamily: 'cursive', color: 'red' }} variant="h4">TỔNG THẦU</Typography>
                        <p style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis vitae, tempore ducimus earum magnam ex ullam amet sequi beatae consequuntur ipsa soluta similique cupiditate nemo. Accusamus quasi placeat magni tempora porro ullam. Eligendi, assumenda atque fugit laboriosam culpa minus tenetur dolor sint explicabo eius possimus eum qui deserunt exercitationem! Placeat soluta perspiciatis nisi veritatis necessitatibus aperiam officia pariatur! Quasi aut quidem sit officiis eos esse temporibus, mollitia maxime odit ipsum et nulla, illum porro dolor molestiae at eius itaque corrupti reprehenderit illo? Rem nihil voluptas veritatis quod dicta pariatur facere nobis. Possimus labore, ab quibusdam laborum quam obcaecati nobis.</p>
                    </div>
                    <div style={{border:'2px solid red',padding:'2px',boxShadow: '5px 10px'}} className='tongThau-img'>
                        <img src={Image3} alt="" style={{ width: "100%", height: "500px" }} />
                    </div>
                </Grid>

                <Grid item xs={12} md={4} sx={{ p: 4 }} style={{ marginTop: "112px" }} className="DesignAndBuild">
                    <animated.div
                        style={{
                            width: "100%",
                            height: "1px",
                            background: 'blue',
                            borderRadius: 1,
                            ...springs,
                        }}
                    />
                    <div style={{ margin: "8px 0px" }}>
                        <Typography style={{ fontFamily: 'cursive', color: 'blue' }} variant="h4">DESIGN & BUILD</Typography>
                        <p style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis vitae, tempore ducimus earum magnam ex ullam amet sequi beatae consequuntur ipsa soluta similique cupiditate nemo. Accusamus quasi placeat magni tempora porro ullam. Eligendi, assumenda atque fugit laboriosam culpa minus tenetur dolor sint explicabo eius possimus eum qui deserunt exercitationem! Placeat soluta perspiciatis nisi veritatis necessitatibus aperiam officia pariatur! Quasi aut quidem sit officiis eos esse temporibus, mollitia maxime odit ipsum et nulla, illum porro dolor molestiae at eius itaque corrupti reprehenderit illo? Rem nihil voluptas veritatis quod dicta pariatur facere nobis. Possimus labore, ab quibusdam laborum quam obcaecati nobis.</p>
                    </div>
                    <div style={{border:'2px solid blue',padding:'2px',boxShadow: '5px 10px'}} className='DesignAndBuild-img styleImg'>
                        <img src={Image4} alt="" style={{ width: "100%", height: "550px" }} />
                    </div>
                </Grid>

                <Grid item xs={12} md={4} sx={{ p: 4 }} style={{ marginTop: "222px" }} className='MAndE' >
                    <animated.div
                        style={{
                            width: "100%",
                            height: "1px",
                            background: '#969608',
                            borderRadius: 1,
                            ...springs,
                        }}
                    />
                    <div style={{ margin: "8px 0px" }}>
                        <Typography style={{ fontFamily: 'cursive', color: '#969608' }} variant="h4">M&E</Typography>
                        <p style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis vitae, tempore ducimus earum magnam ex ullam amet sequi beatae consequuntur ipsa soluta similique cupiditate nemo. Accusamus quasi placeat magni tempora porro ullam. Eligendi, assumenda atque fugit laboriosam culpa minus tenetur dolor sint explicabo eius possimus eum qui deserunt exercitationem! Placeat soluta perspiciatis nisi veritatis necessitatibus aperiam officia pariatur! Quasi aut quidem sit officiis eos esse temporibus, mollitia maxime odit ipsum et nulla, illum porro dolor molestiae at eius itaque corrupti reprehenderit illo? Rem nihil voluptas veritatis quod dicta pariatur facere nobis. Possimus labore, ab quibusdam laborum quam obcaecati nobis.</p>
                    </div>
                    <div style={{border:'2px solid #969608',padding:'2px',boxShadow: '5px 10px '}} className="MAndE-img">
                        <img src={Image5} alt="" style={{ width: "100%", height: "600px" }} />
                    </div>
                </Grid> 
         
            </Grid >


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
