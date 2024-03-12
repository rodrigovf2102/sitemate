import useAsync from "../useAsync";
import * as jsonApi from "../../services/jsonApi"

export default function useUpdateJson() {
  const {
    data: json,
    loading: updateJsonLoading,
    error: updateJsonError,
    act: updateJson,
  } = useAsync((body) => jsonApi.updateJsonById(body), false);

  return {
    strap: json,
    updateJsonLoading: updateJsonLoading,
    updateJsonError: updateJsonError,
    updateJson: updateJson
  };
}
