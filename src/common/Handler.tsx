import error from "../assets/img/error.png";

type HandlerType = {
  login: string;
};

export const Handler: React.FC<HandlerType> = ({ login }) => {
  return (
    <div className="errorMessageInput">
      <img
        src={error}
        width="20px"
        height="20px"
        style={{ paddingLeft: "20px" }}
        alt="error"
      />
      <span className="errorMessage">Пользователя {login} не существует</span>
    </div>
  );
};
