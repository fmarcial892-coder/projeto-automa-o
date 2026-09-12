from flask import Flask, render_template, redirect, jsonify
import threading
import time
from urllib.parse import quote

app = Flask(__name__)

WHATSAPP_NUMBER = "5512981160171"
WHATSAPP_MESSAGE = "Olá! Quero consultar a disponibilidade e conhecer os planos da Giga+."


def iniciar_processo_robo():
    """Rotina legada mantida para compatibilidade com o projeto original."""
    print("[!] Iniciando varredura de e-mails...")
    try:
        time.sleep(10)
        print("[+] Processo concluído com sucesso!")
    except Exception as error:
        print(f"[-] Erro durante o processamento: {error}")


@app.context_processor
def inject_globals():
    return {
        "whatsapp_url": f"https://wa.me/{WHATSAPP_NUMBER}?text={quote(WHATSAPP_MESSAGE)}",
        "year": time.localtime().tm_year,
    }


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/privacidade")
def privacidade():
    return render_template("privacidade.html")


@app.route("/termos")
def termos():
    return render_template("termos.html")


@app.route("/cookies")
def cookies():
    return render_template("cookies.html")


@app.route("/contato")
def contato():
    return redirect("/" + "#contato")


@app.route("/fale-conosco")
def fale_conosco():
    return redirect(f"https://wa.me/{WHATSAPP_NUMBER}?text=Ol%C3%A1%21%20Quero%20falar%20com%20a%20Giga%2B.")


@app.route("/executar")
def executar():
    """Rota técnica legada para o protótipo de automação."""
    thread = threading.Thread(target=iniciar_processo_robo, daemon=True)
    thread.start()
    return jsonify({
        "status": "Sucesso",
        "mensagem": "O processo de varredura foi iniciado em segundo plano!",
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
