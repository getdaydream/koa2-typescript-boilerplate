/**
 * log information middleware
 */
export const logger = async (ctx, next) => {
  console.log(
    `time:${new Date().toLocaleString()}
method: ${ctx.request.method}
url: ${ctx.request.url},
body: ${JSON.stringify(ctx.request.body)}
      `
  );
  await next();
};
