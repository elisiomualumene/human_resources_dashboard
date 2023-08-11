import SidebarItems from "./items";

export const LeftSidebar = () => {
  return (
    <nav className="fixed w-[250px] bg-white h-full">
      <h1 className="font-bold text-xl text-center my-2">
        R. Humanos
      </h1>
      <SidebarItems />
    </nav>
  );
};
