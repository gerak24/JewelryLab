import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QueryKeys} from "../keys";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.orders.list]})
  });
}

const createOrder = async ({name, contact, comment, items}) => {
  // const resp = await axios.post(API_BASE + 'orders', {
  //   customer: name,
  //   contact: contact,
  //   comment: comment,
  //   products: items,
  // })
  // return resp.data;
  toast.error("Не предусмотрено в демо-режиме");
};