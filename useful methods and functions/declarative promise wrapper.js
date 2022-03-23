// declarative promise wrapper

const resolve = async (promise) => {
  try {
    const result = await promise;

    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

const [result, error] = await resolve(fetch("https://some.api"));
