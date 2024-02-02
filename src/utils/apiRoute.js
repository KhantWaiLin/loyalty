export const api_routes = {
  promotion_list: "/api/Customer/GetPromotionListByBrandId",
  promotion_detail: '/api/Customer/GetPromotionDetailById?PromoId=',
  service_list: "/api/Customer/GetCategoryListByCustomer",
  service_detail: '/api/Customer/GetProductListByCategoryAndSubCategory',
  get_member_info: "/api/Customer/GetMemberInfo",
  change_number: "/api/Customer/ChangePhoneNo",
  change_password: "/api/Customer/ChangePassword",
  reward_list: "/api/Customer/GetRedeemListByBrandId",
  transaction_history: "/api/Customer/GetPointHistory",
  member_tire_level: "/api/Customer/GetTierBenefitList",
  log_out: "/api/Authentication/Logout",
  send_otp: "/api/Authentication/SendOTP"
};
