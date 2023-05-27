import { useNavigate, useLocation } from "react-router-dom";

const Hook = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  const handleGoBack = () => {
    navigate(-1);
  };
  return {
    path,
    handleGoBack,
  };
};

export default Hook;
