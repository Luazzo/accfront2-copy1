import DashboardLayout from "./pages/Dashboard/Layout/DashboardLayout.vue";

import Dashboard from "./pages/Dashboard/Dashboard.vue";
import UserProfile from "@/pages/Dashboard/UserProfile.vue";
import TableList from "@/pages/Dashboard/TableList.vue";
import Typography from "@/pages/Dashboard/Typography.vue";
import Icons from "@/pages/Dashboard/Icons.vue";
import Maps from "@/pages/Dashboard/Maps.vue";
import Notifications from "@/pages/Dashboard/Notifications.vue";
import UpgradeToPRO from "@/pages/Dashboard/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      /*
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
      */
    ]
  }
];

export default routes;
