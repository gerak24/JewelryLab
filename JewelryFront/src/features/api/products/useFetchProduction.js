import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "../keys";
import {MockNomenc} from "../../../shared/MockData/MockNomenc";

export function useFetchProduction(showDeleted = false) {
  return useQuery({
    queryKey: [QueryKeys.nomenclature.products, {showDeleted}],
    queryFn: async () => {
      return await getProduction(showDeleted)
    },
    retry: 3,
  });
}


const getProduction = async (showDeleted = false) => {
  // const resp = await axios.get(API_BASE + 'products?showDeleted=' + showDeleted);
  // return resp.data ?? toast.success("Ожидайте");
  return showDeleted ? MockNomenc : MockNomenc.filter(product => product.isDeleted === false);
}; 