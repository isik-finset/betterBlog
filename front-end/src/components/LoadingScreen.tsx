import { styled } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';
import ProgressBar from './ProgressBar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

type Props = {
  isDashboard?: boolean;
  sx?: SxProps;
};

export default function LoadingScreen({ ...other }: Props) {
  return (
    <>
      <ProgressBar />

      <RootStyle {...other}>
        <Box>loading...</Box>
      </RootStyle>
    </>
  );
}
