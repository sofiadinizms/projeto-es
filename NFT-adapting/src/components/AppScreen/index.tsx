import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { View } from './styles';

const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

type WithChildren<T = unknown> = T & { children: React.ReactNode };

const AppScreen: React.FC<WithChildren> = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
    )}
    >
      <View>{children}</View>
    </ScrollView>
  );
};

export default AppScreen;
