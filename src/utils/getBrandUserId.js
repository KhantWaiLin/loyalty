export const getUserBrandMemberId = () => {
  const auth_data = localStorage.getItem("authenticate_data");
  let brand_id = null;
  let user_id = null;
  let member_id = null;
  if (auth_data) {
    const parsed_data = JSON.parse(auth_data);
    brand_id = parsed_data?.brandId;
    user_id = parsed_data?.memberID;
    member_id = parsed_data?.userId;
  }
  return { brand_id, user_id, member_id };
};
