export const fetcher = (...args) => {
  return fetch(...[...args, { cache: "no-cache" }], { cache: "no-cache" }).then(
    (res) => res.json()
  );
};
