import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonTotalGrowthBarChart = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Skeleton variant="text" />
                  </Grid>
                  <Grid item xs={12}>
                    <Skeleton variant="rectangular" height={20} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Skeleton variant="rectangular" height={50} width={80} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={530} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SkeletonTotalGrowthBarChart;
