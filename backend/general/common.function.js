export function getUserId(req) {
  // console.log("request",req);
  return req?.session?.passport?.user?._id || req?.session?.passport?.user?.id;
}
