from flask_mailman import EmailMessage

def send_mails(gender: str, first_name: str, last_name: str, company_name: str, email: str, phone: str, message: str) -> bool:
    try:
        match gender:
            case "Hr":
                anrede: str = "Sehr geehrter Herr"
            case "Fr":
                anrede: str = "Sehr geehrte Frau"
            case "Nb":
                anrede: str = "Sehr geehrtes Enby"
                
        msg = EmailMessage(
            "Kontaktdaten eingegangen",
            f"{anrede} {last_name},\n\nVielen Dank für Ihr Interesse an meiner Bewerbung, ich werde mich in Kürze bei Ihnen melden und freue mich schon auf das Gespräch!\n\n\nBeste Grüße\nLars-O. Finke",
            "dev.Lars-Finke@web.de",
            [f"{email}"]
        )
        msg.send()
                
        msg = EmailMessage(
            "Neue Kontaktdaten im Portfolio eingegangen",
            f"Von: {first_name} {last_name} | {company_name} || {email} ||| {phone}\n\nNachricht: {message}",
            "dev.Lars-Finke@web.de",
            ["larsoliver.finke@web.de"]
        )
        msg.send()
        
        return True
    
    except Exception as e:
        return False