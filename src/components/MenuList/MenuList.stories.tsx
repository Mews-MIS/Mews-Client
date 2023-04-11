import MenuList from "@components/MenuList";

export default {
  title: "component/MenuList",
  component: MenuList,
};

export const menuList = () => {
  return (
    <MenuList
      isOpen
      isLogin
      setIsOpen={() => {
        return false;
      }}
    />
  );
};
