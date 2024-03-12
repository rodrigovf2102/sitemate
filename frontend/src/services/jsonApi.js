import api from "./api";

export async function getJsons() {
  const response = await api.get(`/sitemate`)
  return response.data;
};

export async function postJson(body) {
    console.log(body);
    const response = await api.post(`/sitemate`, body)
    return response.data;
};

export async function updateJsonById(body) {
    const response = await api.put(`/sitemate`, body)
    return response.data;
};

export async function deleteJsonById(body) {
    const response = await api.delete(`/sitemate`, body)
    return response.data;
};
