export const getUserBrandMemberId = () => {
  const auth_data = localStorage.getItem("authenticate_data");
  if (auth_data) {
    const parsed_data = JSON.parse(auth_data);
    const brand_id = parsed_data?.brandId;
    const user_id = parsed_data?.memberID;
    const member_id = parsed_data?.userId;
    return { brand_id, user_id, member_id };
  }
  return null;
};
