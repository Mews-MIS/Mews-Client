import MenuList from "@components/MenuList";

export default {
    title: "component/MenuList",
    component: MenuList,
};

export const menuList = () => {
  return <MenuList isOpen={true} isLogin={true} setIsOpen={function (isOpen: boolean): void {} } />;
};
