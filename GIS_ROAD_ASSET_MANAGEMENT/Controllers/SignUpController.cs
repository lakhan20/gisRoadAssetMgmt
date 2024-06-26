﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GIS_ROAD_ASSET_MANAGEMENT.Models;
using System.Web.Mvc;
using Npgsql;
using System.Configuration;
using WebGrease.Css.Ast.Selectors;
using System.Security.Cryptography.X509Certificates;
using System.Diagnostics.Contracts;
using System.Web.Helpers;
using System.Xml.Linq;
using System.Security.Policy;
using System.Web.Services.Description;

namespace GIS_ROAD_ASSET_MANAGEMENT.Controllers
{
    public class SignUpController : Controller
    {
        // GET: SignUp
        [HttpPost]
        public ActionResult Csignup(string Cname, string Cemail, string Ccontact, int Cward, string Cpassword, int Crole_id)
        {

            using (NpgsqlConnection conn = DatabaseConnectionManager.OpenConnection())
            {
                string SignupCitizen = " Select SignupUser(@Name,@Email,@Contact,@Password,@Role,@Ward)";
                using (NpgsqlCommand cmd = new NpgsqlCommand(SignupCitizen, conn))
                {
                   
                    cmd.Parameters.AddWithValue("@Name", Cname);
                    cmd.Parameters.AddWithValue("@Email", Cemail);
                    cmd.Parameters.AddWithValue("@Contact", Ccontact);
                    cmd.Parameters.AddWithValue("@Ward", Cward);
                    cmd.Parameters.AddWithValue("@Password", Cpassword);
                    cmd.Parameters.AddWithValue("@Role", Crole_id);
                    using (NpgsqlDataReader reader = cmd.ExecuteReader())
                    {
                        reader.Read();
                        string successMsg= "citizen Register successful! .";
                        return Json(new { Success = true, Message=successMsg }) ;
                    }
                }

            }


        }

        [HttpPost]
        public ActionResult Con_signup(string Con_name, string Con_email, string Con_contact, string Con_password, int Con_role_id, int Con_ward, string Con_company, string Con_file)
        {

            using (NpgsqlConnection conn = DatabaseConnectionManager.OpenConnection())
            {
                string SignupCitizen = " Select contractorsignup(@Name,@Email,@Contact,@Password,@Role,@Ward,@Company,@File)";
                using (NpgsqlCommand cmd = new NpgsqlCommand(SignupCitizen, conn))
                {
                    conn.Open();
                    cmd.Parameters.AddWithValue("@Name", Con_name);
                    cmd.Parameters.AddWithValue("@Email", Con_email);
                    cmd.Parameters.AddWithValue("@Contact", Con_contact);
                    cmd.Parameters.AddWithValue("@Company", Con_company);
                    cmd.Parameters.AddWithValue("@File", Con_file);
                    cmd.Parameters.AddWithValue("@Ward", Con_ward);
                    cmd.Parameters.AddWithValue("@Password", Con_password);
                    cmd.Parameters.AddWithValue("@Role", Con_role_id);

                    using (NpgsqlDataReader reader = cmd.ExecuteReader())
                    {
                        reader.Read();
                        string successMsg = "Contractor Register successful! .";
                        return Json(new { Success = true, Message = successMsg });
                    }

                }


            }
        }


    }
}