const API_URI = "http://127.0.0.1:4523/m1/2704689-0-default";

type Method = "GET" | "POST" | "PUT";

export function request<T>({
  method = "GET",
  path,
  body,
  timeout = 0,
}: {
  method?: Method;
  path: string;
  body?: BodyInit;
  timeout?: number;
}): Promise<T> {
  let controller;
  if (timeout) {
    controller = new AbortController();
    setTimeout(() => {
      controller.abort();
    }, timeout);
  }
  return (
    fetch(`${API_URI + path}`, {
      method,
      // 跨域cookies
      credentials: "same-origin",
      signal: timeout ? controller.signal : undefined,
      body: method === "POST" ? body : undefined,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      // 网络故障 or 任何阻止请求完成时
      .catch((err) => {
        console.log(`fetch path ${path} fail.`);
        console.log(err);
      })
  );
}
