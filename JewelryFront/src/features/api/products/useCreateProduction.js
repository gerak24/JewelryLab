import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {QueryKeys} from "../keys";

export function useCreateProduction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduction,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.nomenclature.products]})
  });
}

const createProduction = async ({name, price, image, description, isHotOffer, isDeleted}) => {
 // const token = JSON.parse(localStorage.getItem("User")).token;
 // const resp = await axios.post(API_BASE + 'products', {
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