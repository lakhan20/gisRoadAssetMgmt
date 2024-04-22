using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GIS_ROAD_ASSET_MANAGEMENT.Models;

namespace GIS_ROAD_ASSET_MANAGEMENT.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult HomeView()
        {
            return View();
        }
        public ActionResult DashboardView()
        {
            return View();
        }

        public ActionResult Project_MonitoringView()
        {
            ViewBag.role = "Admin";
            return View();
        }

        public ActionResult Project_MilestoneView()
        {
            return View();
        }

        public ActionResult AboutView()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult DemoView()
        {
            return View();
        }
        public ActionResult ContactView()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult suggestionView()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult UserView()
        {
            return View();
        }

        public ActionResult ContractorView()
        {
            return View();
        }
      
    }
}