import Logo from "../../../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="bg-gray-800 py-3 w-full flex justify-center items-center">
      <img src={Logo} alt="logo" />
    </header>
  );
};
