import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children, setPage }) {
  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage}/>
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
