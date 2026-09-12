# Giga+ Fibra — Landing Page

Landing page institucional responsiva para divulgação da Giga+ Fibra, com páginas de transparência e encaminhamento para atendimento via WhatsApp.

## Executar localmente

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Acesse `http://localhost:5000`.

## Publicar na Render

O repositório já contém `render.yaml` e `Procfile`. Na Render:

1. Clique em **New +** e escolha **Blueprint** ou **Web Service**.
2. Selecione o repositório `fmarcial892-coder/projeto-automa-o`.
3. Se escolher Web Service manualmente, use:
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
4. Crie o serviço e aguarde o deploy.

O arquivo `render.yaml` já deixa essa configuração pronta para um deploy Blueprint.

## Rotas públicas

- `/` — página principal
- `/privacidade` — política de privacidade
- `/termos` — termos de uso
- `/cookies` — política de cookies
- `/fale-conosco` — redirecionamento para WhatsApp

## WhatsApp

O canal configurado no site é **+55 12 98116-0171**. Para trocar o número, edite `WHATSAPP_NUMBER` em `app.py` e faça um novo commit/push.

## Observação para Google Ads

Antes de anunciar, confirme que o anunciante possui autorização para usar a marca Giga+ e que o CNPJ, os canais, as ofertas e as condições comerciais divulgadas correspondem à empresa anunciada. O domínio usado na campanha também deve ser o mesmo domínio final acessado pelo usuário.
