import ky from "ky";
import {get, toString} from 'lodash'
import { MutationCache, QueryCache, QueryClient, QueryKey } from "react-query";

const onError = (err:any) => {
    const errorMsg = get(err, "response.data.message") || toString(get(err, "response.data")) || err.message
}


export default new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        return await ky(`${queryKey[0]}`, { timeout: 60 * 1000 }).json();
      },
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 60 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError
  }),
  mutationCache: new MutationCache({
    onError
  })
});

