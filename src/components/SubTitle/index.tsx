import {styled} from "@mui/material";
type SubTitleProps = {
  text: string;
  color?: string;
};
export default function SubTitle(props: SubTitleProps) {
    const SubTitle = styled('span')(({theme}) => ({
        color: theme.palette.secondary.contrastText,
        fontSize: '15px',
        fontWeight: 400,
        letterSpacing: '5px',
        textTransform: 'uppercase'
    }))
  return <SubTitle style={{ color: props.color }}>{props.text}</SubTitle>;
}
