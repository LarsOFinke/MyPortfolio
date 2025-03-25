from flask import Blueprint, render_template, request, redirect, url_for, flash
from .crud import add_contact
from .mail_sender import send_mails


views = Blueprint("views", __name__, url_prefix="/")



@views.route("/")
def home():
    return render_template("index.html")


@views.route("/projects")
def projects():
    return render_template("projects.html")


@views.route("qualifications")
def qualifications():
    return render_template("qualifications.html")


@views.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == 'POST':
        gender: str = request.form.get('gender')
        first_name: str = request.form.get('firstName')
        last_name: str = request.form.get('lastName')
        phone: str = request.form.get('phone')
        email: str = request.form.get('email')
        company_name: str = request.form.get('companyName')
        message: str =  request.form.get('message')

        if add_contact(gender, first_name, last_name, phone, email, company_name, message):
            flash("Kontakdaten erfolgreich eingegangen.", "info")
            flash("Vielen Dank für Ihr Interesse! ", "info")
            
            if send_mails(gender, first_name, last_name, company_name, email, phone, message):
                flash("... Bestätigungsmail versendet!")
            else:
                flash("Ups, da ist wohl ein Fehler beim Senden der Mail passiert!", "info")
                
        else:
            flash("Ups, da ist wohl ein Fehler beim Eintragen in die Datenbank passiert!", "info")

        return redirect(url_for('views.contact'))

    return render_template('contact.html')

@views.route("/new_contact", methods=["POST", "GET"])
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