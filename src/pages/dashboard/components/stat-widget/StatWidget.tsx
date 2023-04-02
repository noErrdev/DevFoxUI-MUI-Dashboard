import { Widget, WidgetProps } from '../../../../components/widget/Widget';
import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

interface StatWidgetProps extends WidgetProps {
  value: string;
  icon: ReactNode;
}

export const StatWidget = ({ title, value, icon }: StatWidgetProps) => {
  return (
    <Widget title={title}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontSize={'24px'} fontWeight={'bold'}>
          {value}
        </Typography>
        <Stack alignItems={'center'}>
          {icon}
        </Stack>
      </Stack>
    </Widget>
  );
};
