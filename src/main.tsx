import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {AppNavigation} from '@/navigation';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <AppNavigation />
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
