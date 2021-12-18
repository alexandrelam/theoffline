import { toast } from "react-toastify";

export const notify = () =>
  toast.error("🚨 Failed to fetch!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export default notify;
