export const getUserBrandMemberId = () => {
  const auth_data = localStorage.getItem("authenticate_data");
  let brand_id = '265f0dff-a30a-11ed-b26e-6045bdd63acb';
  let branch_id = '8cd5fe32-a30a-11ed-b26e-6045bdd63acb';
  let user_id = null;
  let member_id = null;
  if (auth_data) {
    const parsed_data = JSON.parse(auth_data);
    brand_id = parsed_data?.brandId;
    user_id = parsed_data?.memberID;
    member_id = parsed_data?.userId;
  }
  return { brand_id, user_id, member_id, branch_id };
};
