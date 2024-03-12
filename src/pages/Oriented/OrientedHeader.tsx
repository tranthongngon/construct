import { Typography, styled } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useSpring, animated } from '@react-spring/web'

const Content = styled('div')({
    height: '130px',
    color: '#16315e',
    display: 'flex',
    justifyContent: 'space-between',
    h2: {
        fontFamily: 'cursive !important',
    }
});

export default function OrientedHeader() {

    const springs = useSpring({
        from: { x: -1500 },
        to: { x: 0 },
    })

    return (
        <>
            <Content className="oriented__header">
                <Typography variant="h2" > ĐỊNH HƯỚNG <br /> PHÁT TRIỂN </Typography>
                <ArrowUpwardIcon style={{ fontSize: '40px', color: '#16315e', marginTop: '20px' }} />
            </Content>

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
