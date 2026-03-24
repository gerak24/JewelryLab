import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "../keys";
import {MockOrders} from "../../../shared/MockData/MockOrders";

export function useFetchOrders() {
  return useQuery({
    queryKey: [QueryKeys.orders.list],
    queryFn: async () => {
      return await getOrders()
    },
    retry: 3,
  });
}


const getOrders = async () => {
  // const token = JSON.parse(localStorage.getItem("User")).token;
  // const resp = await axios.get(API_BASE + 'orders', { headers: {"Authorization" : `Bearer ${token}`}});
  // return resp.data ?? toast.success("Ожидайте");
  return MockOrders;
}; 