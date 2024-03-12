import useAsync from "../useAsync";
import * as jsonApi from "../../services/jsonApi"

export default function usePostJson() {
  const {
    data: json,
    loading: postJsonLoading,
    error: postJsonError,
    act: postJson,
  } = useAsync((body) => jsonApi.postJson(body), false);

  return {
    strap: json,
    postJsonLoading: postJsonLoading,
    postJsonError: postJsonError,
    postJson: postJson
  };
}
