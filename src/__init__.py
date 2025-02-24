from flask import Flask
from flask_mailman import Mail
from dotenv import load_dotenv
from os import getenv, urandom


load_dotenv()
mail = Mail()


def create_app():
    app = Flask(__name__)
    
    from .views import views
    app.register_blueprint(views)
    
    app.config['SECRET_KEY'] = urandom(24)
    app.config["MAIL_SERVER"] = getenv("MAIL_SERVER")
    app.config["MAIL_PORT"] = getenv("MAIL_PORT")
    app.config["MAIL_USERNAME"] = getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = getenv("MAIL_PASSWORD")
    app.config["MAIL_USE_TLS"] = True
    app.config["MAIL_USE_SSL"] = False
    
    mail.init_app(app)
    
    return app