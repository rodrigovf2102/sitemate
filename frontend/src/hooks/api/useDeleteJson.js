import useAsync from "../useAsync";
import * as jsonApi from "../../services/jsonApi"

export default function useDeleteJson() {
  const {
    data: json,
    loading: deleteJsonLoading,
    error: deleteJsonError,
    act: deleteJson,
  } = useAsync((body) => jsonApi.deleteJsonById(body), false);

  return {
    strap: json,
    updateJsonLoading: deleteJsonLoading,
    deleteJsonError: deleteJsonError,
    deleteJson: deleteJson
  };
}
