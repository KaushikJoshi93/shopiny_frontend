"use client";
import { useUserStore } from "@/globalStore/userStore";
import { axios } from "@/helper/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const addUser = useUserStore((state)=>state.addUser)
  const register = async(valuesObj) => {
    try {
      setLoading(true);
      const res = await axios.post("/auth/register" , valuesObj);
      const data = res.data;
      router.replace("/login");
      console.log(data)
      toast.success("User Registered Successfully");
    } catch (err) {
    // eslint-disable-next-line no-prototype-builtins
      if(err.hasOwnProperty("response"))toast.error(Object.keys(err.response.data).length ? err.response.data : "Error While Regsistering . Try Again later");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const login = async(valuesObj) => {
    try {
      setLoading(true);
      const res = await axios.post("/auth/login",valuesObj);
      const data = res.data;
      addUser(data);
      router.replace("/");
      toast.success("Logged in Successfully");
    } catch (err) {
    // eslint-disable-next-line no-prototype-builtins
      if(err.hasOwnProperty("response"))toast.error(Object.keys(err.response.data).length ? err.response.data : "Login Error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    try {
      setLoading(true);
      alert("Logging out...");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    register,
    login,
    logout,
    loading,
  };
};

export default useAuth;
