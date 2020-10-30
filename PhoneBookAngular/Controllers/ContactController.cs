using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PhoneBookAngular.Models;

namespace PhoneBookAngular.Controllers
{
    public class ContactController : Controller
    {
        private AngularjsMvcDbContext db = null;

        public ContactController()
        {
            db = new AngularjsMvcDbContext();
        }

        public JsonResult Index()
        {
            var contacts = db.Contacts.ToList();
            return Json(contacts, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var contact = db.Contacts.Find(id);
            return Json(contact, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Contact contact)
        {
            db.Contacts.Add(contact);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Contact contact)
        {
            db.Entry(contact).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var contact = db.Contacts.Find(id);
            db.Contacts.Remove(contact);
            db.SaveChanges();
            return Json(null);
        }

    }
}