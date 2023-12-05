
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ListingPage from './components/pages/listing';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
     <ListingPage />
    </QueryClientProvider>
  )
}

export default App
