import React from "react";
import { toast } from "react-toastify";

export const notify = (): React.ReactText =>
  toast.error("🚨 Failed to fetch!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export default notify;
