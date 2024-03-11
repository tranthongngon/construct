import { Typography, styled } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Content = styled('div')({
  borderBottom: '1px solid black',
  height: '130px',
  color: '#16315e',
  display: 'flex',
  justifyContent: 'space-between',
  h2: {
    fontFamily: 'cursive !important',
  }
});

export default function OrientedHeader() {

  return (
    <Content className="oriented__header">
      <Typography variant="h2" > ĐỊNH HƯỚNG <br /> PHÁT TRIỂN </Typography>
      <ArrowUpwardIcon style={{ fontSize: '40px', color: '#16315e',marginTop: '20px' }}/>
    </Content>
  )

}
