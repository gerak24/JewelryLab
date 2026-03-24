import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {QueryKeys} from "../keys";

export function useUpdateProduction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduction,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.nomenclature.products]})
  });
}

const updateProduction = async ({productId, name, price, image, description, isHotOffer, isDeleted}) => {
// const token = JSON.parse(localStorage.getItem("User")).token;
// const resp = await axios.put(API_BASE + 'products', {
//   id: productId,
//   name,
//   price,
//   image,
//   description,
//   isHotOffer,
//   isDeleted
// }, {headers: {"Authorization": `Bearer ${token}`}});
// return resp.data ?? toast.success("Ожидайте");
  toast.error("Не предусмотрено в демо-режиме");
};