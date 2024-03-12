import useAsync from "../useAsync";
import * as jsonApi from "../../services/jsonApi"

export default function useGetJsons() {
  const {
    data: jsons,
    loading: getJsonsLoading,
    error: getJsonsError,
    act: getJsons,
  } = useAsync(() => jsonApi.getJsons(), false);

  return {
    jsons: jsons,
    getJsonsLoading: getJsonsLoading,
    getJsonsError: getJsonsError,
    getJsons: getJsons
  };
}
