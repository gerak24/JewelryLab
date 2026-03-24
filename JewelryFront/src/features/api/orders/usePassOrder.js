import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QueryKeys} from "../keys";
import toast from "react-hot-toast";

export function usePassOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: passOrder,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.orders.list]})
  });
}

const passOrder = async (orderId) => {
// const token = JSON.parse(localStorage.getItem("User")).token;
// const resp = await axios.post(API_BASE + 'orders/passOrder/' + orderId, {}, {headers: {"Authorization": `Bearer ${token}`}})
// return resp.data;
  toast.error("Не предусмотрено в демо-режиме");
};