import imaplib

# Configurações iniciais (Substitua pelos seus dados de teste)
EMAIL_USER = 'seu_email@gmail.com'
EMAIL_PASS = 'sua_senha_de_app_aqui' # Aquela de 16 dígitos
IMAP_SERVER = 'imap.gmail.com' # Se for Gmail

def testar_conexao():
    try:
        print("[*] Tentando conectar ao servidor...")
        # 1. Conectando ao servidor
        mail = imaplib.IMAP4_SSL(IMAP_SERVER)
        
        # 2. Fazendo Login
        mail.login(EMAIL_USER, EMAIL_PASS)
        print("[+] Login realizado com sucesso!")

        # 3. Selecionando a pasta 'INBOX' (Entrada)
        mail.select("inbox")
        print("[+] Conectado à caixa de entrada.")

        # 4. Buscando e-mails (Vamos buscar todos para testar)
        # O comando 'ALL' busca todos os e-mails
        status, mensagens = mail.search(None, "ALL")
        
        if status == 'OK':
            total_emails = len(mensagens[0].split())
            print(f"[!] Você tem {total_emails} e-mails na sua caixa.")
        
        # 5. Fechar conexão
        mail.logout()
        print("[*] Conexão encerrada.")

    except Exception as e:
        print(f"[-] Erro na conexão: {e}")

if __name__ == "__main__":
    testar_conexao()