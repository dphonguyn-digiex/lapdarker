import React from 'react';
import { Box, Skeleton } from '@mui/material';
function SkeletonTable() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default SkeletonTable;
