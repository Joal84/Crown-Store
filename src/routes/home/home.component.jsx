import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <Directory></Directory>;
    </div>
  );
}

export default Home;
