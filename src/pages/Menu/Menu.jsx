import Copyright from "../../components/Copyright";
import Header from "../../components/Header";
import MenuList from "../../components/MenuList";
import menu from "../../data/menu.json";

export default function Menu() {
  return (
    <>
      <Header />
      <MenuList items={menu.items}/>
      <Copyright />
    </>
  );
}
