/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const navigationRef = React.createRef<any>();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const navigate = (name: any, params?: any) => navigationRef.current?.navigate(name, params);

export default {
  navigate,
};
