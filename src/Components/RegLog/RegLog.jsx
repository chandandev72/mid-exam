import { PiSignInLight, PiSignOutLight } from "react-icons/pi";
import { Tabs } from "flowbite-react";
import { MdDashboard } from "react-icons/md";
import Login from "../Login/Login";
import Register from "../Register/Register";

const RegLog = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="Sign In" icon={PiSignInLight}>
          <Login />
        </Tabs.Item>
        <Tabs.Item title="Sign Up" icon={PiSignOutLight}>
          <Register/>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default RegLog;
