import {useMutation} from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: fetchUserLogin,
  });
}

const fetchUserLogin = async ({login, pass}) => {
  // const resp = await axios.post(API_BASE + 'manager', {
  //   login: login,
  //   password: pass,
  // })
  // return resp.data;
  if (login === 'admin' && pass === 'admin')
    return 'Authorized'
  throw Error(`Неверный логин или пароль`);
};