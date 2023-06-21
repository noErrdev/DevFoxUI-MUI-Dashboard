import { Box, styled } from '@mui/material';
import WelcomeSvg from '../../../../assets/backgrounds/widget/welcome.svg';

export const WelcomeWidgetContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${WelcomeSvg})`,
  backgroundSize: 'cover',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 6),
  color: theme.palette.primary.contrastText,
  minHeight: '235px',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

export const WelcomeWidgetContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  boxShadow: 'inner',
  zIndex: 2,
}));