import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api_routes } from "../../../utils/apiRoute";
import api from "../../../api/api";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import "./ChangePassword.scss";
import Loader from "../../../components/loader/Loader";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { get_member_info, change_password } = api_routes;
  const navigate = useNavigate();
  const { brand_id, user_id } = getUserBrandMemberId();
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const get_profile_detail = async () => {
    setIsLoading(true);
    await api.get(get_member_info, { brandId: brand_id, userId: user_id });
    setIsLoading(false);
  };
  useEffect(() => {
    get_profile_detail();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = () => {
    const data = {
      userId: user_id,
      oldPassword: passwords.current_password,
      newPassword: passwords.new_password,
      confirmPassword: passwords.confirm_password,
    };
    api.postByBody(change_password, data).then((response) => {
      if (response?.data?.value?.code === 200) {
        return navigate("/profile");
      }
    });
  };

  if (isLoading) {
    return (
      <div className="change-password-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="relative change-password-wrapper flex flex-col py-4 px-6 w-full overflow-scroll">
      <h2 className="text-[18px] font-semibold mb-8">Change Password</h2>
      <form>
        <input
          type="text"
          className="focus:outline-none p-3 w-full shadow-lg rounded-lg mb-8"
          name="current_password"
          value={passwords.current_password}
          onChange={onChange}
          placeholder="Current password"
        />
        <input
          type="text"
          className="focus:outline-none p-3 w-full shadow-lg rounded-lg mb-8"
          name="new_password"
          value={passwords.new_password}
          onChange={onChange}
          placeholder="New password"
        />
        <input
          type="text"
          className="focus:outline-none p-3 w-full shadow-lg rounded-lg mb-8"
          name="confirm_password"
          value={passwords.confirm_password}
          onChange={onChange}
          placeholder="Confirm password"
        />
        <div className="absolute w-full flex justify-center bottom-5 left-0">
          <button
            className="update-password-btn text-white font-medium rounded-lg
          w-[80%] p-4"
            type="button"
            onClick={onSubmit}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
