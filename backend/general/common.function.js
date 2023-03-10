export function getUserId(req) {
  return req?.session?.passport?.user?._id || req?.session?.passport?.user?.id;
}
