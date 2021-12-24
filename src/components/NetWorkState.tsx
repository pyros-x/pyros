import FlashAutoIcon from '@mui/icons-material/FlashAuto';

export default function NetWorkState(props:any) {
  const colorSwitch = props.state?'success':'disabled';
  console.log(colorSwitch);
  return (
    <FlashAutoIcon fontSize="small" color={colorSwitch}/>
  );
}
