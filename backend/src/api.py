from flask import Blueprint, render_template, request, redirect, url_for, flash
from .crud import add_contact
from .mail_sender import send_mails


api = Blueprint("api", __name__, url_prefix="/")


@api.route("/new_contact", methods=["POST", "GET"])
def new_contact():
    data = request.get_json()
    print("Kontaktdaten erhalten: ", data)
    gender: str = data.get('gender')
    first_name: str = data.get('firstName')
    last_name: str = data.get('lastName')
    phone: str = data.get('phone')
    email: str = data.get('email')
    company_name: str = data.get('companyName')
    message: str =  data.get('message')

    if add_contact(gender, first_name, last_name, phone, email, company_name, message):
        if send_mails(gender, first_name, last_name, company_name, email, phone, message):
            return {
                "success": True, 
                "message": "Kontakdaten erfolgreich eingegangen. \nVielen Dank für Ihr Interesse! \n... Bestätigungsmail versendet!"
            }

        else:
            return {
                "success": False, 
                "message": "Ups, da ist wohl ein Fehler beim Senden der Mail passiert!"
            }
            
    else:
        return {
                "success": False, 
                "message": "Ups, da ist wohl ein Fehler beim Eintragen in die Datenbank passiert!"
            }