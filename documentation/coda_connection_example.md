================================================
FILE: README.md
================================================
# DDF Reels Bot

A Telegram bot for collecting Instagram links and saving them to a Coda database. The bot also uses BrightData to scrape Instagram reel data.

## Project Structure

```
ddf_reels_bot/
├── api/                    # Vercel serverless functions
│   └── index.py            # Main webhook handler
├── scripts/                # Utility scripts
│   ├── deploy.sh           # Deployment scripts
│   └── vercel_setup.js     # Vercel configuration
├── src/                    # Source code
│   ├── __init__.py         # Package initialization
│   ├── bot.py              # Main bot logic
│   ├── monitoring.py       # Monitoring utilities
│   └── utils.py            # Common utilities
├── tests/                  # Test files
│   ├── test_bot.py         # Bot testing
│   ├── test_brightdata_scraper.py  # BrightData scraper testing
│   └── test_coda_*.py      # Coda API tests
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Code of conduct
├── LICENSE                 # Project license
├── requirements.txt        # Python dependencies
├── vercel.json             # Vercel configuration
└── README.md               # Project documentation
```

## Features

- Collects Instagram links from Telegram messages
- Saves links to a Coda database
- Uses BrightData to scrape Instagram reel data
- Supports both polling and webhook modes
- Configurable authorization system
- Admin commands for monitoring

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and fill in the required values
3. Install dependencies with `pip install -r requirements.txt`
4. Run the bot locally with `python -m src.bot`

## Environment Variables

The following environment variables are required:

| Name | Description | Example |
|------|-------------|---------|
| `TELEGRAM_BOT_TOKEN` | Telegram bot token from BotFather | `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11` |
| `CODA_API_KEY` | Coda API key | `3e92f721-91d1-485e-aab9-b7d50e4fa4da` |
| `CODA_DOC_ID` | Coda document ID | `NYzN0H9At4` |
| `CODA_TABLE_ID` | Coda table ID | `grid-Pyccn7MrAA` |
| `CODA_LINK_COLUMN_ID` | Coda link column ID | `c-LFekrYG0se` |
| `BRIGHT_DATA_API_KEY` | BrightData API key | `your_brightdata_api_key` |

Optional environment variables:

| Name | Description | Default |
|------|-------------|---------|
| `ENVIRONMENT` | Environment name | `production` |
| `AUTHORIZED_USERS` | Comma-separated list of usernames | Empty (all users allowed) |
| `ADMIN_USERS` | Comma-separated list of Telegram user IDs | Empty (no admins) |
| `LOG_LEVEL` | Logging level | `INFO` |
| `WEBHOOK_URL` | Webhook URL for Telegram | Required for webhook mode |

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Deployment to Vercel

1. Ensure all environment variables are set up on Vercel
2. Deploy using the Vercel CLI or GitHub integration
3. Set up the Telegram webhook using the following URL:
   ```
   https://api.telegram.org/bot{YOUR_BOT_TOKEN}/setWebhook?url={YOUR_VERCEL_URL}/api/webhook
   ```

## Development

To run the bot locally:

```bash
# Setup virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the bot in polling mode
python -m src.bot
```

## Testing

Run tests with:

```bash
python -m unittest discover tests
```

Individual tests can be run with:

```bash
python -m tests.test_bot
python -m tests.test_coda_connection
python -m tests.test_brightdata_scraper
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 


================================================
FILE: CODE_OF_CONDUCT.md
================================================
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].

All complaints will be reviewed and investigated promptly and fairly.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
[https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

[homepage]: https://www.contributor-covenant.org
[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html 


================================================
FILE: Content DB.csv
================================================
Status,Post Idea,Content Notes,Type,Channel,Publish Date,Link to published content,Drive/Canva Link
Published,Video Announcement Tabără Post-its,"Idea

https://www.instagram.com/p/DGe7jcUoaPt?hl=en",Reel,Instagram,"Mon, 10 Mar",,https://drive.google.com/drive/u/5/folders/1POQKpIuDlluSGezuAfxAl7SgLv79s0pF
Published,Video compilation momente din DDF Retreat 2025,,Reel,Instagram,"Tue, 11 Mar",,https://drive.google.com/drive/u/5/folders/1fhU97vGV8kzdjDW8hJDwZ07KIHfzBfXq
Published,Video Cristi Matei 24 - Cand va veni sfârșitul,,Reel,Instagram,"Thu, 13 Mar",,https://drive.google.com/drive/u/5/folders/111Ivu3vuI3Na3sFEWnRvhu9kTR2wSlUu
Published,"Promo Tabără - Pst, înscrie-te în tabără","Făcut ca și cum m-ar căuta din mulțime și face zoom înspre mine și eu le zic să se înscrie în tabără. Foarte scurt

",Reel,Instagram,"Sat, 15 Mar",,
Published,"Ce vrei să comunici tinerilor din diaspora? ","---

Suntem aici la conferința Modelat de Cuvânt organizată de asociația Vital. 

Aici, liderii de tineret din România, și nu numai, învățăm cum să aducem Cuvântul lui Dumnezeu generației Z într-un mod relevant și transformator.

Și aceeași pasiune de a comunica Cuvântul lui Dumnezeu, care ne aduce împreună la această conferință în România, ne unește și dincolo de... Frontiere. 

De aceea, liderii prezenți aici au un mesaj special pentru tinerii români din diaspora:

ÎNSCRIE-TE LA TABĂRA DINCOLO DE FRONTIERE

* ""...pentru că există o urgență - să ducem Evanghelia neamurilor care ne înconjoară.""
* ""...pentru a EXPLORA planul lui Dumnezeu cu viața ta. 
* ""...pentru că vei găsi locul tău în marea trimitere a lui Dumnezeu.""
* ""...pentru că vei descoperi de ce Isus este răspunsul într-o lume a religiilor diferite.""
* ""...pentru că poți să ai un impact real în țara în care ești.""
* ""...pentru că vei învăța să fii un ambasador al lui Hristos în cultura în care trăiești.""
* ""...pentru că schimbarea începe cu tine.""
* ""...pentru că vei descoperi cum să depășești barierele culturale.""
* ""...pentru că vei învăța cum să împărtășești credința ta într-un mod eficient și autentic.""



---

Shots

* Wide shot showing many people and you in the middle: Suntem aici la conferința modelat de cuvânt... [end of sentence]
  * What about a shot coming out of the elevator? is it to crazy? It’s also hard to replicate
* You jump/sit on the sofa and you look at the camera: Aici, liderii de tineret din românia.... 
* Now it would be great to show that ”Dincolo de Fronteire” by crossing something or smth similar to that. 
  * if not, it could be just you chaging scenery again. Maybe a shot in the big conference room. 



",,Instagram,"Sun, 16 Mar",,
Published,Oh God Here Am I music video,,Reel,Instagram,"Thu, 20 Mar",,https://drive.google.com/drive/u/5/folders/1nLofS-6qfDZhcEuAFBPYUmMrdnOtZKvp
Published,Joyce si Kola: de ce există biserica?,"

De ce exista biserica_-Cover.jpg

De ce exista biserica_.mov",Reel,Instagram,"Sat, 22 Mar",,https://drive.google.com/drive/u/5/folders/1ebKVaqS022qE9Z1cecyqd47QeatM8vLM
Published,Există Ceva Special În Tabere,,Reel,Instagram,"Mon, 24 Mar",,
Published,The faces of DdF,"* Reel în care arătăm fețe din interviews, să apară foarte multe persoane, foarte multe fețe, ca să arăăm că au fost foarte multe persoane care au participat la Kairos

",Reel,Instagram,"Tue, 25 Mar",,
Next Up,Sopa de letras - Înscrie-te în tabără,,Reel,Instagram,"Thu, 27 Mar",,
Draft,Reel cu echipa de primire din tabără,"Un video în 

https://www.instagram.com/p/DCzMcoSuGbI?hl=en",Reel,Instagram,,,
Draft,Prezentarea echipei din tabara,"Aici idea ar fi să punem vorbitorii taberei, dacă vine un misionar....

https://www.instagram.com/p/DGaiAjsIP0S?hl=en",Post,Instagram,,,
Draft,De ce am pus numele Dincolo de Frontiere?,,"Carousel ",Instagram,,,
Draft,Video și/sau carousel în care să arătăm istoricul taberelor și faptul că suntem la a zecea ediție.,,Reel,Instagram,,,
Draft,Reel în care arătăm frazele care sunt scrise pe tricoul de Beyond: Beyond [...]. Pe un fundal muzical inspirațional,,Reel,Instagram,,,
Draft,Personal quotes din Radical,"Idea ar fi din punctul de vedere mai „personal” sa impartasesc cateva din citatele din cartea Radical care mie mi-au schimbat viata. 





",Reel,Instagram,,,
Draft,First things first with scenes from the camp,"* Idea
  * https://www.instagram.com/p/C_4wCeAiv1p/?hl=en
* Is it too much? 😂

",Reel,Instagram,,,
Next Up,"Gabi Boldura - ""De ce crezi că o tabără poate schimba viața unui tânăr?""","* Aici basically you let him cook si poate poti sa pui aici cadre/fețe ale tinerilor, din tabere anterioare. 



* De ce crezi că taberele pot schimba 
* De ce sunt importante taberele?
* Cum crezi că o tabără poate schimba viața unui tânăr?",Reel,Instagram,,,
Next Up,Reading a verse or a series where we read some verses about missions or nations. Made like this reel,"https://www.instagram.com/p/DGrGYlgtH2s/?hl=en

---

",Reel,Instagram,,,
Draft,"Debunking Misconceptions about missions ",,Reel,Instagram,,,
Draft,Announcement ca mai sunt 5 zile de reducere pentru tabara,"* Mai apoi facem announcement ca prelungim inca 7 zile.



* Idea e ca trebuie sa facem si mai multa propaganda pentru acestea, ca lumea sa stie ",Reel,Instagram,,,
Draft,Drop the wallet,"* A man is putting the wallet on their back pocket
* It drops
* Another man looks sneaky and steals the wallet from the ground
* Opens the wallet and sees that it has just a flyer about the camp 
* Looks back at the person and he sees the person pointing at him ",Reel,Instagram,,,


================================================
FILE: CONTRIBUTING.md
================================================
# Contributing to DDF Reels Bot

We love your input! We want to make contributing to DDF Reels Bot as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/yourusername/ddf_reels_bot/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/ddf_reels_bot/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

* Use 4 spaces for indentation rather than tabs
* You can try running `black` for style unification

## License
By contributing, you agree that your contributions will be licensed under its MIT License. 


================================================
FILE: data.md
================================================
API Key: 3e92f721-91d1-485e-aab9-b7d50e4fa4da
Doc: https://coda.io/d/DDF-Marketing_dNYzN0H9At4
Database: https://coda.io/d/_dNYzN0H9At4/Databases_su8LJCNi#Reels-DB_tun7MrAA
Column ID: c-LFekrYG0se
Column Name: Link

Done! Congratulations on your new bot. You will find it at t.me/ddfreelsbot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
7780725841:AAEkNzWjmG6jr2wDCS5w--YjupCQDSPmkm0
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api


================================================
FILE: Info.md
================================================
Creating a **Telegram bot** to collect Instagram Reel links and send them to a Coda database is an excellent idea. Here’s a step-by-step guide to set this up:

---

## **Step 1: Create Your Telegram Bot**
To create a Telegram bot, follow these steps:

1. **Talk to BotFather**:
   - Open Telegram and search for `BotFather`.
   - Start a conversation and type `/newbot`.
   - Follow the prompts to name your bot and create a unique username (e.g., `ReelCollectorBot`).

2. **Get the Bot Token**:
   - After creating the bot, BotFather will provide you with an API token (e.g., `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`).
   - Save this token; it will be used for API calls.

---

## **Step 2: Set Up the Bot to Receive Messages**
You’ll use Python and the `pyTelegramBotAPI` library to handle incoming messages.

### Install Required Libraries:
Run the following command to install the library:
```bash
pip install pyTelegramBotAPI
```

### Create the Python Script:
Here’s a basic script to capture Reel links sent to your bot:

```python
import telebot
import requests
import time

# Telegram Bot Token
BOT_TOKEN = "YOUR_BOT_TOKEN"

# Coda API Details
CODA_API_KEY = "3e92f721-91d1-485e-aab9-b7d50e4fa4da"
DOC_ID = "dNYzN0H9At4"
TABLE_ID = "tun7MrAA"
COLUMN_ID = "c-LFekrYG0se"

# Initialize Telegram Bot
bot = telebot.TeleBot(BOT_TOKEN)

# Function to send data to Coda
def send_to_coda(link, sender):
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    body = {
        "rows": [
            {
                "cells": [
                    {"column": COLUMN_ID, "value": link},
                    {"column": "AddedBy", "value": sender}
                ]
            }
        ]
    }
    response = requests.post(url, json=body, headers=headers)
    return response.status_code

# Handle incoming messages
@bot.message_handler(func=lambda message: True)
def handle_message(message):
    link = message.text.strip()
    sender = message.from_user.username or message.from_user.first_name
    if link.startswith("https://www.instagram.com/reel/"):
        status_code = send_to_coda(link, sender)
        if status_code == 200:
            bot.reply_to(message, "Link saved successfully!")
        else:
            bot.reply_to(message, f"Failed to save link. Status code: {status_code}")
    else:
        bot.reply_to(message, "Please send a valid Instagram Reel link.")

# Polling for new messages
while True:
    try:
        bot.polling()
    except Exception as e:
        print(f"Error: {e}")
        time.sleep(5)
```

### Replace Placeholders:
- Replace `YOUR_BOT_TOKEN` with your Telegram bot token.
- Replace `CODA_API_KEY`, `DOC_ID`, `TABLE_ID`, and `COLUMN_ID` with your Coda API details.

---

## **Step 3: Run Your Bot**
1. Save the script as `telegram_bot.py`.
2. Run the script:
   ```bash
   python telegram_bot.py
   ```
3. Share your bot’s username with your team so they can start sending Reel links.

---

## **Step 4: Test Your Setup**
1. Send an Instagram Reel link (e.g., `https://www.instagram.com/reel/xyz123/`) to your bot on Telegram.
2. Check your Coda database to confirm the link has been added.

---

## **Optional Enhancements**
### Add Sender Information in Coda:
If you want to track who submitted each link:
- Add a column in your Coda table named `AddedBy`.
- Modify the script’s `send_to_coda()` function to include the sender's username or first name.

### Deploy on a Server:
To keep your bot running 24/7:
- Deploy it on a cloud platform like Heroku or AWS.
- Use Flask or FastAPI for webhook-based handling instead of polling.

---

## **Why This Workflow Works**
- **Ease of Use**: Your team can simply send links via Telegram.
- **Centralized Data**: All links are stored in Coda for easy access and processing.
- **Scalability**: You can add features like metadata extraction or analytics later.

Let me know if you need help setting up any part of this workflow!

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1741349265/user_uploads/OJQBySwUPOmZwZy/1000083951.jpg
[2] https://pplx-res.cloudinary.com/image/upload/v1741349590/user_uploads/ZGyEBpowtBLBCyn/Screenshot_20250307_131249_Tasker.jpg
[3] https://www.reddit.com/r/learnpython/comments/di4cbn/telegram_bot_tutorial/
[4] https://flowxo.com/how-to-create-a-bot-for-telegram-short-and-simple-guide-for-beginners/
[5] https://onlizer.com/coda/telegram_bot
[6] https://zapier.com/apps/coda/integrations/telegram/1581202/send-messages-in-telegram-for-new-rows-in-coda
[7] https://github.com/sabber-slt/telegram-real-time
[8] https://www.toptal.com/python/telegram-bot-tutorial-python
[9] https://latenode.com/es/pt-br-br-br-br/integrations/telegram-bot-api/coda
[10] https://stackoverflow.com/questions/76396068/how-to-get-user-id-of-the-sender-who-sent-the-message-in-a-telegram-channel
[11] https://core.telegram.org/bots/api
[12] https://www.reddit.com/r/OpenWebUI/comments/1dtysxe/how_to_connect_a_telegram_bot/
[13] https://www.reddit.com/r/unRAID/comments/fvx8d0/tutorial_get_unraid_notifications_via_telegram/
[14] https://www.reddit.com/r/zlibrary/comments/10mi9i2/now_you_can_have_your_own_telegram_bot_no_more/
[15] https://www.reddit.com/r/TelegramBots/comments/o3l61g/i_made_a_bot_that_can_transform_almost_any_link/
[16] https://www.reddit.com/r/learnpython/comments/15ma4dh/telegram_bot_call_updates_manually/
[17] https://www.reddit.com/r/node/comments/e6uwx5/learn_how_to_build_a_telegram_bot_with_node_and/
[18] https://www.reddit.com/r/Oobabooga/comments/175v2b7/an_idiots_guide_to_the_telegram_bot_extension/
[19] https://www.reddit.com/r/zlibrary/comments/10mlgqv/guide_personal_telegram_bot_complete_guide/
[20] https://www.reddit.com/r/TelegramBots/comments/1dxmivc/help_in_getting_started/
[21] https://www.reddit.com/r/TelegramBots/comments/1e7dyh1/i_created_a_telegram_bot_that_generates_summaries/
[22] https://www.reddit.com/r/Telegram/comments/9is64m/using_a_telegram_bot_as_a_chatfront/
[23] https://www.reddit.com/r/Overseerr/comments/10lsvzj/telegram_setup/
[24] https://www.reddit.com/r/Telegram/comments/3b1pwl/create_your_own_telegram_bot_stepbystep/
[25] https://www.reddit.com/r/django/comments/118wkdq/a_stepbystep_tutorial_for_building_a/
[26] https://stackoverflow.com/questions/41684692/how-to-create-link-in-telegram-bot
[27] https://www.youtube.com/watch?v=CbEYuLCGFDU
[28] https://www.youtube.com/watch?v=vZtm1wuA2yc
[29] http://help.invitemember.com/en/articles/5265372-your-telegram-bot-links
[30] https://stackoverflow.com/questions/38565952/how-to-receive-messages-in-group-chats-using-telegram-bot-api
[31] https://code.esube.com.et/telegram-bot-development-complete-guide-for-beginners
[32] https://core.telegram.org/bots/tutorial
[33] https://www.youtube.com/watch?v=EpQx3jJ1q3Q
[34] https://www.directual.com/lesson-library/how-to-create-a-telegram-bot
[35] https://core.telegram.org/bots/features
[36] https://www.youtube.com/watch?v=WHnhL15uyO0
[37] https://www.youtube.com/watch?v=aupKH_J1xc0
[38] https://rubenlagus.github.io/TelegramBotsDocumentation/getting-started.html
[39] https://www.reddit.com/user/AI_Scout_Official/submitted/
[40] https://www.reddit.com/r/learnpython/comments/sfpwxr/how_can_i_automatically_run_my_python_script_in_a/
[41] https://www.reddit.com/r/clickup/comments/k0fhyl/what_are_most_flexible_clickup_alternatives/
[42] https://www.reddit.com/r/web_design/comments/lbf0og/project_management_what_do_you_use/
[43] https://www.reddit.com/r/productivity/comments/101h6ch/what_productivity_tools_are_you_using_in_2023/
[44] https://www.reddit.com/r/chromeos/comments/12dfase/underappreciated_progressive_web_apps_pwa_thread/
[45] https://www.reddit.com/r/MachineLearning/comments/bx0apm/d_how_do_you_manage_your_machine_learning/
[46] https://www.reddit.com/r/learnprogramming/comments/iax5ec/what_coursebootcamp_can_i_take_that_would_make_me/
[47] https://www.reddit.com/r/bash/comments/t6u8xd/i_made_a_collection_of_readytouse_loading/
[48] https://www.reddit.com/r/automation/comments/1ifx67k/automate_tiktok_posts_to_all_social_channels/?tl=it
[49] https://www.reddit.com/r/webdev/comments/xvjjol/can_you_become_a_web_developer_without_a_cs_degree/
[50] https://www.reddit.com/r/malaysia/comments/1dbqykl/calling_for_all_software_engineer_in_malaysia/
[51] https://www.reddit.com/user/CompetitiveChoice732/
[52] https://www.reddit.com/r/AutomateUser/comments/le2fkj/what_do_you_use_automate_for/?tl=it
[53] https://latenode.com/integrations/coda/telegram-bot-api
[54] https://community.coda.io/t/telegram-bot-pack-available-to-install/40354
[55] https://www.make.com/en/templates/2514-send-telegram-messages-for-new-rows-in-a-coda-table
[56] https://n8n.io/integrations/coda/and/telegram/
[57] https://onlizer.com/coda
[58] https://4spotconsulting.com/automate-telegram-messages-with-coda-a-step-by-step-guide/
[59] https://latenode.com/integrations/telegram-bot-api?4b77e0b0_page=6&820bb7f0_page=9
[60] https://latenode.com/integrations/telegram-bot-api/coda
[61] https://coda.io/packs/telegram-bot-10228
[62] https://www.make.com/en/integrations/coda/telegram
[63] https://www.appypie.io/integrate/apps/telegram-bot/integrations/coda
[64] https://www.reddit.com/r/Telegram/comments/wy7efx/a_way_to_see_who_sends_messages_in_groups/
[65] https://www.reddit.com/r/changedetectionio/comments/ztcos5/telegram_bot_with_userid/
[66] https://www.reddit.com/r/TelegramBots/comments/17kjx4w/automated_message_using_bot/
[67] https://www.reddit.com/r/Telegram/comments/rckcmu/how_do_you_find_out_an_identity_of_an_anonymous/
[68] https://www.reddit.com/r/Telegram/comments/1c7f5bu/how_to_telegram_web_apps_recognise_a_user_and/
[69] https://www.reddit.com/r/Notion/comments/piawnn/ive_made_a_free_opensource_selfhosted_singleuser/
[70] https://www.reddit.com/r/Python/comments/8ivt42/is_it_possible_to_read_or_copy_telegram_messages/
[71] https://www.reddit.com/r/OSINT/comments/kvb5jd/telegram_bot_to_find_which_groups_the_person_is/
[72] https://www.reddit.com/r/Python/comments/amhuty/i_made_a_telegram_bot_you_can_send_messages_to/
[73] https://www.reddit.com/r/Telegram/comments/ksy01k/privacy_concern_forwarding_messages/
[74] https://www.reddit.com/r/Telegram/comments/1f2p61w/how_to_find_another_users_id/
[75] https://www.reddit.com/r/TelegramBots/comments/1c8ng6b/anyone_knows_a_free_bot_for_scheduling_messages/
[76] https://www.reddit.com/r/TelegramBots/comments/rmsv82/send_bulk_messages_with_telegram_api/
[77] https://www.reddit.com/r/Telegram/comments/r21kte/question_how_to_search_for_messages_sent_by_an/
[78] https://github.com/python-telegram-bot/python-telegram-bot/discussions/2295
[79] https://stackoverflow.com/questions/70987716/how-to-insert-data-into-a-database-from-a-telegram-bot
[80] https://onlizer.com/notify/telegram_bot/smart_sender
[81] https://github.com/yagop/node-telegram-bot-api/issues/1104
[82] https://www.youtube.com/watch?v=kobnfPJLqsY
[83] https://community.make.com/t/telegram-send-message-to-an-username/11930
[84] https://vikesh.me/blog/telegram-bot-database/
[85] https://github.com/yagop/node-telegram-bot-api/issues/444
[86] https://community.sinch.com/t5/Telegram/Can-I-send-a-message-to-Telegram-user-with-their-Telegram-ID-or/ta-p/10235
[87] https://severalnines.com/blog/mobile-alerts-notifications-your-database-using-telegram/
[88] https://onlizer.com/notify/whatsapp/telegram_bot
[89] https://community.make.com/t/sending-messages-in-telegram-from-a-user-not-a-bot/49105
[90] https://www.reddit.com/r/learnpython/comments/j7drpv/create_a_whatsapptelegram_bot_which_sends_a/
[91] https://www.reddit.com/r/Telegram/comments/1itv0ls/nocode_tutorial_to_make_ai_agent_telegram_bots/
[92] https://www.reddit.com/r/learnprogramming/comments/12swbq4/how_to_create_a_telegram_notification_bot_when_ui/
[93] https://www.reddit.com/r/Julia/comments/ign33f/tutorial_sending_messages_to_telegram_using/
[94] https://www.reddit.com/r/TelegramBots/comments/oy6hys/beginner_guide_for_telegram_bots_programming/
[95] https://flowfuse.com/node-red/notification/telegram/
[96] https://telegram.ebda3at-moparmj.com/Telegram/MakeBottelegram/index-en.html
[97] https://steemit.com/utopian-io/@abhi3700/telegram-bot-tutorial-01-introduction-or-get-chats-or-send-messages
[98] https://apidog.com/blog/beginners-guide-to-telegram-bot-api/
[99] https://www.reddit.com/r/SideProject/comments/1alyrhc/what_are_you_building_right_now/
[100] https://www.reddit.com/r/Notion/comments/c3awp2/any_way_to_link_notion_into_telegram/
[101] https://www.reddit.com/r/productivity/comments/evjtlz/build_the_ultimate_personal_knowledge_management/
[102] https://www.reddit.com/r/SaaS/comments/1ftvnsb/whats_your_tech_stack_for_building_your_saas/
[103] https://www.reddit.com/r/Airtable/comments/v6uuqs/do_you_think_airtables_pricing_strurue_is_be_a/
[104] https://www.reddit.com/r/Notion/comments/13zwghq/if_you_left_notion_where_did_you_go/
[105] https://albato.com/connect/coda-with-telegram
[106] https://www.pabbly.com/connect/integrations/coda/telegram-bot/
[107] https://www.reddit.com/r/Telegram/comments/km752u/telegram_sent_a_message_that_i_didnt/
[108] https://www.reddit.com/r/Telegram/comments/js7sta/can_someone_find_my_contact_through_bots/
[109] https://www.reddit.com/r/learnprogramming/comments/7q21ba/i_made_a_telegram_bot_and_i_want_it_to_make/
[110] https://www.reddit.com/r/Telegram/comments/jldv6c/is_there_a_way_i_can_know_who_is_forwarding/
[111] https://www.reddit.com/r/Telegram/comments/kt9n7h/new_to_telegram_how_to_display_who_sent_me_a/
[112] https://www.reddit.com/r/n8n/comments/1isach8/automating_email_responses_via_telegram_in_n8n/
[113] https://docs.python-telegram-bot.org/en/v21.9/telegram.user.html
[114] https://latenode.com/integrations/telegram-bot-api/database
[115] https://www.youtube.com/watch?v=jkSI-floXs8

---
Answer from Perplexity: pplx.ai/share


================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2023 DDF

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 


================================================
FILE: main.py
================================================
#!/usr/bin/env python3
"""
DDF Reels Bot - Local Development Entrypoint

This is the main entry point for local development.
It allows running the bot in polling mode locally.
"""

from src.bot import run_polling

if __name__ == "__main__":
    print("Starting DDF Reels Bot in polling mode...")
    print("Press Ctrl+C to stop")
    run_polling() 


================================================
FILE: package.json
================================================
{
  "name": "ddf-reels-bot",
  "version": "1.0.0",
  "description": "Telegram bot to collect Instagram Reel links and add them to Coda database",
  "main": "api/index.py",
  "scripts": {
    "deploy": "node vercel_setup.js",
    "deploy:bash": "chmod +x vercel_setup.sh && ./vercel_setup.sh",
    "deploy:simple": "chmod +x deploy.sh && ./deploy.sh",
    "test": "python test_coda_connection.py"
  },
  "keywords": [
    "telegram",
    "bot",
    "coda",
    "instagram",
    "reels",
    "vercel",
    "serverless"
  ],
  "author": "",
  "license": "MIT",
  "engines": {
    "node": ">=14.0.0"
  },
  "devDependencies": {
    "dotenv": "^16.4.7"
  }
}



================================================
FILE: requirements.txt
================================================
pyTelegramBotAPI==4.14.0
requests==2.31.0
python-dotenv==1.0.0
Flask==2.3.3
# New dependencies for enhanced monitoring
psutil==5.9.5  # For system resource monitoring
python-json-logger==2.0.7  # Better JSON logging support

# Development dependencies
pytest==7.4.0
pytest-cov==4.1.0 


================================================
FILE: setup.py
================================================
#!/usr/bin/env python3

import os
import sys
import requests
from dotenv import load_dotenv

def check_dependencies():
    """Check if all required packages are installed"""
    try:
        import telebot
        import flask
        print("✅ All required packages are installed.")
        return True
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("Please install required packages: pip install -r requirements.txt")
        return False

def test_coda_connection():
    """Test the connection to the Coda API"""
    load_dotenv()
    
    # Get Coda API details
    CODA_API_KEY = os.getenv("CODA_API_KEY")
    DOC_ID = os.getenv("CODA_DOC_ID")
    TABLE_ID = os.getenv("CODA_TABLE_ID")
    
    if not all([CODA_API_KEY, DOC_ID, TABLE_ID]):
        print("❌ Missing Coda API credentials in .env file.")
        return False
    
    print("Testing Coda API connection...")
    
    # Test connection by querying the table metadata
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Check if request was successful
        if response.status_code == 200:
            table_info = response.json()
            print(f"✅ Successfully connected to Coda!")
            print(f"Table name: {table_info.get('name', 'Unknown')}")
            print(f"Table ID: {table_info.get('id', 'Unknown')}")
            return True
        else:
            print(f"❌ Failed to connect to Coda API. Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error connecting to Coda API: {str(e)}")
        return False

def setup_telegram_webhook():
    """Set up the webhook for Telegram"""
    load_dotenv()
    
    BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
    WEBHOOK_URL = os.getenv("WEBHOOK_URL")
    
    if not all([BOT_TOKEN, WEBHOOK_URL]):
        print("❌ Missing Telegram Bot token or Webhook URL in .env file.")
        return False
    
    # Construct the webhook URL
    webhook_url = f"{WEBHOOK_URL}/api/webhook"
    
    print(f"Setting up Telegram webhook to: {webhook_url}")
    
    # Call the Telegram API to set the webhook
    set_webhook_url = f"https://api.telegram.org/bot{BOT_TOKEN}/setWebhook?url={webhook_url}"
    
    try:
        response = requests.get(set_webhook_url)
        result = response.json()
        
        if result.get("ok"):
            print("✅ Webhook set successfully!")
            return True
        else:
            print(f"❌ Failed to set webhook: {result.get('description')}")
            return False
            
    except Exception as e:
        print(f"❌ Error setting webhook: {str(e)}")
        return False

def check_telegram_bot():
    """Check if the Telegram bot is valid"""
    load_dotenv()
    
    BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
    
    if not BOT_TOKEN:
        print("❌ Missing Telegram Bot token in .env file.")
        return False
    
    print("Checking Telegram bot...")
    
    # Call the getMe API to verify the bot
    get_me_url = f"https://api.telegram.org/bot{BOT_TOKEN}/getMe"
    
    try:
        response = requests.get(get_me_url)
        result = response.json()
        
        if result.get("ok"):
            bot_info = result.get("result", {})
            print(f"✅ Bot is valid!")
            print(f"Bot username: @{bot_info.get('username')}")
            print(f"Bot name: {bot_info.get('first_name')}")
            return True
        else:
            print(f"❌ Invalid bot token: {result.get('description')}")
            return False
            
    except Exception as e:
        print(f"❌ Error checking bot: {str(e)}")
        return False

def main():
    """Main function"""
    print("=== DDF Reels Bot Setup ===")
    
    # Check if .env file exists
    if not os.path.exists(".env"):
        print("❌ .env file not found. Please create a .env file with the required credentials.")
        return
    
    # Check if dependencies are installed
    if not check_dependencies():
        return
    
    # Test Coda connection
    coda_ok = test_coda_connection()
    
    # Check Telegram bot
    telegram_ok = check_telegram_bot()
    
    # Ask if user wants to set up the webhook
    if coda_ok and telegram_ok:
        webhook_choice = input("\nDo you want to set up the Telegram webhook? (y/n): ")
        if webhook_choice.lower() == 'y':
            webhook_ok = setup_telegram_webhook()
            
            if webhook_ok:
                print("\n=== Setup Complete ===")
                print("Your bot is ready to be deployed to Vercel!")
                print("\nTo deploy to Vercel:")
                print("1. Push this code to a GitHub repository")
                print("2. Connect the repository to Vercel")
                print("3. Set the environment variables in Vercel")
                print("4. Deploy the project")
            else:
                print("\n❌ Webhook setup failed. Please check your WEBHOOK_URL in the .env file.")
        else:
            print("\nSkipping webhook setup.")
            print("You'll need to set up the webhook manually after deploying to Vercel.")
    else:
        print("\n❌ Setup failed. Please fix the issues above before continuing.")

if __name__ == "__main__":
    main() 


================================================
FILE: vercel.json
================================================
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.py",
      "use": "@vercel/python"
    }
  ],
  "rewrites": [
    { "source": "/api/webhook", "destination": "/api/index.py" },
    { "source": "/(.*)", "destination": "/api/index.py" }
  ],
  "public": true
} 


================================================
FILE: .env.example
================================================
# DDF Reels Bot - Environment Variables Example
# Copy this file to .env and fill in the values

# Required Environment Variables
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
CODA_API_KEY=your_coda_api_key
CODA_DOC_ID=your_coda_doc_id 
CODA_TABLE_ID=your_coda_table_id
CODA_LINK_COLUMN_ID=your_coda_link_column_id

# Optional Environment Variables
ENVIRONMENT=production  # or development
AUTHORIZED_USERS=username1,username2  # comma-separated list of telegram usernames
ADMIN_USERS=123456789,987654321  # comma-separated list of telegram user IDs
LOG_LEVEL=INFO  # DEBUG, INFO, WARNING, ERROR, CRITICAL
WEBHOOK_URL=https://yourdomain.vercel.app  # for webhook mode 

# BrightData API
BRIGHT_DATA_API_KEY=your_brightdata_api_key 


================================================
FILE: api/index.py
================================================
import os
import json
import telebot
import traceback
import sys
from flask import Flask, request, Response, jsonify
from dotenv import load_dotenv

# Import our shared utility functions
# Use relative imports for Vercel compatibility
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from src.utils import get_required_env, extract_instagram_links, send_to_coda

# Load environment variables
load_dotenv()

# Initialize Flask app for Vercel serverless function
app = Flask(__name__)

# Configuration with validation
try:
    # Telegram Bot Token (required)
    BOT_TOKEN = get_required_env("TELEGRAM_BOT_TOKEN")
    print(f"Using Bot Token: {BOT_TOKEN[:5]}...{BOT_TOKEN[-5:]}")

    # Coda API Details (all required)
    CODA_API_KEY = get_required_env("CODA_API_KEY").strip()  # Strip whitespace
    print(f"Using Coda API Key: {CODA_API_KEY[:5]}...{CODA_API_KEY[-5:]}")
    
    DOC_ID = get_required_env("CODA_DOC_ID")
    print(f"Using Coda Doc ID: {DOC_ID}")
    
    TABLE_ID = get_required_env("CODA_TABLE_ID")
    print(f"Using Coda Table ID: {TABLE_ID}")
except ValueError as e:
    # In production, this will cause the server to fail fast with a clear error
    print(f"Configuration error: {str(e)}")
    if __name__ != "__main__":  # Only exit if not in local development
        sys.exit(1)

# Initialize Telegram Bot
print("Initializing Telegram Bot")
bot = telebot.TeleBot(BOT_TOKEN)
print("Bot initialized successfully")

def send_telegram_message(chat_id, text):
    """Send a message to a Telegram chat."""
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '').strip()
    
    if not bot_token:
        print("Error: No Telegram bot token found in environment variables")
        return False
        
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text
    }
    
    try:
        response = requests.post(url, json=payload)
        print(f"Telegram response: {response.status_code} - {response.text}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error sending Telegram message: {e}")
        return False

# Process webhook calls - this is the endpoint Vercel will expose
@app.route('/api/webhook', methods=['POST'])
def webhook():
    """
    Handle incoming webhook from Telegram.
    Extract Instagram links and save them to Coda.
    """
    print("Webhook endpoint called")
    
    # Parse the incoming JSON data
    try:
        data = request.json
    except Exception as e:
        print(f"Failed to parse JSON: {e}")
        return jsonify({"status": "error", "message": "Invalid JSON payload"}), 400
    
    # Extract message text from webhook data
    try:
        message = data.get('message', {})
        text = message.get('text', '')
        chat_id = message.get('chat', {}).get('id')
        
        if not chat_id:
            print("No chat_id found in webhook data")
            return jsonify({"status": "error", "message": "No chat_id found"}), 400
            
        print(f"Received message: {text}")
        
        # Extract Instagram links using shared utility function
        instagram_links = extract_instagram_links(text)
        print(f"Extracted Instagram links: {instagram_links}")
        
        if not instagram_links:
            print("No Instagram links found in message")
            send_telegram_message(chat_id, "I don't recognize any Instagram links in your message. Please send a valid Instagram link.")
            return jsonify({"status": "success", "message": "No Instagram links found"}), 200
        
        # Create coda config from environment variables
        coda_config = {
            "api_key": CODA_API_KEY,
            "doc_id": DOC_ID,
            "table_id": TABLE_ID,
            "column_name": "Link"  # Use column name for stability
        }
        
        # Process each link
        success_count = 0
        for link in instagram_links:
            success, _ = send_to_coda(link, coda_config)
            
            if success:
                success_count += 1
            
        # Send response back to user
        if success_count > 0:
            send_telegram_message(chat_id, "✅ Link saved successfully to the DDF database!")
        else:
            send_telegram_message(chat_id, "❌ Failed to save link to the database. Please try again later or contact support.")
        
        return jsonify({"status": "success", "message": f"Processed {len(instagram_links)} links, saved {success_count} successfully"}), 200
            
    except Exception as e:
        print(f"Error in webhook handler: {e}")
        print(f"Traceback: {traceback.format_exc()}")
        return jsonify({"status": "error", "message": f"Failed to process webhook: {str(e)}"}), 500

# The main entry point for Vercel
@app.route('/', methods=['GET'])
def index():
    """Root endpoint for health check"""
    return {"status": "ok", "message": "Bot is running"}

# This will be ignored by Vercel but can be used for local testing
if __name__ == "__main__":
    # Set webhook URL for your Vercel deployment (optional)
    WEBHOOK_URL = os.getenv("WEBHOOK_URL", "")
    
    if WEBHOOK_URL:
        # Set webhook
        webhook_url = f"{WEBHOOK_URL}/api/webhook"
        print(f"Would set webhook to: {webhook_url}")
        
        # Start Flask server for local testing
        app.run(host='0.0.0.0', port=8080)
    else:
        print("WEBHOOK_URL environment variable not set. Cannot start webhook server.") 


================================================
FILE: documentation/DEPLOYMENT.md
================================================
# Deployment Guide for DDF Reels Bot

This guide explains how to properly deploy the DDF Reels Bot to Vercel with the correct environment setup.

## Required Environment Variables

The bot requires the following environment variables to function properly:

| Variable | Description | Example |
|----------|-------------|---------|
| `TELEGRAM_BOT_TOKEN` | Telegram bot API token | `123456789:ABCDefGhIJKlmnOPQRstUVwxyz` |
| `CODA_API_KEY` | Coda API key | `3e92f721-91d1-485e-aab9-b7d50e4fa4da` |
| `CODA_DOC_ID` | Coda document ID | `NYzN0H9At4` |
| `CODA_TABLE_ID` | Coda table ID | `grid-Pyccn7MrAA` |
| `CODA_LINK_COLUMN_ID` | Column ID for links | `c-LFekrYG0se` |

## Optional Environment Variables

These variables are optional and have sensible defaults:

| Variable | Description | Default |
|----------|-------------|---------|
| `ENVIRONMENT` | Environment name | `production` |
| `AUTHORIZED_USERS` | Comma-separated list of usernames | *empty* (all users allowed) |
| `ADMIN_USERS` | Comma-separated list of telegram user IDs | *empty* (no admins) |
| `LOG_LEVEL` | Logging level | `INFO` |
| `WEBHOOK_URL` | Webhook URL for Telegram | *required for webhook mode* |

## Setting up Environment Variables on Vercel

### Method 1: Using the Vercel Dashboard

1. Go to your project on the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add each required environment variable
4. Deploy or redeploy your project

### Method 2: Using Vercel CLI

Create a `.env` file locally with all your environment variables:

```
TELEGRAM_BOT_TOKEN=your_bot_token
CODA_API_KEY=your_coda_api_key
CODA_DOC_ID=your_doc_id
CODA_TABLE_ID=your_table_id
CODA_LINK_COLUMN_ID=your_column_id
```

Then use Vercel CLI to set these variables:

```bash
# First login to Vercel
vercel login

# Pull existing environment variables and merge with your local .env
vercel env pull

# Add each environment variable
cat .env | while IFS= read -r line; do
  if [[ $line != \#* && $line != "" ]]; then
    key=$(echo $line | cut -d= -f1)
    value=$(echo $line | cut -d= -f2-)
    echo "Adding $key..."
    echo $value | vercel env add $key production
  fi
done

# Deploy with the updated environment
vercel --prod
```

## Testing Your Deployment

After deployment, you should test your bot:

1. Send a message to your bot on Telegram
2. Try sending an Instagram link
3. Check your Coda database to verify the link was saved

## Troubleshooting

### 1. Environment Variable Issues

If your bot fails with environment variable errors, check:
- That all required variables are properly set
- There are no typos in the variable names
- The values are correctly formatted (especially the Coda IDs)

### 2. Coda 404 Errors

If you get a 404 error when saving to Coda:
- Verify the `CODA_DOC_ID` - should NOT include any "d" prefix
- Check that `CODA_TABLE_ID` includes the full ID (e.g., `grid-Pyccn7MrAA` not just `Pyccn7MrAA`)
- Ensure your Coda API key has access to the document

### 3. Telegram Webhook Issues

If the bot isn't responding to messages:
- Verify the webhook is properly set
- Check Vercel logs for any errors
- Ensure the Telegram bot token is correct

## Security Notes

- Never commit your `.env` file or any files containing sensitive tokens to version control
- Use environment secrets in CI/CD pipelines instead of hardcoded values
- Regularly rotate your API keys for better security

## Why Vercel?

Vercel offers several advantages for deploying this bot:

1. **Instant response times**: Serverless functions run on-demand, providing quick responses to messages.
2. **Zero maintenance**: No need to manage servers or worry about uptime.
3. **Automatic scaling**: Handles any number of concurrent messages without configuration.
4. **Simple deployment**: Easy integration with GitHub for continuous deployment.

## Prerequisites

Before you begin, make sure you have:

1. A GitHub account
2. A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)
3. Your Telegram bot token (from BotFather)
4. Your Coda API credentials

## Step 1: Prepare Your Repository

1. Push your bot code to a GitHub repository:

```bash
# Initialize git repository if needed
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/ddf-reels-bot.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New" → "Project"
3. Select your GitHub repository from the list
4. Vercel will automatically detect that this is a Python project

## Step 3: Configure Environment Variables

1. In the Vercel project settings, add the following environment variables:

| Name | Value | Description |
|------|-------|-------------|
| `TELEGRAM_BOT_TOKEN` | `7780725841:AAEkNzWjmG6jr2wDCS5w--YjupCQDSPmkm0` | Your Telegram bot token |
| `CODA_API_KEY` | `3e92f721-91d1-485e-aab9-b7d50e4fa4da` | Your Coda API key |
| `CODA_DOC_ID` | `dNYzN0H9At4` | Your Coda document ID |
| `CODA_TABLE_ID` | `tun7MrAA` | Your Coda table ID |
| `CODA_LINK_COLUMN_ID` | `c-LFekrYG0se` | The column ID for links |

## Step 4: Deploy

1. Click "Deploy" to start the deployment process
2. Vercel will build and deploy your project
3. Once complete, you'll get a deployment URL (e.g., `https://ddf-reels-bot.vercel.app`)

## Step 5: Set Up the Webhook

After deployment, you need to set up the webhook to connect Telegram to your Vercel deployment:

1. Open your browser and navigate to the following URL (replace with your actual values):

```
https://api.telegram.org/bot7780725841:AAEkNzWjmG6jr2wDCS5w--YjupCQDSPmkm0/setWebhook?url=https://your-vercel-url.vercel.app/api/webhook
```

2. You should see a response indicating the webhook was set successfully:

```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```

## Step 6: Testing the Bot

1. Open Telegram and start a conversation with your bot (@ddfreelsbot)
2. Send a message like `/start` to check if the bot responds
3. Send an Instagram Reel link to test the full functionality

## Updating the Bot

When you need to update the bot:

1. Make changes to your local code
2. Commit and push to GitHub
3. Vercel will automatically redeploy the updated code

## Monitor Performance

You can monitor the performance of your bot using Vercel's dashboard:

1. Go to your project in the Vercel dashboard
2. Click on "Analytics" to see function invocations, execution time, and errors

## Additional Tips

- **Custom Domain**: You can set up a custom domain for your bot in the Vercel project settings
- **Development Environment**: Use the local development server for testing before deploying
- **Logs**: Check the Vercel Function Logs for debugging information 


================================================
FILE: documentation/reel_scraper.md
================================================
Here’s a detailed project description and documentation for integrating the **Bright Data Instagram Reels Scraper API** with your application. This will enable you to extract data (e.g., account details, likes, comments, views, descriptions) from Instagram Reels using the scraper API.

---

# **Project: Instagram Reels Data Integration with Bright Data API**

## **Objective**
To integrate Bright Data’s Instagram Reels Scraper API into your application, enabling automated extraction of metadata and performance metrics from Instagram Reels. The extracted data will be processed and stored in a database (e.g., Coda) for further analysis or use.

---

## **Key Features**
1. **Input**: Instagram Reel URLs.
2. **Output**: Metadata such as:
   - Account username.
   - Reel description.
   - Likes, comments, views.
   - Hashtags and mentions.
   - Video URL (optional).
3. **Storage**: Store the extracted data in a database (e.g., Coda).
4. **Automation**: Use Tasker or a custom bot to collect Reel links and trigger the scraper.

---

## **API Documentation**

### **Authentication**
To access the Bright Data API:
1. Log in to your Bright Data account.
2. Navigate to the "API Tokens" section in your account settings.
3. Generate an API token.

Include the token in the `Authorization` header of all requests:
```
Authorization: Bearer YOUR_API_TOKEN
```

---

### **Endpoint for Scraping Instagram Reels**
**URL**:  
```
POST https://api.brightdata.com/datasets/v3/scrape
```

---

### **Request Structure**

#### **Headers**
| Key              | Value                           |
|-------------------|---------------------------------|
| Authorization     | Bearer YOUR_API_TOKEN          |
| Content-Type      | application/json               |

#### **Body**
The request body should include:
- The type of scraper (`"reels"` for Instagram Reels).
- The list of Reel URLs to scrape.

Example JSON body:
```json
{
  "scraper": "instagram_reels",
  "inputs": [
    {
      "url": "https://www.instagram.com/reel/xyz123/"
    },
    {
      "url": "https://www.instagram.com/reel/abc456/"
    }
  ]
}
```

---

### **Response Structure**
The response will contain metadata for each Reel URL provided.

Example JSON response:
```json
{
  "results": [
    {
      "url": "https://www.instagram.com/reel/xyz123/",
      "username": "example_user",
      "description": "Check out this amazing video! #fun",
      "likes": 1200,
      "comments": 45,
      "views": 5000,
      "hashtags": ["#fun"],
      "mentions": ["@friend"],
      "video_url": "https://instagram.fxyz1-1.fna.fbcdn.net/video.mp4"
    },
    {
      "url": "https://www.instagram.com/reel/abc456/",
      "username": "another_user",
      "description": "Another great reel!",
      "likes": 800,
      "comments": 20,
      "views": 3000,
      "hashtags": [],
      "mentions": []
    }
  ]
}
```

---

### **Error Handling**
Possible error responses:
- `401 Unauthorized`: Invalid or missing API token.
- `400 Bad Request`: Malformed request body.
- `429 Too Many Requests`: Rate limit exceeded.

Example error response:
```json
{
  "error": {
    "code": 401,
    "message": "Invalid API token."
  }
}
```

---

## **Integration Steps**

### Step 1: Collect Reel Links
- Use a Telegram bot or Tasker automation to collect Instagram Reel links from users.
- Store the links in a temporary database or directly pass them to the scraper API.

### Step 2: Send Links to Bright Data API
1. Create an HTTP POST request to the Bright Data endpoint.
2. Include the Reel URLs in the request body as shown above.

### Step 3: Process and Store Results
- Parse the response JSON to extract relevant fields (e.g., username, likes, comments).
- Insert this data into your database (e.g., Coda).

---

## **Example Integration Code**

Here’s an example Python script for integration:

```python
import requests

# Bright Data API Token
API_TOKEN = 'YOUR_API_TOKEN'

# Scraper Endpoint
SCRAPER_URL = 'https://api.brightdata.com/datasets/v3/scrape'

def scrape_reels(reel_urls):
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'scraper': 'instagram_reels',
        'inputs': [{'url': url} for url in reel_urls]
    }
    
    response = requests.post(SCRAPER_URL, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json()['results']
    else:
        print(f"Error: {response.status_code}, {response.json()}")
        return None

# Example usage
reel_links = [
    'https://www.instagram.com/reel/xyz123/',
    'https://www.instagram.com/reel/abc456/'
]

results = scrape_reels(reel_links)
if results:
    for reel in results:
        print(f"Username: {reel['username']}, Likes: {reel['likes']}, Views: {reel['views']}")
```

---

## **Optional Enhancements**

1. **Webhook Integration**:
   - Configure a webhook to automatically trigger scraping when new links are collected.

2. **Batch Processing**:
   - If you have more than 20 URLs, split them into batches and send multiple requests.

3. **Error Logging**:
   - Log errors and retry failed requests after a delay.

4. **Rate Limiting**:
   - Ensure you stay within Bright Data’s rate limits by adding delays between requests if needed.

---

## **Next Steps**
1. Set up your Bright Data account and generate an API token.
2. Test the example code with sample Reel URLs.
3. Integrate the scraper with your Telegram bot or Tasker automation workflow.
4. Store results in your preferred database (e.g., Coda).

Let me know if you need further assistance!

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1741349265/user_uploads/OJQBySwUPOmZwZy/1000083951.jpg
[2] https://pplx-res.cloudinary.com/image/upload/v1741349590/user_uploads/ZGyEBpowtBLBCyn/Screenshot_20250307_131249_Tasker.jpg
[3] https://brightdata.com/cp/scrapers/api/gd_lyclm20il4r5helnj/pdp/overview?id=hl_f96c6424
[4] https://www.reddit.com/r/selfhosted/comments/1idnq77/have_you_seen_a_way_to_host_deepseek/
[5] https://docs.brightdata.com/scraping-automation/web-scraper-api/faqs
[6] https://www.reddit.com/r/webscraping/comments/vddsaj/how_to_integrate_paid_proxy_with_python_eg_scrapy/
[7] https://brightdata.com/products/web-scraper/instagram/reels
[8] https://www.reddit.com/r/SideProject/comments/1h92434/my_employer_said_this_was_too_niche_an_idea_to/
[9] https://www.reddit.com/r/SideProject/comments/1h0h7xv/what_are_you_building_right_now_lets_share/
[10] https://www.reddit.com/r/Emailmarketing/comments/1b8cuy6/how_does_claycom_works_what_are_the_alternatives/
[11] https://www.reddit.com/r/hoggit/comments/f6pfwj/dcs_world_in_terms_of_production_honest_and/
[12] https://www.reddit.com/r/raspberry_pi/comments/5y9q7x/tutorial_build_a_timelapse_rig_with_your/
[13] https://www.reddit.com/r/learnprogramming/comments/1hxft96/tutorial_hell_dont_want_to_stuck_as_at_age_35/
[14] https://docs.brightdata.com/api-reference/web-scraper-api/social-media-apis/instagram
[15] https://docs.brightdata.com/api-reference/introduction
[16] https://brightdata.com/products/web-scraper
[17] https://www.youtube.com/watch?v=uL1sNXcbMbI
[18] https://docs.brightdata.com/api-reference/web-scraper-api/social-media-apis/facebook
[19] https://dev.to/terieyenike/analyzing-bright-data-vs-scraperapi-a-comparative-evaluation-43d9
[20] https://get.brightdata.com/web-scraper-API
[21] https://webscraping.blog/web-scraping-apis/
[22] https://brightdata.com/products/web-scraper/instagram
[23] https://www.scraperapi.com/web-scraping/is-web-scraping-legal/
[24] https://brightdata.com/products/web-scraper/social-media-scrape
[25] https://www.scrapingdog.com/blog/bright-data-alternatives-for-web-scraping/
[26] https://brightdata.com/pricing/web-scraper
[27] https://www.reddit.com/r/webscraping/comments/151zi62/scraper_for_tiktok_and_instagram/
[28] https://www.reddit.com/r/webscraping/comments/1dsq7w2/monthly_selfpromotion_thread_july_2024/
[29] https://zenscrape.com/zenscrape-vs-brightdata-comparison/
[30] https://brightdata.com/products/web-scraper/facebook/reels
[31] https://dev.to/ranjancse/state-of-the-art-automated-web-scraper-using-bright-data-5al5
[32] https://www.youtube.com/watch?v=Z4hZ1Iafqxs

---

Here’s the **complete documentation** to integrate Bright Data’s Instagram Reels Scraper API into your application, including how to handle dataset IDs and retrieve results.

---

# **Bright Data Instagram Reels Scraper API Integration**

## **Overview**
This guide explains how to:
1. Trigger a scraping job using the dataset ID.
2. Retrieve snapshot results (scraped data).
3. Handle errors and monitor progress.

---

## **Step 1: Trigger a Scraping Job**

### **Endpoint**
```
POST https://api.brightdata.com/datasets/v3/trigger
```

### **Headers**
| Key              | Value                           |
|-------------------|---------------------------------|
| Authorization     | Bearer YOUR_API_TOKEN          |
| Content-Type      | application/json               |

### **Body**
Include the dataset ID and the URLs to scrape.

**Example Request Body**:
```json
{
  "dataset_id": "gd_lyclm20il4r5helnj",
  "inputs": [
    {"url": "https://www.instagram.com/reel/xyz123/"},
    {"url": "https://www.instagram.com/reel/abc456/"}
  ]
}
```

### **Example cURL Command**
```bash
curl -X POST "https://api.brightdata.com/datasets/v3/trigger" \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "dataset_id": "gd_lyclm20il4r5helnj",
  "inputs": [
    {"url": "https://www.instagram.com/reel/xyz123/"},
    {"url": "https://www.instagram.com/reel/abc456/"}
  ]
}'
```

### **Response**
The API returns a snapshot ID that you’ll use to retrieve the results.

**Example Response**:
```json
{
  "snapshot_id": "s_lynh132v19n82v81kx",
  "status": "running"
}
```

---

## **Step 2: Monitor Progress**

### **Endpoint**
```
GET https://api.brightdata.com/datasets/v3/snapshots
```

### **Headers**
| Key              | Value                           |
|-------------------|---------------------------------|
| Authorization     | Bearer YOUR_API_TOKEN          |

### **Query Parameters**
| Parameter         | Description                    |
|-------------------|---------------------------------|
| dataset_id        | The dataset ID (`gd_lyclm20il4r5helnj`). |
| status            | Filter snapshots by status (`ready`, `running`, `failed`). |

### **Example cURL Command**
```bash
curl -X GET "https://api.brightdata.com/datasets/v3/snapshots?dataset_id=gd_lyclm20il4r5helnj&status=ready" \
-H "Authorization: Bearer YOUR_API_TOKEN"
```

### **Response**
The API returns a list of snapshots for the dataset.

**Example Response**:
```json
[
  {
    "id": "s_lynh132v19n82v81kx",
    "created": "2025-03-27T15:00:00Z",
    "status": "ready",
    "dataset_id": "gd_lyclm20il4r5helnj",
    "dataset_size": 100
  }
]
```

---

## **Step 3: Retrieve Snapshot Results**

### **Endpoint**
```
GET https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}
```

### **Headers**
| Key              | Value                           |
|-------------------|---------------------------------|
| Authorization     | Bearer YOUR_API_TOKEN          |

### **Query Parameters**
| Parameter         | Description                    |
|-------------------|---------------------------------|
| format            | Output format (`json`, `ndjson`, `csv`). |
| compress          | Whether to compress results (`true` or `false`). |

### **Example cURL Command**
```bash
curl -X GET "https://api.brightdata.com/datasets/v3/snapshot/s_lynh132v19n82v81kx?format=json&compress=false" \
-H "Authorization: Bearer YOUR_API_TOKEN"
```

### **Response**
The API returns the scraped data for the snapshot.

**Example Response**:
```json
{
  "results": [
    {
      "url": "https://www.instagram.com/reel/xyz123/",
      "username": "example_user",
      "description": "#fun Check out this amazing video!",
      "likes": 1200,
      "comments": 45,
      "views": 5000,
      "hashtags": ["#fun"],
      "mentions": ["@friend"],
      "video_url": "https://instagram.fxyz1-1.fna.fbcdn.net/video.mp4"
    },
    {
      "url": "https://www.instagram.com/reel/abc456/",
      "username": "@another_user",
      "description": "#cool Another great reel!",
      "likes": 800,
      "comments": 20,
      "views": 3000,
      ...
    }
  ]
}
```

---

## **Error Handling**

### Common Errors
1. **401 Unauthorized**:
   - Ensure your API token is valid and included in the `Authorization` header.
2. **400 Bad Request**:
   - Check if your request body is correctly formatted.
3. **429 Too Many Requests**:
   - Reduce request frequency or contact Bright Data support for rate limit adjustments.

---

## **Integration Example (Python)**

Here’s a Python script to automate the scraping process:

```python
import requests

# Bright Data API Token
API_TOKEN = 'YOUR_API_TOKEN'

# Dataset ID
DATASET_ID = 'gd_lyclm20il4r5helnj'

# Trigger Scraping Job
def trigger_scraping(reel_urls):
    url = 'https://api.brightdata.com/datasets/v3/trigger'
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    payload = {
        'dataset_id': DATASET_ID,
        'inputs': [{'url': u} for u in reel_urls]
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Monitor Progress
def get_snapshots():
    url = f'https://api.brightdata.com/datasets/v3/snapshots?dataset_id={DATASET_ID}&status=ready'
    headers = {'Authorization': f'Bearer {API_TOKEN}'}
    response = requests.get(url, headers=headers)
    return response.json()

# Retrieve Results
def get_snapshot_results(snapshot_id):
    url = f'https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}?format=json&compress=false'
    headers = {'Authorization': f'Bearer {API_TOKEN}'}
    response = requests.get(url, headers=headers)
    return response.json()

# Example Usage
reel_links = [
    'https://www.instagram.com/reel/xyz123/',
    'https://www.instagram.com/reel/abc456/'
]

trigger_response = trigger_scraping(reel_links)
snapshot_id = trigger_response.get('snapshot_id')

if snapshot_id:
    print(f"Snapshot ID: {snapshot_id}")
    
    # Wait until snapshot is ready (polling)
    snapshots = get_snapshots()
    
    # Retrieve Results
    results = get_snapshot_results(snapshot_id)
    print(results)
else:
    print("Failed to trigger scraping.")
```

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1741349265/user_uploads/OJQBySwUPOmZwZy/1000083951.jpg
[2] https://pplx-res.cloudinary.com/image/upload/v1741349590/user_uploads/ZGyEBpowtBLBCyn/Screenshot_20250307_131249_Tasker.jpg
[3] https://pplx-res.cloudinary.com/image/upload/v1743085933/user_uploads/ooNVYYZziLuSUXo/CleanShot-2025-03-27-at-15.32.05-2x.jpg
[4] https://pplx-res.cloudinary.com/image/upload/v1743085943/user_uploads/rDWeaQFAJsExVzh/CleanShot-2025-03-27-at-15.32.05-2x.jpg
[5] https://www.reddit.com/r/ProgrammerHumor/comments/1ftifgq/noonehasseenworsecode/
[6] https://docs.brightdata.com/datasets/custom-datasets/custom-dataset-api
[7] https://github.com/luminati-io/langchain-web-scraping
[8] https://docs.brightdata.com/api-reference/web-scraper-api/management-apis/get-snapshot-delivery-parts
[9] https://docs.brightdata.com/api-reference/web-scraper-api/management-apis/get-snapshots
[10] https://www.reddit.com/r/sysadmin/comments/1ixuk4w/fine_ill_write_my_own_driver_with_blackjack_and/
[11] https://www.reddit.com/r/BorgBackup/comments/v3bwfg/why_should_i_switch_from_restic_to_borg/
[12] https://www.reddit.com/r/TrueDoTA2/comments/11i7scq/what_theories_do_you_havebelieve_that_you_want/
[13] https://www.reddit.com/r/ExperiencedDevs/comments/1anjgi4/is_it_a_common_practice_to_copy_huge_blocks_of/
[14] https://www.reddit.com/r/Python/comments/15z1amc/how_to_build_the_front_end_of_a_web_app_if_you/
[15] https://www.reddit.com/r/ClaudeAI/comments/1g5fxyk/its_830am_and_i_am_ratelimited_on_my_first_prompt/
[16] https://www.reddit.com/r/dataengineering/comments/1ie4jy9/what_is_the_most_fucked_up_data_mess_up_youve_had/
[17] https://www.reddit.com/r/DataHoarder/comments/13vvue5/why_isnt_distributeddecentralized_archiving/
[18] https://www.reddit.com/r/msp/comments/11420wl/reporting_across_services/
[19] https://www.reddit.com/r/ProgrammerHumor/comments/1456b8c/reddit_seems_to_have_forgotten_why_websites/
[20] https://www.reddit.com/r/javahelp/new/?after=dDNfMWpiMmFkcw%3D%3D&sort=best&t=DAY
[21] https://www.reddit.com/r/DataHoarder/comments/cs1cum/how_do_you_back_up_your_data/
[22] https://www.reddit.com/r/Planetside/comments/16olm4w/customer_support_cant_compensate_me_for_my/
[23] https://www.reddit.com/r/sysadmin/comments/1ap9uwk/what_was_your_last_god_i_am_so_stupid_moment/
[24] https://docs.brightdata.com/api-reference/marketplace-dataset-api/download-the-file-by-snapshot_id
[25] https://community.grafana.com/t/snapshot-api-how-to-get-the-data/2424
[26] https://github.com/luminati-io/Google-Maps-Scraper/blob/main/README.md
[27] https://apidocs.brightlocal.com
[28] https://www.sitepoint.com/bright-data-web-scraping/
[29] https://blog.stackademic.com/unlock-the-full-potential-of-web-scraping-with-bright-datas-advanced-scraping-browser-e545c84e8132
[30] https://platform.openai.com/docs/api-reference/files
[31] https://www.youtube.com/watch?v=Ve04_6gDKvU
[32] https://www.mongodb.com/community/forums/t/how-to-get-the-snapshot-id-of-the-last-on-demand-backup/169407
[33] https://github.com/jasonacox/tinytuya
[34] https://dev.to/terieyenike/analyzing-bright-data-vs-scraperapi-a-comparative-evaluation-43d9
[35] https://brightsec.com/blog/sql-injection-attack/
[36] https://docs.scandit.com/6.28/data-capture-sdk/dotnet.ios/barcode-capture/api/barcode.html
[37] https://support.brightcomputing.com/manuals/9.1/developer-manual.pdf
[38] https://www.reddit.com/r/rust/comments/tp8tmn/blog_post_self_modifying_code/
[39] https://www.reddit.com/r/dataengineering/comments/rhbi9v/advice_on_creating_a_data_warehouse_in_an_old/
[40] https://www.reddit.com/r/DataHoarder/comments/1g7w0rh/internet_archive_issues_continue_this_time_with/
[41] https://www.reddit.com/r/dotnet/comments/1fvtcyn/how_to_processrecompute_large_amounts300_million/
[42] https://www.reddit.com/r/dataengineering/comments/16xxu15/any_tool_you_regret_buying_or_deploying_in_the/
[43] https://docs.snyk.io/snyk-api/reference/snapshots-v1
[44] https://developers.wellcomecollection.org/docs/examples/working-with-snapshots-of-the-api





================================================
FILE: scripts/deploy.sh
================================================
#!/bin/bash

# Script to deploy the Telegram Bot to an existing Vercel project

# Color definitions
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Project details
PROJECT_NAME="ddf-reels-bot"

# Load environment variables
ENV_FILE=.env
if [ -f "$ENV_FILE" ]; then
    echo -e "${BLUE}Loading environment variables from $ENV_FILE...${NC}"
    source "$ENV_FILE"
else
    echo -e "${RED}Error: $ENV_FILE not found. Please make sure the .env file exists.${NC}"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$TELEGRAM_BOT_TOKEN" ] || [ -z "$CODA_API_KEY" ] || [ -z "$CODA_DOC_ID" ] || [ -z "$CODA_TABLE_ID" ] || [ -z "$CODA_LINK_COLUMN_ID" ]; then
    echo -e "${RED}Error: Required environment variables are missing in $ENV_FILE.${NC}"
    exit 1
fi

# Create temporary files for environment variables
echo -e "${BLUE}Creating temporary files for environment variables...${NC}"
echo "$TELEGRAM_BOT_TOKEN" > .env.TELEGRAM_BOT_TOKEN
echo "$CODA_API_KEY" > .env.CODA_API_KEY
echo "$CODA_DOC_ID" > .env.CODA_DOC_ID
echo "$CODA_TABLE_ID" > .env.CODA_TABLE_ID
echo "$CODA_LINK_COLUMN_ID" > .env.CODA_LINK_COLUMN_ID

# Set environment variables in Vercel
echo -e "${BLUE}Setting up environment variables in Vercel...${NC}"
echo -e "${YELLOW}You may be prompted to select your project and scope during this process.${NC}"

# Add each environment variable to Vercel for production
echo -e "${BLUE}Adding TELEGRAM_BOT_TOKEN...${NC}"
vercel env add TELEGRAM_BOT_TOKEN production < .env.TELEGRAM_BOT_TOKEN

echo -e "${BLUE}Adding CODA_API_KEY...${NC}"
vercel env add CODA_API_KEY production < .env.CODA_API_KEY

echo -e "${BLUE}Adding CODA_DOC_ID...${NC}"
vercel env add CODA_DOC_ID production < .env.CODA_DOC_ID

echo -e "${BLUE}Adding CODA_TABLE_ID...${NC}"
vercel env add CODA_TABLE_ID production < .env.CODA_TABLE_ID

echo -e "${BLUE}Adding CODA_LINK_COLUMN_ID...${NC}"
vercel env add CODA_LINK_COLUMN_ID production < .env.CODA_LINK_COLUMN_ID

# Clean up temporary files
rm .env.TELEGRAM_BOT_TOKEN .env.CODA_API_KEY .env.CODA_DOC_ID .env.CODA_TABLE_ID .env.CODA_LINK_COLUMN_ID

# Deploy the application
echo -e "${BLUE}Deploying application to Vercel...${NC}"
DEPLOY_OUTPUT=$(vercel --prod)
echo "$DEPLOY_OUTPUT"

# Extract deployment URL from the output
DEPLOYMENT_URL=$(echo "$DEPLOY_OUTPUT" | grep -o "https://[^ ]*\.vercel\.app" | head -n 1)

if [ -z "$DEPLOYMENT_URL" ]; then
    echo -e "${YELLOW}Couldn't automatically get the deployment URL.${NC}"
    read -p "Please enter your deployment URL manually (e.g., https://ddf-reels-bot.vercel.app): " DEPLOYMENT_URL
fi

# Set up Telegram webhook
if [ ! -z "$DEPLOYMENT_URL" ]; then
    echo -e "${BLUE}Setting up Telegram webhook...${NC}"
    WEBHOOK_URL="$DEPLOYMENT_URL/api/webhook"
    TELEGRAM_WEBHOOK_URL="https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook?url=$WEBHOOK_URL"
    
    WEBHOOK_RESPONSE=$(curl -s "$TELEGRAM_WEBHOOK_URL")
    
    if [[ $WEBHOOK_RESPONSE == *"\"ok\":true"* ]]; then
        echo -e "${GREEN}Successfully set up Telegram webhook at $WEBHOOK_URL${NC}"
    else
        echo -e "${RED}Failed to set up Telegram webhook.${NC}"
        echo -e "${YELLOW}Response: $WEBHOOK_RESPONSE${NC}"
        echo -e "${YELLOW}Try manually setting up the webhook by visiting:${NC}"
        echo "$TELEGRAM_WEBHOOK_URL"
    fi
    
    # Update local .env file with the webhook URL
    if grep -q "WEBHOOK_URL=" "$ENV_FILE"; then
        sed -i.bak "s|WEBHOOK_URL=.*|WEBHOOK_URL=$DEPLOYMENT_URL|" "$ENV_FILE"
        rm -f "$ENV_FILE.bak" # Remove backup file
    else
        echo "WEBHOOK_URL=$DEPLOYMENT_URL" >> "$ENV_FILE"
    fi
    
    echo -e "${GREEN}Deployment complete!${NC}"
    echo -e "${GREEN}Your Telegram bot is now running at $DEPLOYMENT_URL${NC}"
    echo -e "${BLUE}Bot username: @ddfreelsbot${NC}"
    echo -e "${BLUE}Try sending an Instagram Reel link to your bot on Telegram!${NC}"
fi 


================================================
FILE: scripts/test_and_deploy.sh
================================================
#!/bin/bash
# Test and deploy script for DDF Reels Bot
# This script runs tests and deploys the bot to Vercel if tests pass

set -e  # Exit on error

echo "=== DDF Reels Bot Testing and Deployment ==="
echo "Starting at $(date)"

# Create logs directory if it doesn't exist
mkdir -p logs

# Function to log messages
log_message() {
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] $1" | tee -a logs/deployment.log
}

# Setup virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    log_message "Creating virtual environment..."
    python3 -m venv .venv
fi

# Activate virtual environment
log_message "Activating virtual environment..."
source .venv/bin/activate

# Install dependencies
log_message "Installing dependencies..."
pip install -r requirements.txt

# Run tests
log_message "Running bot tests..."
python test_bot.py

# If tests pass, proceed with deployment
if [ $? -eq 0 ]; then
    log_message "All tests passed! Proceeding with deployment..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        log_message "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    # Deploy to Vercel
    log_message "Deploying to Vercel..."
    
    # First check if user is logged in to Vercel
    if ! vercel whoami &> /dev/null; then
        log_message "Not logged in to Vercel. Please login:"
        vercel login
    fi
    
    # Deploy
    vercel --prod
    
    if [ $? -eq 0 ]; then
        log_message "Deployment successful!"
        
        # Set up webhook
        WEBHOOK_URL=$(grep WEBHOOK_URL .env | cut -d '=' -f2)
        TOKEN=$(grep TELEGRAM_BOT_TOKEN .env | cut -d '=' -f2)
        
        log_message "Setting up Telegram webhook..."
        WEBHOOK_RESPONSE=$(curl -s "https://api.telegram.org/bot$TOKEN/setWebhook?url=$WEBHOOK_URL/api/webhook")
        
        if [[ $WEBHOOK_RESPONSE == *"\"ok\":true"* ]]; then
            log_message "Webhook set up successfully!"
        else
            log_message "Error setting up webhook. Response: $WEBHOOK_RESPONSE"
        fi
    else
        log_message "Deployment failed."
    fi
else
    log_message "Tests failed. Fix the issues before deploying."
    exit 1
fi

log_message "Process completed at $(date)"
echo "=== Done ===" 


================================================
FILE: scripts/update_vercel_env.js
================================================
const fs = require('fs');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables from .env file
const envConfig = dotenv.parse(fs.readFileSync('.env'));

// Variables to update
const keysToUpdate = [
  'CODA_API_KEY',
  'CODA_DOC_ID',
  'CODA_TABLE_ID',
  'CODA_LINK_COLUMN_ID',
  'TELEGRAM_BOT_TOKEN'
];

console.log('Starting Vercel environment variable update...');

// Update each environment variable
keysToUpdate.forEach(key => {
  const value = envConfig[key];
  
  if (!value) {
    console.log(`⚠️ Skipping ${key} - not found in .env file`);
    return;
  }
  
  try {
    // Remove existing variable (if it exists)
    try {
      console.log(`Removing existing ${key}...`);
      execSync(`vercel env rm ${key} production -y`, { stdio: 'inherit' });
    } catch (error) {
      console.log(`Variable ${key} not found or could not be removed. Continuing...`);
    }
    
    // Add the new variable using a different approach
    console.log(`Adding ${key}...`);
    const cmd = `echo "${value}" | vercel env add ${key} production`;
    execSync(cmd, { stdio: 'inherit' });
    
    console.log(`✅ Successfully updated ${key}`);
  } catch (error) {
    console.error(`❌ Error updating ${key}: ${error.message}`);
  }
});

console.log('Environment variables update completed!');
console.log('Run "vercel --prod" to redeploy with the new variables.'); 


================================================
FILE: scripts/vercel_setup.js
================================================
#!/usr/bin/env node

/**
 * Script to deploy the Telegram Bot to Vercel
 * and set up environment variables programmatically
 */

const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const dotenv = require('dotenv');

// ANSI colors
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify the question method
function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// Execute command and return stdout
function execCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' });
  } catch (error) {
    console.error(`${colors.red}Error executing command: ${command}${colors.reset}`);
    console.error(error.message);
    return '';
  }
}

// Main function
async function main() {
  console.log(`${colors.blue}Starting Vercel deployment for DDF Reels Bot...${colors.reset}`);
  
  // Load environment variables
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.error(`${colors.red}Error: .env file not found. Please make sure the .env file exists.${colors.reset}`);
    rl.close();
    return;
  }
  
  console.log(`${colors.blue}Loading environment variables from .env...${colors.reset}`);
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  
  // Check for required environment variables
  const requiredVars = [
    'TELEGRAM_BOT_TOKEN',
    'CODA_API_KEY',
    'CODA_DOC_ID',
    'CODA_TABLE_ID',
    'CODA_LINK_COLUMN_ID'
  ];
  
  const missingVars = requiredVars.filter(varName => !envConfig[varName]);
  if (missingVars.length > 0) {
    console.error(`${colors.red}Error: The following required environment variables are missing: ${missingVars.join(', ')}${colors.reset}`);
    rl.close();
    return;
  }
  
  // Check if Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'ignore' });
  } catch (error) {
    console.log(`${colors.yellow}Vercel CLI not found. Installing...${colors.reset}`);
    execCommand('npm install -g vercel');
  }
  
  // Generate default project name
  const timestamp = Math.floor(Date.now() / 1000);
  const defaultProjectName = `ddf-reels-bot-${timestamp}`;
  
  // Get project name from user
  const projectName = await question(`Enter your Vercel project name (default: ${defaultProjectName}): `);
  const finalProjectName = projectName || defaultProjectName;
  
  // Get team/scope from user
  console.log(`${colors.blue}Do you want to deploy to a specific Vercel team? (Useful if you have multiple teams)${colors.reset}`);
  const teamSlug = await question('Enter team slug or leave empty for personal account: ');
  
  // Set team flag
  const teamFlag = teamSlug ? `--scope ${teamSlug}` : '';
  
  // Log in to Vercel if not already logged in
  console.log(`${colors.blue}Checking Vercel login status...${colors.reset}`);
  try {
    execSync('vercel whoami', { stdio: 'ignore' });
    console.log(`${colors.green}Already logged in to Vercel.${colors.reset}`);
  } catch (error) {
    console.log(`${colors.blue}Please log in to Vercel:${colors.reset}`);
    execCommand('vercel login');
  }
  
  // Check if this is already a Vercel project
  if (!fs.existsSync('.vercel/project.json')) {
    console.log(`${colors.blue}Initializing Vercel project...${colors.reset}`);
    execCommand(`vercel ${teamFlag} --confirm`);
  }
  
  // Set environment variables
  console.log(`${colors.blue}Setting up environment variables...${colors.reset}`);
  for (const varName of requiredVars) {
    console.log(`Adding ${varName}...`);
    try {
      const value = envConfig[varName];
      // Write value to a temporary file to avoid command line issues
      const tempFile = `.temp_env_${varName}`;
      fs.writeFileSync(tempFile, value);
      execCommand(`vercel env add ${varName} ${teamFlag} < ${tempFile}`);
      fs.unlinkSync(tempFile); // Clean up
    } catch (error) {
      console.error(`${colors.red}Failed to add ${varName}: ${error.message}${colors.reset}`);
    }
  }
  
  // Deploy the application
  console.log(`${colors.blue}Deploying application to Vercel...${colors.reset}`);
  const deployOutput = execCommand(`vercel ${teamFlag} --prod`);
  
  // Extract the deployment URL
  const deploymentUrl = deployOutput.match(/(https:\/\/[^\s]+)/);
  
  if (!deploymentUrl || !deploymentUrl[1]) {
    console.error(`${colors.red}Failed to retrieve deployment URL.${colors.reset}`);
    console.log(`${colors.yellow}Please check the Vercel dashboard for your deployment URL.${colors.reset}`);
    rl.close();
    return;
  }
  
  const finalDeploymentUrl = deploymentUrl[1];
  
  // Set up Telegram webhook
  console.log(`${colors.blue}Setting up Telegram webhook...${colors.reset}`);
  const webhookUrl = `${finalDeploymentUrl}/api/webhook`;
  const telegramWebhookUrl = `https://api.telegram.org/bot${envConfig.TELEGRAM_BOT_TOKEN}/setWebhook?url=${webhookUrl}`;
  
  try {
    const webhookResponse = execCommand(`curl -s "${telegramWebhookUrl}"`);
    
    if (webhookResponse.includes('"ok":true')) {
      console.log(`${colors.green}Successfully set up Telegram webhook at ${webhookUrl}${colors.reset}`);
    } else {
      console.log(`${colors.red}Failed to set up Telegram webhook.${colors.reset}`);
      console.log(`${colors.yellow}Response: ${webhookResponse}${colors.reset}`);
      console.log(`${colors.yellow}Try manually setting up the webhook by visiting:${colors.reset}`);
      console.log(telegramWebhookUrl);
    }
  } catch (error) {
    console.error(`${colors.red}Error setting up webhook: ${error.message}${colors.reset}`);
  }
  
  // Update local .env file with the webhook URL
  try {
    let envContent = fs.readFileSync(envPath, 'utf8');
    if (envContent.includes('WEBHOOK_URL=')) {
      envContent = envContent.replace(/WEBHOOK_URL=.*/, `WEBHOOK_URL=${finalDeploymentUrl}`);
    } else {
      envContent += `\nWEBHOOK_URL=${finalDeploymentUrl}`;
    }
    fs.writeFileSync(envPath, envContent);
  } catch (error) {
    console.error(`${colors.red}Failed to update .env file: ${error.message}${colors.reset}`);
  }
  
  // Success message
  console.log(`${colors.green}Deployment complete!${colors.reset}`);
  console.log(`${colors.green}Your Telegram bot is now running at ${finalDeploymentUrl}${colors.reset}`);
  console.log(`${colors.blue}Bot username: @ddfreelsbot${colors.reset}`);
  console.log(`${colors.blue}Try sending an Instagram Reel link to your bot on Telegram!${colors.reset}`);
  
  rl.close();
}

// Run the main function
main().catch(error => {
  console.error(`${colors.red}Unexpected error: ${error.message}${colors.reset}`);
  rl.close();
}); 


================================================
FILE: scripts/vercel_setup.sh
================================================
#!/bin/bash

# Script to set up the Telegram Bot on Vercel

# Color definitions
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables
ENV_FILE=.env
if [ -f "$ENV_FILE" ]; then
    echo -e "${BLUE}Loading environment variables from $ENV_FILE...${NC}"
    source "$ENV_FILE"
else
    echo -e "${RED}Error: $ENV_FILE not found. Please make sure the .env file exists.${NC}"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$TELEGRAM_BOT_TOKEN" ] || [ -z "$CODA_API_KEY" ] || [ -z "$CODA_DOC_ID" ] || [ -z "$CODA_TABLE_ID" ] || [ -z "$CODA_LINK_COLUMN_ID" ]; then
    echo -e "${RED}Error: Required environment variables are missing in $ENV_FILE.${NC}"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi

# Project name with a timestamp to ensure uniqueness
DEFAULT_PROJECT_NAME="ddf-reels-bot-$(date +%s)"

# Ask for Vercel project name
read -p "Enter your Vercel project name (default: $DEFAULT_PROJECT_NAME): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-$DEFAULT_PROJECT_NAME}

# Prompt for team/scope
echo -e "${BLUE}Do you want to deploy to a specific Vercel team? (Useful if you have multiple teams)${NC}"
read -p "Enter team slug or leave empty for personal account: " TEAM_SLUG

# Set team flag if a team was specified
TEAM_FLAG=""
if [ ! -z "$TEAM_SLUG" ]; then
    TEAM_FLAG="--scope $TEAM_SLUG"
fi

# Log in to Vercel if not already logged in
echo -e "${BLUE}Checking Vercel login status...${NC}"
vercel whoami &> /dev/null || vercel login

# Check if this is already a Vercel project
if [ ! -f ".vercel/project.json" ]; then
    echo -e "${BLUE}Initializing Vercel project...${NC}"
    vercel $TEAM_FLAG --confirm
fi

# Set environment variables
echo -e "${BLUE}Setting up environment variables...${NC}"
vercel env add TELEGRAM_BOT_TOKEN $TEAM_FLAG <<< "$TELEGRAM_BOT_TOKEN"
vercel env add CODA_API_KEY $TEAM_FLAG <<< "$CODA_API_KEY"
vercel env add CODA_DOC_ID $TEAM_FLAG <<< "$CODA_DOC_ID"
vercel env add CODA_TABLE_ID $TEAM_FLAG <<< "$CODA_TABLE_ID"
vercel env add CODA_LINK_COLUMN_ID $TEAM_FLAG <<< "$CODA_LINK_COLUMN_ID"

# Deploy the application
echo -e "${BLUE}Deploying application to Vercel...${NC}"
DEPLOYMENT_URL=$(vercel $TEAM_FLAG --prod | grep "https://" | head -n 1)

if [ -z "$DEPLOYMENT_URL" ]; then
    echo -e "${RED}Failed to retrieve deployment URL.${NC}"
    echo -e "${YELLOW}Please check the Vercel dashboard for your deployment URL.${NC}"
else
    # Set up Telegram webhook
    echo -e "${BLUE}Setting up Telegram webhook...${NC}"
    WEBHOOK_URL="$DEPLOYMENT_URL/api/webhook"
    TELEGRAM_WEBHOOK_URL="https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook?url=$WEBHOOK_URL"
    
    WEBHOOK_RESPONSE=$(curl -s "$TELEGRAM_WEBHOOK_URL")
    
    if [[ $WEBHOOK_RESPONSE == *"\"ok\":true"* ]]; then
        echo -e "${GREEN}Successfully set up Telegram webhook at $WEBHOOK_URL${NC}"
    else
        echo -e "${RED}Failed to set up Telegram webhook.${NC}"
        echo -e "${YELLOW}Response: $WEBHOOK_RESPONSE${NC}"
        echo -e "${YELLOW}Try manually setting up the webhook by visiting:${NC}"
        echo "$TELEGRAM_WEBHOOK_URL"
    fi
    
    # Update local .env file with the webhook URL
    sed -i.bak "s|WEBHOOK_URL=.*|WEBHOOK_URL=$DEPLOYMENT_URL|" "$ENV_FILE"
    rm "$ENV_FILE.bak" # Remove backup file
    
    echo -e "${GREEN}Deployment complete!${NC}"
    echo -e "${GREEN}Your Telegram bot is now running at $DEPLOYMENT_URL${NC}"
    echo -e "${BLUE}Bot username: @ddfreelsbot${NC}"
    echo -e "${BLUE}Try sending an Instagram Reel link to your bot on Telegram!${NC}"
fi 


================================================
FILE: src/__init__.py
================================================
"""
DDF Reels Bot - A Telegram bot for collecting Instagram links and saving them to Coda.
"""

__version__ = "1.0.0" 


================================================
FILE: src/bot.py
================================================
import os
import telebot
import sys
import logging
from src.utils import get_required_env, extract_instagram_links, send_to_coda
from src.monitoring import setup_logging, monitor, error_handler

# Configure logging using our enhanced logging setup
logger = setup_logging()

# Configuration with validation
try:
    # Telegram Bot Token (required)
    BOT_TOKEN = get_required_env("TELEGRAM_BOT_TOKEN")
    logger.info(f"Using Bot Token: {BOT_TOKEN[:5]}...{BOT_TOKEN[-5:]}")

    # Coda API Details (all required)
    CODA_API_KEY = get_required_env("CODA_API_KEY")
    logger.info(f"Using Coda API Key: {CODA_API_KEY[:5]}...{CODA_API_KEY[-5:]}")
    
    DOC_ID = get_required_env("CODA_DOC_ID")
    logger.info(f"Using Coda Doc ID: {DOC_ID}")
    
    TABLE_ID = get_required_env("CODA_TABLE_ID")
    logger.info(f"Using Coda Table ID: {TABLE_ID}")
except ValueError as e:
    logger.critical(f"Configuration error: {str(e)}")
    sys.exit(1)

# Non-critical configuration with sensible defaults
ENVIRONMENT = os.getenv("ENVIRONMENT", "production")
logger.info(f"Environment: {ENVIRONMENT}")

# Optional: List of authorized users (empty list means anyone can use the bot)
AUTHORIZED_USERS = os.getenv("AUTHORIZED_USERS", "").split(",") if os.getenv("AUTHORIZED_USERS") else []
logger.info(f"Authorized users: {len(AUTHORIZED_USERS)}")

# Optional: Admin user IDs who can see statistics and manage the bot
ADMIN_USERS = [int(id) for id in os.getenv("ADMIN_USERS", "").split(",") if id.strip()] if os.getenv("ADMIN_USERS") else []
logger.info(f"Admin users: {len(ADMIN_USERS)}")

# Initialize Telegram Bot
bot = telebot.TeleBot(BOT_TOKEN)
logger.info("Bot initialized successfully")

def is_authorized(user_id, username):
    """Check if the user is authorized to use the bot"""
    # If no authorized users specified, everyone is authorized
    if not AUTHORIZED_USERS:
        return True
    
    # Check if username is in the authorized list
    if username and username in AUTHORIZED_USERS:
        return True
    
    # User is not authorized
    return False

def is_admin(user_id):
    """Check if user is an admin"""
    return user_id in ADMIN_USERS

@error_handler
def process_instagram_link(link, sender_info):
    """Process an Instagram link and save it to Coda"""
    # Create coda config from environment variables
    coda_config = {
        "api_key": CODA_API_KEY,
        "doc_id": DOC_ID,
        "table_id": TABLE_ID,
        "column_name": "Link"  # Use column name for stability
    }
    
    # Send to Coda using the shared utility
    success, result = send_to_coda(link, coda_config)
    
    # Update monitoring stats
    if success:
        monitor.record_successful_submission()
    else:
        monitor.record_failed_submission()
    
    return success, result

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    """Handle /start and /help commands"""
    # Update monitoring stats
    monitor.record_message()
    
    # Extract user details
    user_id = message.from_user.id
    username = message.from_user.username
    
    # Check if user is authorized
    if not is_authorized(user_id, username):
        bot.reply_to(
            message,
            "⛔ You are not authorized to use this bot. Please contact the administrator."
        )
        return
    
    welcome_text = (
        "👋 Welcome to DDF Reels Bot!\n\n"
        "I collect Instagram Reel links and save them to the DDF Coda database.\n\n"
        "Just send me an Instagram Reel link, and I'll take care of the rest. "
        "The link should look like: https://www.instagram.com/reel/ABC123/\n\n"
        "Available commands:\n"
        "/help - Show this help message\n"
    )
    
    # Add admin commands if user is admin
    if is_admin(user_id):
        welcome_text += (
            "/stats - View bot statistics\n"
            "/version - Show bot version info\n"
        )
    
    bot.reply_to(message, welcome_text)

@bot.message_handler(commands=['stats'])
def send_stats(message):
    """Send bot statistics (admin only)"""
    # Update monitoring stats
    monitor.record_message()
    
    user_id = message.from_user.id
    
    # Check if user is admin
    if not is_admin(user_id):
        bot.reply_to(
            message,
            "⛔ This command is only available to administrators."
        )
        return
    
    # Get stats from the monitor
    stats_report = monitor.get_status_report()
    bot.reply_to(message, stats_report)

@bot.message_handler(commands=['version'])
def send_version(message):
    """Send bot version information (admin only)"""
    # Update monitoring stats
    monitor.record_message()
    
    user_id = message.from_user.id
    
    # Check if user is admin
    if not is_admin(user_id):
        bot.reply_to(
            message,
            "⛔ This command is only available to administrators."
        )
        return
    
    # Get version info
    version_info = (
        "🤖 DDF Reels Bot v1.0.0\n"
        "Environment: {}\n"
        "Built with ❤️ for DDF\n"
    ).format(ENVIRONMENT)
    
    bot.reply_to(message, version_info)

@bot.message_handler(func=lambda message: True)
def handle_message(message):
    """Handle all incoming messages and check for Instagram links"""
    # Update monitoring stats
    monitor.record_message()
    
    # Extract the message text and sender information
    text = message.text.strip()
    user_id = message.from_user.id
    username = message.from_user.username
    
    # Check if user is authorized
    if not is_authorized(user_id, username):
        bot.reply_to(
            message,
            "⛔ You are not authorized to use this bot. Please contact the administrator."
        )
        return
        
    sender = username or message.from_user.first_name or "Unknown"
    logger.info(f"Received message from {sender}: {text[:50]}...")
    
    # Extract Instagram links using regex
    instagram_links = extract_instagram_links(text)
    
    if instagram_links:
        logger.info(f"Found {len(instagram_links)} Instagram links")
        
        for link in instagram_links:
            success, result = process_instagram_link(link, sender)
            
            if success:
                bot.reply_to(
                    message, 
                    f"✅ Link saved successfully to the DDF database!"
                )
            else:
                bot.reply_to(
                    message,
                    f"❌ Failed to save link. Error: {result}. Please try again later."
                )
    else:
        logger.info("No Instagram links found in message")
        bot.reply_to(
            message,
            "❓ I didn't recognize any Instagram links in your message.\n\n"
            "Please send a valid Instagram link that starts with https://instagram.com/ or https://www.instagram.com/"
        )

def run_polling():
    """Start the bot in polling mode"""
    # First, remove any webhook
    bot.remove_webhook()
    
    logger.info("Starting bot in polling mode...")
    # Start polling
    bot.polling(none_stop=True, interval=0)

if __name__ == "__main__":
    run_polling() 


================================================
FILE: src/monitoring.py
================================================
import os
import logging
import traceback
from datetime import datetime
import json
import time

# Configure logging with rotating file handler
def setup_logging():
    """Set up logging configuration with file rotation"""
    log_directory = "logs"
    
    # Create logs directory if it doesn't exist
    if not os.path.exists(log_directory):
        os.makedirs(log_directory)
    
    # Create formatter
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    
    # Get the root logger
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
    # Clear existing handlers to avoid duplication
    if logger.handlers:
        logger.handlers.clear()
    
    # Create console handler
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    # Create file handler with current date in filename
    log_filename = os.path.join(
        log_directory, 
        f"bot_{datetime.now().strftime('%Y%m%d')}.log"
    )
    file_handler = logging.FileHandler(log_filename)
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    
    return logger

# Create a simple in-memory counter for monitoring
class BotMonitor:
    """Simple monitoring class for the bot"""
    
    def __init__(self):
        self.start_time = datetime.now()
        self.stats = {
            "messages_received": 0,
            "valid_links_received": 0,
            "invalid_links_received": 0,
            "successful_submissions": 0,
            "failed_submissions": 0,
            "errors": 0,
            "last_activity": self.start_time.isoformat()
        }
        self.logger = logging.getLogger("BotMonitor")
        self.log_path = "logs/stats.json"
    
    def record_message(self):
        """Record a received message"""
        self.stats["messages_received"] += 1
        self.update_activity()
    
    def record_valid_link(self):
        """Record a valid Instagram link"""
        self.stats["valid_links_received"] += 1
        self.update_activity()
    
    def record_invalid_link(self):
        """Record an invalid link"""
        self.stats["invalid_links_received"] += 1
        self.update_activity()
    
    def record_successful_submission(self):
        """Record a successful submission to Coda"""
        self.stats["successful_submissions"] += 1
        self.update_activity()
    
    def record_failed_submission(self):
        """Record a failed submission to Coda"""
        self.stats["failed_submissions"] += 1
        self.update_activity()
    
    def record_error(self, error, error_type="General Error"):
        """Record an error with details"""
        self.stats["errors"] += 1
        
        # Log the full traceback
        self.logger.error(f"{error_type}: {error}")
        self.logger.error(traceback.format_exc())
        
        self.update_activity()
    
    def update_activity(self):
        """Update the last activity timestamp"""
        self.stats["last_activity"] = datetime.now().isoformat()
        
        # Save stats to disk periodically
        if self.stats["messages_received"] % 10 == 0:  # Save every 10 messages
            self.save_stats()
    
    def save_stats(self):
        """Save the current stats to a JSON file"""
        try:
            # Create logs directory if it doesn't exist
            os.makedirs(os.path.dirname(self.log_path), exist_ok=True)
            
            # Add uptime to stats before saving
            uptime = (datetime.now() - self.start_time).total_seconds()
            stats_with_uptime = self.stats.copy()
            stats_with_uptime["uptime_seconds"] = uptime
            
            with open(self.log_path, 'w') as f:
                json.dump(stats_with_uptime, f, indent=2)
        except Exception as e:
            self.logger.error(f"Failed to save stats: {e}")
    
    def get_status_report(self):
        """Generate a human-readable status report"""
        uptime = datetime.now() - self.start_time
        uptime_str = f"{uptime.days}d {uptime.seconds // 3600}h {(uptime.seconds // 60) % 60}m"
        
        return (
            f"📊 Bot Status Report 📊\n\n"
            f"🕒 Uptime: {uptime_str}\n"
            f"📨 Messages: {self.stats['messages_received']}\n"
            f"✅ Valid links: {self.stats['valid_links_received']}\n"
            f"❌ Invalid links: {self.stats['invalid_links_received']}\n"
            f"📤 Successful submissions: {self.stats['successful_submissions']}\n"
            f"📥 Failed submissions: {self.stats['failed_submissions']}\n"
            f"⚠️ Errors: {self.stats['errors']}\n"
            f"🔄 Last activity: {self.format_time_ago(self.stats['last_activity'])}"
        )
    
    def format_time_ago(self, iso_time_str):
        """Format time as 'X minutes ago'"""
        try:
            activity_time = datetime.fromisoformat(iso_time_str)
            now = datetime.now()
            seconds_ago = (now - activity_time).total_seconds()
            
            if seconds_ago < 60:
                return f"{int(seconds_ago)} seconds ago"
            if seconds_ago < 3600:
                return f"{int(seconds_ago / 60)} minutes ago"
            if seconds_ago < 86400:
                return f"{int(seconds_ago / 3600)} hours ago"
            return f"{int(seconds_ago / 86400)} days ago"
        except Exception:
            return "unknown"

# Create a global instance for use in other modules
monitor = BotMonitor()

# Exception handler decorator for functions
def error_handler(func):
    """Decorator to catch and log exceptions in functions"""
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            # Record the error in the monitor
            monitor.record_error(e, f"Error in {func.__name__}")
            
            # Re-raise exceptions in development, swallow in production
            if os.getenv("ENVIRONMENT") == "development":
                raise
            
            # Return a suitable fallback value based on function context
            if func.__name__ == "send_to_coda":
                return False, f"Internal error: {str(e)}"
            return None
    return wrapper 


================================================
FILE: src/utils.py
================================================
import os
import re
import requests
import sys
from dotenv import load_dotenv

# Load environment variables from .env file if it exists
load_dotenv()

# Instagram link regex pattern (works for reels, posts, etc.)
INSTAGRAM_PATTERN = r'https?://(?:www\.)?instagram\.com/[a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+/?(?:\?[^\s]*)?'

def get_required_env(name):
    """Get a required environment variable or exit with error"""
    value = os.getenv(name)
    if not value:
        error_msg = f"ERROR: Required environment variable '{name}' is not set"
        print(error_msg, file=sys.stderr)
        raise ValueError(error_msg)
    return value

def extract_instagram_links(text):
    """Extract Instagram links from text using regex."""
    return re.findall(INSTAGRAM_PATTERN, text)

def send_to_coda(link, coda_config=None):
    """
    Send Instagram link to Coda database
    
    Args:
        link: The Instagram link
        coda_config: Optional dictionary with Coda configuration. 
                    If None, will use environment variables.
    
    Returns:
        Tuple of (success_boolean, status_code_or_error_message)
    """
    try:
        # Use provided config or get from environment
        if coda_config is None:
            api_key = get_required_env("CODA_API_KEY").strip()
            doc_id = get_required_env("CODA_DOC_ID")
            table_id = get_required_env("CODA_TABLE_ID")
            column_name = "Link"  # Use the column name instead of ID for stability
        else:
            api_key = coda_config.get("api_key")
            doc_id = coda_config.get("doc_id")
            table_id = coda_config.get("table_id")
            column_name = coda_config.get("column_name", "Link")

        url = f"https://coda.io/apis/v1/docs/{doc_id}/tables/{table_id}/rows"
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        
        # Prepare the data to be sent to Coda
        body = {
            "rows": [
                {
                    "cells": [
                        {"column": column_name, "value": link}
                    ]
                }
            ]
        }
        
        print(f"Sending link to Coda: {link}")
        response = requests.post(url, json=body, headers=headers)
        response.raise_for_status()  # Raise an exception for 4XX/5XX responses
        
        print(f"Successfully saved link to Coda. Status code: {response.status_code}")
        return True, response.status_code
    
    except requests.exceptions.RequestException as e:
        error_msg = f"Error sending to Coda: {str(e)}"
        print(error_msg)
        return False, error_msg 


================================================
FILE: tests/test_bot.py
================================================
import os
import requests
import unittest
from unittest.mock import patch, MagicMock
import bot  # Import your main bot file

class TestReelsBot(unittest.TestCase):
    """Test suite for the Instagram Reels Telegram Bot"""
    
    def setUp(self):
        """Set up test environment"""
        # Create a mock Telegram message
        self.mock_message = MagicMock()
        self.mock_message.text = "https://www.instagram.com/reel/ABC123/"
        self.mock_message.from_user.username = "test_user"
        self.mock_message.from_user.first_name = "Test"
        self.mock_message.from_user.id = 12345
        
        # Create a mock bot instance
        self.mock_bot = MagicMock()
        
    def test_instagram_link_regex(self):
        """Test Instagram link regex pattern matching"""
        # Test valid Instagram Reel links
        valid_links = [
            "https://www.instagram.com/reel/ABC123/",
            "https://instagram.com/reel/ABC123",
            "https://www.instagram.com/p/ABC123/",
            "https://instagram.com/p/ABC123/"
        ]
        
        # Test invalid links
        invalid_links = [
            "https://www.instagram.com/stories/username/12345/",
            "https://www.facebook.com/reel/12345",
            "https://example.com",
            "Not a link at all"
        ]
        
        # Check valid links
        for link in valid_links:
            matches = bot.re.findall(bot.INSTAGRAM_REEL_PATTERN, link)
            self.assertTrue(matches, f"Should match valid link: {link}")
            
        # Check invalid links
        for link in invalid_links:
            matches = bot.re.findall(bot.INSTAGRAM_REEL_PATTERN, link)
            self.assertFalse(matches, f"Should not match invalid link: {link}")
    
    @patch('bot.send_to_coda')
    @patch('bot.bot.reply_to')
    def test_handle_message_with_valid_link(self, mock_reply_to, mock_send_to_coda):
        """Test message handler with valid Instagram link"""
        # Configure the mock to return success
        mock_send_to_coda.return_value = (True, 200)
        
        # Call the message handler
        bot.handle_message(self.mock_message)
        
        # Assert that send_to_coda was called with correct parameters
        mock_send_to_coda.assert_called_once_with(
            "https://www.instagram.com/reel/ABC123/", 
            "test_user"
        )
        
        # Assert that reply_to was called with success message
        mock_reply_to.assert_called_once()
        self.assertIn("saved successfully", mock_reply_to.call_args[0][1])
    
    @patch('bot.send_to_coda')
    @patch('bot.bot.reply_to')
    def test_handle_message_with_invalid_link(self, mock_reply_to, mock_send_to_coda):
        """Test message handler with invalid link"""
        # Change the message text to an invalid link
        self.mock_message.text = "https://example.com/not-instagram"
        
        # Call the message handler
        bot.handle_message(self.mock_message)
        
        # Assert that send_to_coda was not called
        mock_send_to_coda.assert_not_called()
        
        # Assert that reply_to was called with error message
        mock_reply_to.assert_called_once()
        self.assertIn("didn't recognize", mock_reply_to.call_args[0][1])
    
    @patch('requests.post')
    def test_send_to_coda_success(self, mock_post):
        """Test sending data to Coda - success case"""
        # Configure the mock response
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_post.return_value = mock_response
        
        # Call the function
        success, result = bot.send_to_coda(
            "https://www.instagram.com/reel/ABC123/", 
            "test_user"
        )
        
        # Assert the result
        self.assertTrue(success)
        self.assertEqual(result, 200)
        
        # Assert that requests.post was called with correct parameters
        mock_post.assert_called_once()
    
    @patch('requests.post')
    def test_send_to_coda_failure(self, mock_post):
        """Test sending data to Coda - failure case"""
        # Configure the mock to raise an exception
        mock_post.side_effect = requests.exceptions.RequestException("API Error")
        
        # Call the function
        success, result = bot.send_to_coda(
            "https://www.instagram.com/reel/ABC123/", 
            "test_user"
        )
        
        # Assert the result
        self.assertFalse(success)
        self.assertIn("Error", result)

if __name__ == '__main__':
    unittest.main() 


================================================
FILE: tests/test_brightdata_api_info.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
from dotenv import load_dotenv
from pprint import pprint

def list_available_datasets():
    """List all available datasets/collectors in the Bright Data account"""
    
    # Load API key from environment variables
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return
    
    # Endpoint to list datasets (based on common API patterns)
    endpoint = "https://api.brightdata.com/datasets/v3/datasets"
    
    # Headers with API key
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    print("Fetching available datasets from Bright Data...")
    
    try:
        response = requests.get(endpoint, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Successfully retrieved datasets")
            datasets = response.json()
            print(f"Found {len(datasets)} datasets:")
            pprint(datasets)
        else:
            print(f"❌ Error retrieving datasets: {response.text}")
            
            # Let's try some alternative endpoints
            alternative_endpoints = [
                "https://api.brightdata.com/datasets/v3/collectors",
                "https://api.brightdata.com/datasets/v3/list",
                "https://api.brightdata.com/datasets/v3/scrapers"
            ]
            
            print("\nTrying alternative endpoints...")
            
            for alt_endpoint in alternative_endpoints:
                print(f"\nTrying: {alt_endpoint}")
                try:
                    alt_response = requests.get(alt_endpoint, headers=headers)
                    print(f"Response status code: {alt_response.status_code}")
                    print(f"Response body: {alt_response.text[:500]}...")
                except Exception as e:
                    print(f"Error with endpoint {alt_endpoint}: {str(e)}")
    
    except Exception as e:
        print(f"❌ Error making request: {str(e)}")
        return

def test_instagram_endpoints():
    """Test various Instagram-related endpoints that might be available"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return
    
    # Common Instagram-related dataset IDs to try
    dataset_ids = [
        "gd_lyclm20il4r5helnj",  # The one we've been using
        "gd_instagram_reels",
        "gd_instagram",
        "instagram_reels",
        "instagram"
    ]
    
    # Headers with API key
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    test_url = "https://www.instagram.com/share/reel/_kZE3ysBY"
    
    print("\nTesting various Instagram dataset IDs...")
    
    for dataset_id in dataset_ids:
        print(f"\nTesting dataset ID: {dataset_id}")
        
        # Build payload
        payload = {
            "dataset_id": dataset_id,
            "inputs": [{"url": test_url}]
        }
        
        try:
            response = requests.post(
                "https://api.brightdata.com/datasets/v3/trigger", 
                json=payload, 
                headers=headers
            )
            
            print(f"Response status code: {response.status_code}")
            print(f"Response body: {response.text}")
        except Exception as e:
            print(f"Error testing dataset ID {dataset_id}: {str(e)}")

def main():
    """Main function"""
    print("=== Bright Data API Information Tool ===")
    print("This tool will help identify available datasets/collectors\n")
    
    # List available datasets
    list_available_datasets()
    
    # Test Instagram-related endpoints
    test_instagram_endpoints()

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_dashboard.py
================================================
#!/usr/bin/env python3

print("=== Bright Data Dashboard Access Information ===")
print("Based on our testing, we've successfully triggered data collection with Bright Data API.")
print("However, we're unable to retrieve the actual data through the API.")
print("The next step is to check the Bright Data dashboard directly.")

print("\n=== Dashboard URLs to Check ===")
print("1. Main Dashboard:")
print("   https://brightdata.com/cp/datasets")
print("\n2. Dataset Details:")
print("   https://brightdata.com/cp/datasets/gd_lyclm20il4r5helnj")
print("\n3. Snapshot Details (might work if configured properly):")
print("   https://brightdata.com/cp/datasets/gd_lyclm20il4r5helnj/snapshots/s_m8rgr9s92ejjxjf7o7")
print("\n4. Specific Scraper Overview:")
print("   https://brightdata.com/cp/scrapers/api/gd_lyclm20il4r5helnj/pdp/overview")

print("\n=== Access Check Information ===")
print("When accessing the dashboard, check for:")
print("1. Whether the dataset and snapshots are visible")
print("2. If there's a download button for the data")
print("3. If there's documentation specific to your account for how to access the data")
print("4. The exact API endpoints documented for your account")

print("\n=== Summary of Our Progress ===")
print("✅ Successfully connected to Bright Data API")
print("✅ Successfully triggered data collection with snapshot ID: s_m8rgr9s92ejjxjf7o7")
print("✅ Confirmed snapshot status is 'ready' with dataset size: 1")
print("❌ Unable to retrieve the actual data through standard API endpoints")

print("\n=== Next Steps ===")
print("After checking the dashboard:")
print("1. Contact Bright Data support with specific information about your account access and limitations")
print("2. Ask for the exact endpoints needed to retrieve data for your account type")
print("3. Consider requesting a sample code for data retrieval specific to your subscription")
print("4. If direct API access is not available, ask about alternative methods to retrieve the data") 


================================================
FILE: tests/test_brightdata_data.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
import time
from dotenv import load_dotenv
from pprint import pprint

def retrieve_data_for_snapshot(snapshot_id, dataset_id):
    """Attempt to retrieve the actual data for a snapshot"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # Try multiple endpoint patterns for data retrieval
    endpoints = [
        # Try dataset data endpoint
        f"https://api.brightdata.com/datasets/v3/data/{dataset_id}",
        # Try dataset records endpoint
        f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/records",
        # Try dataset elements endpoint
        f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/elements",
        # Try dataset entries endpoint
        f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/entries",
        # Try dataset results endpoint
        f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/results",
        # Try data endpoint with snapshot parameter
        f"https://api.brightdata.com/datasets/v3/data?snapshot_id={snapshot_id}",
        # Try direct result download
        f"https://api.brightdata.com/datasets/v3/download/{dataset_id}",
        # Try download with snapshot parameter
        f"https://api.brightdata.com/datasets/v3/download?snapshot_id={snapshot_id}",
        # Try dataset unload endpoint
        f"https://api.brightdata.com/datasets/v3/unload/{dataset_id}"
    ]
    
    print(f"Attempting to retrieve data for snapshot ID: {snapshot_id}")
    print(f"Dataset ID: {dataset_id}")
    
    successful_responses = []
    
    for i, endpoint in enumerate(endpoints, 1):
        try:
            print(f"\n=== Testing Endpoint {i}: {endpoint} ===")
            response = requests.get(endpoint, headers=headers)
            
            print(f"Response status code: {response.status_code}")
            
            # Only print a truncated version of potentially large responses
            if response.status_code == 200 and len(response.text) > 500:
                print(f"Response body (truncated): {response.text[:500]}...")
            else:
                print(f"Response body: {response.text}")
            
            if response.status_code == 200:
                print("✅ Successful response!")
                try:
                    data = response.json() if response.text else {}
                    successful_responses.append({
                        "endpoint": endpoint,
                        "data": data
                    })
                except json.JSONDecodeError:
                    print("Response is not JSON. Might be raw data or a file.")
                    successful_responses.append({
                        "endpoint": endpoint,
                        "data": "Raw data (not JSON)"
                    })
            
        except Exception as e:
            print(f"❌ Error with endpoint {endpoint}: {str(e)}")
    
    # If no success with GET requests, try POST requests for some endpoints
    if not successful_responses:
        print("\n=== Trying POST requests ===")
        
        post_endpoints = [
            # Try to query the dataset
            f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/query",
            # Try to get data from the dataset
            f"https://api.brightdata.com/datasets/v3/data",
            # Try to export the dataset
            f"https://api.brightdata.com/datasets/v3/export"
        ]
        
        for i, endpoint in enumerate(post_endpoints, 1):
            try:
                print(f"\n=== Testing POST Endpoint {i}: {endpoint} ===")
                
                # Different payload for each endpoint
                if "query" in endpoint:
                    payload = {
                        "query": {},
                        "limit": 10
                    }
                elif "data" in endpoint:
                    payload = {
                        "dataset_id": dataset_id,
                        "snapshot_id": snapshot_id
                    }
                else:  # export
                    payload = {
                        "dataset_id": dataset_id,
                        "format": "json"
                    }
                
                print(f"Using payload: {json.dumps(payload)}")
                
                response = requests.post(endpoint, json=payload, headers=headers)
                
                print(f"Response status code: {response.status_code}")
                
                # Only print a truncated version of potentially large responses
                if response.status_code == 200 and len(response.text) > 500:
                    print(f"Response body (truncated): {response.text[:500]}...")
                else:
                    print(f"Response body: {response.text}")
                
                if response.status_code == 200:
                    print("✅ Successful response!")
                    try:
                        data = response.json() if response.text else {}
                        successful_responses.append({
                            "endpoint": endpoint,
                            "method": "POST",
                            "data": data
                        })
                    except json.JSONDecodeError:
                        print("Response is not JSON. Might be raw data or a file.")
                        successful_responses.append({
                            "endpoint": endpoint,
                            "method": "POST",
                            "data": "Raw data (not JSON)"
                        })
                
            except Exception as e:
                print(f"❌ Error with POST endpoint {endpoint}: {str(e)}")
    
    return successful_responses

def main():
    """Main function to retrieve data from a Bright Data snapshot"""
    print("=== Bright Data Data Retrieval ===")
    
    # Use the snapshot ID and dataset ID from our previous successful responses
    SNAPSHOT_ID = "s_m8rgr9s92ejjxjf7o7"
    DATASET_ID = "gd_lyclm20il4r5helnj"
    
    # Attempt to retrieve the data
    results = retrieve_data_for_snapshot(SNAPSHOT_ID, DATASET_ID)
    
    if results:
        print("\n=== Successful Data Retrieval Summary ===")
        for i, result in enumerate(results, 1):
            print(f"\n--- Successful Response {i} ---")
            print(f"Endpoint: {result['endpoint']}")
            if 'method' in result:
                print(f"Method: {result['method']}")
            
            # Handle different data types
            if isinstance(result['data'], str):
                print(f"Data: {result['data']}")
            else:
                print("Data:")
                pprint(result['data'])
    else:
        print("\n❌ Failed to retrieve data through any endpoint")
        print("\n=== Suggested Next Steps ===")
        print("1. Contact Bright Data support for specific API documentation for Instagram data retrieval")
        print("2. Check if there's a web interface where you can view and download the results")
        print("3. Verify if the subscription allows for API data retrieval")
        print("4. Consider using the Bright Data command-line tools if available")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_direct.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
from dotenv import load_dotenv
from pprint import pprint

def test_brightdata_direct(reel_url):
    """Test Bright Data API using the exact URL structure from the citation"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    # Using the exact dataset_id from the citation URL
    dataset_id = "gd_lyclm20il4r5helnj"
    pdp_id = "hl_f96c6424"  # This was in the citation URL
    
    # Try multiple endpoint structures
    endpoints = [
        # From the citation URL structure, this seems to be a PDP-type endpoint
        f"https://api.brightdata.com/datasets/v3/trigger?dataset_id={dataset_id}&id={pdp_id}",
        # General trigger with direct ID reference
        f"https://api.brightdata.com/datasets/v3/trigger/gd_lyclm20il4r5helnj/pdp",
        # Standard approach in payload
        "https://api.brightdata.com/datasets/v3/trigger"
    ]
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    print(f"Testing Bright Data API with direct URL structure for: {reel_url}")
    print(f"Dataset ID: {dataset_id}")
    print(f"PDP ID: {pdp_id}")
    
    for i, endpoint in enumerate(endpoints, 1):
        print(f"\n=== Testing Endpoint {i}: {endpoint} ===")
        
        # Prepare payload - adjust based on endpoint
        if "?" in endpoint:
            # If endpoint already has query parameters, send URL only
            payload = [{"url": reel_url}]
        else:
            # Standard payload with dataset_id
            payload = {
                "dataset_id": dataset_id,
                "inputs": [{"url": reel_url}]
            }
        
        print(f"Using payload: {json.dumps(payload, indent=2)}")
        
        try:
            response = requests.post(endpoint, json=payload, headers=headers)
            
            print(f"Response status code: {response.status_code}")
            print(f"Response body: {response.text}")
            
            if response.status_code == 200:
                print("✅ Successfully sent request to Bright Data API")
                return response.json()
        except Exception as e:
            print(f"❌ Error with endpoint {endpoint}: {str(e)}")
    
    # If none of the above worked, try the PDP API directly
    print("\n=== Testing PDP Direct API ===")
    pdp_endpoint = "https://api.brightdata.com/datasets/v3/pdp"
    pdp_payload = {
        "url": reel_url
    }
    
    try:
        response = requests.post(pdp_endpoint, json=pdp_payload, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text}")
        
        if response.status_code == 200:
            print("✅ Successfully sent request to Bright Data PDP API")
            return response.json()
    except Exception as e:
        print(f"❌ Error with PDP endpoint: {str(e)}")
    
    return None

def main():
    """Main function to test direct Bright Data API connection"""
    print("=== Testing Direct Bright Data API Connection ===")
    
    # Test Instagram Reel URL
    TEST_REEL_URL = "https://www.instagram.com/reel/C02GCxFoJnK/"
    
    print(f"Testing with URL: {TEST_REEL_URL}")
    
    # Try the direct API connection
    result = test_brightdata_direct(TEST_REEL_URL)
    
    if result:
        print("\n=== Results from Bright Data API ===")
        pprint(result)
    else:
        print("\n❌ Failed to get results from any Bright Data API endpoint")
        
        # Suggest next steps
        print("\n=== Suggested Next Steps ===")
        print("1. Contact Bright Data support to verify your account's access to the Instagram Reels scraper")
        print("2. Check if the dataset ID gd_lyclm20il4r5helnj is correctly associated with your account")
        print("3. Confirm if you need to purchase a specific subscription for the Instagram Reels scraper")
        print("4. Request the exact API endpoint and parameters for your account configuration")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_integration.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
import time
from dotenv import load_dotenv
from pprint import pprint

def test_brightdata_api(reel_url):
    """Test the Bright Data API with a single Instagram Reel URL"""
    
    # Load API key from environment variables
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
        
    # API endpoint for Bright Data - using the trigger endpoint per documentation
    endpoint = "https://api.brightdata.com/datasets/v3/trigger"
    
    # Prepare headers and payload
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # According to the updated documentation, dataset_id goes in the JSON payload
    dataset_id = "gd_lyclm20il4r5helnj"  # Instagram Reels dataset ID
    
    # Build the payload according to the documentation
    payload = {
        "dataset_id": dataset_id,
        "inputs": [{"url": reel_url}]
    }
    
    print(f"Sending request to Bright Data API for URL: {reel_url}")
    print(f"Using payload: {json.dumps(payload, indent=2)}")
    
    try:
        response = requests.post(endpoint, json=payload, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text}")
        
        if response.status_code == 200:
            print("✅ Successfully sent request to Bright Data API")
            result = response.json()
            return result
        else:
            print(f"❌ Error response from Bright Data API: {response.text}")
            return None
            
    except Exception as e:
        print(f"❌ Error making request to Bright Data API: {str(e)}")
        return None

def get_scraping_results(snapshot_id):
    """Get the results of a scraping job using the snapshot ID"""
    
    # Load API key from environment variables
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
        
    # API endpoint to get results - CORRECTED from documentation
    # Note: it's "snapshot" (singular), not "snapshots"
    endpoint = f"https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}"
    
    # Add query parameters for format and compression
    query_params = {
        "format": "json",
        "compress": "false"
    }
    
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    print(f"Fetching results for snapshot ID: {snapshot_id}")
    
    try:
        response = requests.get(endpoint, params=query_params, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body preview: {response.text[:200]}...")
        
        if response.status_code == 200:
            print("✅ Successfully retrieved results")
            result = response.json()
            return result
        else:
            print(f"❌ Error retrieving results: {response.text}")
            return None
            
    except Exception as e:
        print(f"❌ Error making request: {str(e)}")
        return None

def update_coda_with_results(reel_url, results):
    """Update the Coda database with the results from Bright Data"""
    
    # Load environment variables
    CODA_API_KEY = os.getenv("CODA_API_KEY")
    DOC_ID = os.getenv("CODA_DOC_ID")
    TABLE_ID = os.getenv("CODA_TABLE_ID")
    
    if not all([CODA_API_KEY, DOC_ID, TABLE_ID]):
        print("❌ Error: Missing Coda environment variables")
        return False
    
    # First, find the row with the matching URL
    search_url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}"
    }
    
    try:
        # Get all rows to find the one with our URL
        response = requests.get(search_url, headers=headers)
        
        if response.status_code != 200:
            print(f"❌ Error searching for row: {response.text}")
            return False
            
        rows = response.json().get("items", [])
        target_row_id = None
        
        for row in rows:
            cells = row.get("values", {})
            # Iterate through cells to find the one with our URL
            for col_id, value in cells.items():
                if value == reel_url:
                    target_row_id = row.get("id")
                    break
            
            if target_row_id:
                break
                
        if not target_row_id:
            print(f"❌ Error: Could not find row with URL: {reel_url}")
            return False
            
        # Now update the row with the scraped data
        # The structure of the results depends on which endpoint we used
        if not results:
            print("❌ Error: No results data to update")
            return False
            
        # Try to determine where the actual reel data is in the response
        # According to documentation, results should be in the "results" array
        if "results" in results:
            if not results["results"]:
                print("❌ Error: Empty results array")
                return False
            reel_data = results["results"][0]  # Get the first item from results
        elif "items" in results:
            if not results["items"]:
                print("❌ Error: Empty items array")
                return False
            reel_data = results["items"][0]  # Get the first item from results
        else:
            print("❌ Error: Unexpected results format, could not find reel data")
            print(f"Results keys: {results.keys()}")
            return False
        
        # Map Bright Data fields to Coda columns
        update_url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows/{target_row_id}"
        update_headers = {
            "Authorization": f"Bearer {CODA_API_KEY}",
            "Content-Type": "application/json"
        }
        
        # Prepare update payload - mapping Bright Data fields to Coda columns
        # Field names might vary depending on the API response format
        update_payload = {
            "row": {
                "cells": [
                    {"column": "Account", "value": reel_data.get("username", reel_data.get("user_posted", ""))},
                    {"column": "Name", "value": reel_data.get("description", "")},
                    {"column": "Likes", "value": reel_data.get("likes", 0)},
                    {"column": "Comments", "value": reel_data.get("comments", reel_data.get("num_comments", 0))},
                    {"column": "Views", "value": reel_data.get("views", 0)}
                ]
            }
        }
        
        print(f"Updating Coda row with data: {json.dumps(update_payload, indent=2)}")
        
        update_response = requests.put(update_url, json=update_payload, headers=update_headers)
        
        if update_response.status_code == 200:
            print("✅ Successfully updated Coda row with scraped data")
            return True
        else:
            print(f"❌ Error updating row: {update_response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error interacting with Coda API: {str(e)}")
        return False

def add_url_to_coda(reel_url):
    """Add a new URL to the Coda database"""
    
    # Load environment variables
    CODA_API_KEY = os.getenv("CODA_API_KEY")
    DOC_ID = os.getenv("CODA_DOC_ID")
    TABLE_ID = os.getenv("CODA_TABLE_ID")
    
    if not all([CODA_API_KEY, DOC_ID, TABLE_ID]):
        print("❌ Error: Missing Coda environment variables")
        return False
    
    # Prepare the API request
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # Prepare the data to be sent to Coda
    body = {
        "rows": [
            {
                "cells": [
                    {"column": "Link", "value": reel_url}
                ]
            }
        ]
    }
    
    print(f"Adding URL to Coda: {reel_url}")
    
    try:
        response = requests.post(url, json=body, headers=headers)
        
        if response.status_code == 202:
            print("✅ Successfully added URL to Coda")
            return True
        else:
            print(f"❌ Error adding URL to Coda: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error making request to Coda API: {str(e)}")
        return False

def main():
    """Main function to run the full integration test"""
    # Load environment variables
    load_dotenv()
    
    # Test Instagram Reel URL
    TEST_REEL_URL = "https://www.instagram.com/share/reel/_kZE3ysBY"
    
    print("=== Starting Bright Data Integration Test ===")
    print(f"Testing with URL: {TEST_REEL_URL}")
    
    # Skip step 1 (adding to Coda) as we assume the URL is already in Coda
    
    # Step 2: Send URL to Bright Data API
    print("\n=== Step 2: Sending URL to Bright Data API ===")
    result = test_brightdata_api(TEST_REEL_URL)
    
    if not result:
        print("Failed to get response from Bright Data API. Exiting test.")
        return
    
    # In the updated API, we need to wait for the snapshot to complete
    snapshot_id = result.get("snapshot_id")
    
    if not snapshot_id:
        print("❌ Error: No snapshot_id in response. Exiting test.")
        return
    
    print(f"\n=== Step 3: Waiting for scraping to complete for snapshot {snapshot_id} ===")
    print("Note: In a production system, this would be handled by a webhook callback")
    
    # Wait for a moment to allow the scraping to begin
    wait_time = 10
    print(f"Waiting {wait_time} seconds before checking results...")
    time.sleep(wait_time)
    
    # Step 4: Get the results from Bright Data
    print("\n=== Step 4: Getting results from Bright Data ===")
    scraping_results = get_scraping_results(snapshot_id)
    
    if not scraping_results:
        print("Failed to get scraping results. Exiting test.")
        return
    
    print("\nScraping Results:")
    pprint(scraping_results)
    
    # Step 5: Update Coda with the scraped data
    print("\n=== Step 5: Updating Coda with scraped data ===")
    if update_coda_with_results(TEST_REEL_URL, scraping_results):
        print("\n✅ Full integration test completed successfully!")
    else:
        print("\n❌ Failed to update Coda with scraped data.")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_results.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
import time
from dotenv import load_dotenv
from pprint import pprint

def check_snapshot_status(snapshot_id):
    """Check the status of a snapshot using different endpoint approaches"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    dataset_id = "gd_lyclm20il4r5helnj"
    pdp_id = "hl_f96c6424"
    
    # Try multiple endpoints for status checking
    endpoints = [
        f"https://api.brightdata.com/datasets/v3/jobs/{snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/results/{snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/results?id={snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/snapshots/{snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/trigger/jobs/{snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/snapshots/{snapshot_id}",
        f"https://api.brightdata.com/datasets/v3/pdp/snapshots/{snapshot_id}"
    ]
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    successful_responses = []
    
    print(f"Checking status for snapshot ID: {snapshot_id}")
    
    for i, endpoint in enumerate(endpoints, 1):
        try:
            print(f"\n=== Testing Endpoint {i}: {endpoint} ===")
            response = requests.get(endpoint, headers=headers)
            
            print(f"Response status code: {response.status_code}")
            print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
            
            if response.status_code == 200:
                print("✅ Successful response!")
                successful_responses.append({
                    "endpoint": endpoint,
                    "response": response.json() if response.text else {}
                })
            
        except Exception as e:
            print(f"❌ Error with endpoint {endpoint}: {str(e)}")
    
    return successful_responses

def try_alternative_approaches(snapshot_id):
    """Try alternative approaches to get data from the Bright Data API"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    dataset_id = "gd_lyclm20il4r5helnj"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # 1. Try to check dataset information
    print("\n=== Checking Dataset Information ===")
    dataset_endpoint = f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}"
    
    try:
        response = requests.get(dataset_endpoint, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
    except Exception as e:
        print(f"❌ Error checking dataset: {str(e)}")
    
    # 2. Try to list all snapshots
    print("\n=== Listing All Snapshots ===")
    snapshots_endpoint = "https://api.brightdata.com/datasets/v3/snapshots"
    
    try:
        response = requests.get(snapshots_endpoint, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
    except Exception as e:
        print(f"❌ Error listing snapshots: {str(e)}")
    
    # 3. Try to check job status with a POST request
    print("\n=== Checking Job Status with POST ===")
    job_endpoint = "https://api.brightdata.com/datasets/v3/jobs/status"
    
    try:
        job_payload = {
            "job_id": snapshot_id
        }
        response = requests.post(job_endpoint, json=job_payload, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
    except Exception as e:
        print(f"❌ Error checking job status: {str(e)}")
    
    # 4. Try to query the dataset directly
    print("\n=== Directly Querying Dataset ===")
    query_endpoint = f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/query"
    
    try:
        query_payload = {
            "query": {},
            "limit": 1
        }
        response = requests.post(query_endpoint, json=query_payload, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
    except Exception as e:
        print(f"❌ Error querying dataset: {str(e)}")
    
    # 5. Try to get dataset schema
    print("\n=== Getting Dataset Schema ===")
    schema_endpoint = f"https://api.brightdata.com/datasets/v3/datasets/{dataset_id}/schema"
    
    try:
        response = requests.get(schema_endpoint, headers=headers)
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text[:200]}..." if len(response.text) > 200 else f"Response body: {response.text}")
    except Exception as e:
        print(f"❌ Error getting schema: {str(e)}")

def main():
    """Main function to try multiple approaches to retrieve data from Bright Data API"""
    print("=== Comprehensive Bright Data API Results Check ===")
    
    # Use the snapshot ID from our previous successful response
    SNAPSHOT_ID = "s_m8rgr9s92ejjxjf7o7"
    
    print(f"Testing with snapshot ID: {SNAPSHOT_ID}")
    
    # Check snapshot status with different endpoints
    successful_responses = check_snapshot_status(SNAPSHOT_ID)
    
    if successful_responses:
        print("\n=== Successful Responses Summary ===")
        for i, result in enumerate(successful_responses, 1):
            print(f"\nSuccessful Response {i}:")
            print(f"Endpoint: {result['endpoint']}")
            print("Data:")
            pprint(result['response'])
    else:
        print("\n❌ No successful responses from any endpoints")
        print("Trying alternative approaches...")
        try_alternative_approaches(SNAPSHOT_ID)
        
        print("\n=== Suggested Next Steps ===")
        print("1. Contact Bright Data support to get the correct API endpoints for your account")
        print("2. Request the exact API documentation for the Instagram Reels scraper")
        print("3. Check if there's a Bright Data web interface to view results")
        print("4. Verify if there's a different dataset ID you should be using")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_retrieve.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
import time
from dotenv import load_dotenv
from pprint import pprint

def retrieve_snapshot(snapshot_id):
    """Retrieve a snapshot from Bright Data API using its ID"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    # Endpoint for retrieving snapshots
    endpoint = f"https://api.brightdata.com/datasets/v3/snapshots/{snapshot_id}"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    print(f"Retrieving snapshot with ID: {snapshot_id}")
    
    # Try to retrieve the snapshot with retries
    max_retries = 10
    retry_delay = 3  # seconds
    
    for attempt in range(1, max_retries + 1):
        try:
            print(f"\nAttempt {attempt}/{max_retries} to retrieve snapshot")
            response = requests.get(endpoint, headers=headers)
            
            print(f"Response status code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                status = data.get("status")
                print(f"Snapshot status: {status}")
                
                # If the snapshot is ready, return the data
                if status == "success":
                    print("✅ Successfully retrieved snapshot data")
                    return data
                
                # If the snapshot is still processing, wait and retry
                elif status in ["pending", "processing", "in_progress"]:
                    print(f"Snapshot is still {status}, waiting before retry...")
                    time.sleep(retry_delay)
                    continue
                
                # If the snapshot failed, return the error
                else:
                    print(f"❌ Snapshot processing failed with status: {status}")
                    return data
            
            else:
                print(f"Response body: {response.text}")
                
                # If we're getting a 404 or other error, it might not be ready yet
                if response.status_code == 404:
                    print(f"Snapshot not found, might still be processing. Waiting before retry...")
                    time.sleep(retry_delay)
                    continue
                
                print(f"❌ Failed to retrieve snapshot: HTTP {response.status_code}")
                return None
                
        except Exception as e:
            print(f"❌ Error retrieving snapshot: {str(e)}")
            time.sleep(retry_delay)
    
    print("❌ Max retries reached. Could not retrieve the snapshot.")
    return None

def main():
    """Main function to retrieve a snapshot from Bright Data API"""
    print("=== Retrieving Bright Data API Snapshot ===")
    
    # Use the snapshot ID from our previous successful response
    # You can replace this with any snapshot ID you want to retrieve
    SNAPSHOT_ID = "s_m8rgr9s92ejjxjf7o7"
    
    print(f"Attempting to retrieve snapshot ID: {SNAPSHOT_ID}")
    
    # Retrieve the snapshot
    result = retrieve_snapshot(SNAPSHOT_ID)
    
    if result:
        print("\n=== Snapshot Data ===")
        pprint(result)
        
        # If there's output data, show a sample
        output_data = result.get("output")
        if output_data:
            print("\n=== Sample Output Data ===")
            if isinstance(output_data, list) and len(output_data) > 0:
                pprint(output_data[0])
            else:
                pprint(output_data)
    else:
        print("\n❌ Failed to retrieve snapshot data")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_scraper.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
from dotenv import load_dotenv
from pprint import pprint

def test_brightdata_scraper_api(reel_url):
    """Test the Bright Data API using the /scrape endpoint with the instagram_reels scraper"""
    
    # Load API key from environment variables
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
        
    # API endpoint for Bright Data - using the scrape endpoint from original documentation
    endpoint = "https://api.brightdata.com/datasets/v3/scrape"
    
    # Prepare headers and payload
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # Using the format from the original documentation
    payload = {
        "scraper": "instagram_reels",
        "inputs": [{"url": reel_url}]
    }
    
    print(f"Sending request to Bright Data API for URL: {reel_url}")
    print(f"Using payload: {json.dumps(payload, indent=2)}")
    
    try:
        response = requests.post(endpoint, json=payload, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        print(f"Response body: {response.text}")
        
        if response.status_code == 200:
            print("✅ Successfully sent request to Bright Data API")
            return response.json()
        else:
            print(f"❌ Error response from Bright Data API: {response.text}")
            
            # If we got a 404, let's try some variations of the scraper name
            if response.status_code == 404:
                print("\nTrying alternative scraper names...")
                scrapers = [
                    "instagram_reel",
                    "ig_reels",
                    "instagram",
                    "instagram_post"
                ]
                
                for scraper in scrapers:
                    print(f"\nTrying scraper: {scraper}")
                    alt_payload = {
                        "scraper": scraper,
                        "inputs": [{"url": reel_url}]
                    }
                    
                    try:
                        alt_response = requests.post(endpoint, json=alt_payload, headers=headers)
                        print(f"Response status code: {alt_response.status_code}")
                        print(f"Response body: {alt_response.text}")
                        
                        if alt_response.status_code == 200:
                            print(f"✅ Success with scraper: {scraper}")
                            return alt_response.json()
                    except Exception as e:
                        print(f"Error with scraper {scraper}: {str(e)}")
            
            return None
            
    except Exception as e:
        print(f"❌ Error making request to Bright Data API: {str(e)}")
        return None

def main():
    """Main function to test the Bright Data scraper API"""
    print("=== Testing Bright Data /scrape Endpoint ===")
    
    # Test Instagram Reel URL - using a sample URL
    TEST_REEL_URL = "https://www.instagram.com/reel/example"
    
    print(f"Testing with URL: {TEST_REEL_URL}")
    
    # Try the API
    result = test_brightdata_scraper_api(TEST_REEL_URL)
    
    if result:
        print("\n=== Results from Bright Data API ===")
        pprint(result)
    else:
        print("\n❌ Failed to get results from Bright Data API")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_simple.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
from dotenv import load_dotenv

def main():
    """A simplified test of the Bright Data Instagram scraper with minimal parameters"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return
    
    # Try different URLs - the link format might be the issue
    test_urls = [
        # Standard Instagram reel URL format
        "https://www.instagram.com/reel/C02GCxFoJnK/",
        
        # Alternative formats
        "https://www.instagram.com/p/C02GCxFoJnK/",
        "https://www.instagram.com/share/reel/_kZE3ysBY"
    ]
    
    # Try both API endpoints
    endpoints = [
        "https://api.brightdata.com/datasets/v3/trigger",
        "https://api.brightdata.com/datasets/v3/scrape"
    ]
    
    # Headers
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    print("=== Testing Bright Data API with Simplified Parameters ===")
    
    # Try each combination
    for endpoint in endpoints:
        print(f"\n=== Testing endpoint: {endpoint} ===")
        
        for test_url in test_urls:
            print(f"\nTesting URL: {test_url}")
            
            # Try with dataset_id parameter (for /trigger endpoint)
            if "trigger" in endpoint:
                payload = {
                    "dataset_id": "gd_lyclm20il4r5helnj",
                    "inputs": [{"url": test_url}]
                }
                
                print("Using payload with dataset_id")
                print(json.dumps(payload, indent=2))
                
                try:
                    response = requests.post(endpoint, json=payload, headers=headers)
                    print(f"Response status code: {response.status_code}")
                    print(f"Response body: {response.text}")
                except Exception as e:
                    print(f"Error: {str(e)}")
            
            # Try with scraper parameter (for /scrape endpoint)
            if "scrape" in endpoint:
                payload = {
                    "scraper": "instagram_reels",
                    "inputs": [{"url": test_url}]
                }
                
                print("Using payload with scraper")
                print(json.dumps(payload, indent=2))
                
                try:
                    response = requests.post(endpoint, json=payload, headers=headers)
                    print(f"Response status code: {response.status_code}")
                    print(f"Response body: {response.text}")
                except Exception as e:
                    print(f"Error: {str(e)}")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_brightdata_snapshots.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
import time
from dotenv import load_dotenv
from pprint import pprint

def get_snapshots_list():
    """Get a list of all snapshots from the Bright Data API"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    # Endpoint for listing snapshots
    endpoint = "https://api.brightdata.com/datasets/v3/snapshots"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    print("Fetching list of snapshots...")
    
    try:
        response = requests.get(endpoint, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Successfully retrieved snapshots list")
            return response.json()
        else:
            print(f"Response body: {response.text}")
            print(f"❌ Failed to retrieve snapshots: HTTP {response.status_code}")
            return None
            
    except Exception as e:
        print(f"❌ Error retrieving snapshots list: {str(e)}")
        return None

def check_snapshot_data(snapshot_id):
    """Check specific snapshot data and availability"""
    
    # Load API key
    load_dotenv()
    api_key = os.getenv("BRIGHT_DATA_API_KEY")
    
    if not api_key:
        print("❌ Error: BRIGHT_DATA_API_KEY not found in environment variables")
        return None
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # Try to get snapshot data directly
    print(f"Checking snapshot data for ID: {snapshot_id}")
    
    # Since the snapshots endpoint worked previously, let's try to query this endpoint
    # with the ?id parameter
    endpoint = f"https://api.brightdata.com/datasets/v3/snapshots?id={snapshot_id}"
    
    try:
        response = requests.get(endpoint, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Successfully retrieved snapshot data")
            return response.json()
        else:
            print(f"Response body: {response.text}")
            print(f"❌ Failed to retrieve snapshot data: HTTP {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error retrieving snapshot data: {str(e)}")
    
    # Try to get snapshot data through the results endpoint
    print("\nTrying results endpoint...")
    endpoint = f"https://api.brightdata.com/datasets/v3/results?snapshot_id={snapshot_id}"
    
    try:
        response = requests.get(endpoint, headers=headers)
        
        print(f"Response status code: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Successfully retrieved results data")
            return response.json()
        else:
            print(f"Response body: {response.text}")
            print(f"❌ Failed to retrieve results data: HTTP {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error retrieving results data: {str(e)}")
    
    return None

def extract_data_from_snapshot(snapshot):
    """Extract and display relevant data from a snapshot object"""
    
    print("\n=== Snapshot Details ===")
    print(f"Snapshot ID: {snapshot.get('id')}")
    print(f"Dataset ID: {snapshot.get('dataset_id')}")
    print(f"Status: {snapshot.get('status')}")
    print(f"Dataset Size: {snapshot.get('dataset_size')}")
    print(f"Created: {snapshot.get('created')}")
    
    # Extract additional data if available
    for key, value in snapshot.items():
        if key not in ['id', 'dataset_id', 'status', 'dataset_size', 'created']:
            print(f"{key}: {value}")

def main():
    """Main function to retrieve and process snapshots from Bright Data API"""
    print("=== Bright Data Snapshots Analysis ===")
    
    # Get the list of snapshots
    snapshots = get_snapshots_list()
    
    if not snapshots:
        print("❌ Failed to retrieve snapshots list")
        return
    
    print(f"\nFound {len(snapshots)} snapshots:")
    
    # Print a simplified summary of all snapshots
    for i, snapshot in enumerate(snapshots, 1):
        print(f"\n--- Snapshot {i} ---")
        extract_data_from_snapshot(snapshot)
    
    # Check specific snapshot details for our target
    print("\n=== Checking Specific Snapshot ===")
    
    # Use the snapshot ID from our previous successful response
    TARGET_SNAPSHOT_ID = "s_m8rgr9s92ejjxjf7o7"
    
    # Find our target snapshot in the list
    target_snapshot = None
    for snapshot in snapshots:
        if snapshot.get('id') == TARGET_SNAPSHOT_ID:
            target_snapshot = snapshot
            break
    
    if target_snapshot:
        print(f"Found target snapshot with ID: {TARGET_SNAPSHOT_ID}")
        extract_data_from_snapshot(target_snapshot)
        
        # Try to get additional data for this snapshot
        additional_data = check_snapshot_data(TARGET_SNAPSHOT_ID)
        
        if additional_data:
            print("\n=== Additional Snapshot Data ===")
            pprint(additional_data)
    else:
        print(f"❌ Target snapshot with ID {TARGET_SNAPSHOT_ID} not found in the list")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_coda_add.py
================================================
#!/usr/bin/env python3

import os
import requests
from dotenv import load_dotenv

def main():
    """Test adding a link directly to the Coda database"""
    # Load environment variables
    load_dotenv()
    
    # Coda API Details
    CODA_API_KEY = os.getenv("CODA_API_KEY", "3e92f721-91d1-485e-aab9-b7d50e4fa4da")
    DOC_ID = os.getenv("CODA_DOC_ID", "NYzN0H9At4")
    TABLE_ID = os.getenv("CODA_TABLE_ID", "grid-Pyccn7MrAA")
    LINK_COLUMN_ID = os.getenv("CODA_LINK_COLUMN_ID", "c-LFekrYG0se")
    
    # Test link to add
    TEST_LINK = "https://www.instagram.com/p/DG0RCJAKupnGahHLNM-RsH1HyJM8AntYgIkLxU0/?hl=en"
    
    print(f"Testing Coda connection with the following parameters:")
    print(f"Document ID: {DOC_ID}")
    print(f"Table ID: {TABLE_ID}")
    print(f"Link Column ID: {LINK_COLUMN_ID}")
    print(f"Test Link: {TEST_LINK}")
    
    # Prepare the API request
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # Prepare the data to be sent to Coda
    body = {
        "rows": [
            {
                "cells": [
                    {"column": LINK_COLUMN_ID, "value": TEST_LINK}
                ]
            }
        ]
    }
    
    print("\nSending request to Coda API...")
    try:
        response = requests.post(url, json=body, headers=headers)
        
        # Print the response details
        print(f"\nResponse Status Code: {response.status_code}")
        print(f"Response Body: {response.text}")
        
        if response.status_code == 202:
            print("\n✅ Success! The link was successfully added to the Coda database.")
            print("Check your Coda document to verify the link was added.")
        else:
            print("\n❌ Failed to add the link to the Coda database.")
            print(f"Error: {response.text}")
    
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_coda_connection.py
================================================
import os
import requests
from dotenv import load_dotenv

def test_coda_connection():
    """
    Test the connection to the Coda API using the credentials in the .env file.
    This helps verify that the API key and document/table IDs are correct.
    """
    # Load environment variables
    load_dotenv()
    
    # Get Coda API details
    CODA_API_KEY = os.getenv("CODA_API_KEY", "3e92f721-91d1-485e-aab9-b7d50e4fa4da")
    DOC_ID = os.getenv("CODA_DOC_ID", "dNYzN0H9At4")
    TABLE_ID = os.getenv("CODA_TABLE_ID", "tun7MrAA")
    
    print(f"Testing Coda API connection...")
    
    # Test connection by querying the table metadata
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Check if request was successful
        if response.status_code == 200:
            table_info = response.json()
            print(f"✅ Successfully connected to Coda!")
            print(f"Table name: {table_info.get('name', 'Unknown')}")
            print(f"Table ID: {table_info.get('id', 'Unknown')}")
            return True
        else:
            print(f"❌ Failed to connect to Coda API. Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error connecting to Coda API: {str(e)}")
        return False

if __name__ == "__main__":
    test_coda_connection() 


================================================
FILE: tests/test_coda_direct.py
================================================
#!/usr/bin/env python3

import requests

def main():
    """Test adding a link directly to the Coda database with hardcoded values"""
    
    # Coda API Details - hardcoded for testing
    CODA_API_KEY = "3e92f721-91d1-485e-aab9-b7d50e4fa4da"
    DOC_ID = "NYzN0H9At4"  # Without the 'd' prefix
    TABLE_ID = "grid-Pyccn7MrAA"  # Updated table ID
    
    # Test link to add
    TEST_LINK = "https://www.instagram.com/p/DG0RCJAKupnGahHLNM-RsH1HyJM8AntYgIkLxU0/?hl=en"
    
    print(f"Testing Coda connection with the following parameters:")
    print(f"Document ID: {DOC_ID}")
    print(f"Table ID: {TABLE_ID}")
    print(f"Column Name: Link")
    print(f"Test Link: {TEST_LINK}")
    
    # Prepare the API request
    url = f"https://coda.io/apis/v1/docs/{DOC_ID}/tables/{TABLE_ID}/rows"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # Prepare the data to be sent to Coda using column name instead of ID
    body = {
        "rows": [
            {
                "cells": [
                    {"column": "Link", "value": TEST_LINK}
                ]
            }
        ]
    }
    
    print("\nSending request to Coda API...")
    try:
        response = requests.post(url, json=body, headers=headers)
        
        # Print the response details
        print(f"\nResponse Status Code: {response.status_code}")
        print(f"Response Body: {response.text}")
        
        if response.status_code == 202:
            print("\n✅ Success! The link was successfully added to the Coda database.")
            print("Check your Coda document to verify the link was added.")
        else:
            print("\n❌ Failed to add the link to the Coda database.")
            print(f"Error: {response.text}")
    
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")

if __name__ == "__main__":
    main() 


================================================
FILE: tests/test_tables.py
================================================
#!/usr/bin/env python3

import os
import requests
import json
from dotenv import load_dotenv

def test_connection(doc_id):
    """Test connection to a Coda document"""
    CODA_API_KEY = os.getenv("CODA_API_KEY", "3e92f721-91d1-485e-aab9-b7d50e4fa4da")
    
    print(f"Testing connection to Coda document {doc_id}...")
    
    # Test connection by getting the list of tables in the document
    url = f"https://coda.io/apis/v1/docs/{doc_id}/tables"
    headers = {
        "Authorization": f"Bearer {CODA_API_KEY}",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Check if request was successful
        if response.status_code == 200:
            tables = response.json()
            print(f"✅ Successfully connected to Coda document!")
            print(f"Document contains {len(tables.get('items', []))} tables:")
            
            for table in tables.get('items', []):
                print(f"  - Table: '{table.get('name')}' (ID: {table.get('id')})")
                
                # For each table, get the columns
                columns_url = f"https://coda.io/apis/v1/docs/{doc_id}/tables/{table.get('id')}/columns"
                columns_response = requests.get(columns_url, headers=headers)
                
                if columns_response.status_code == 200:
                    columns = columns_response.json()
                    print(f"    Columns: {len(columns.get('items', []))}")
                    for column in columns.get('items', []):
                        print(f"      * {column.get('name')} (ID: {column.get('id')})")
                else:
                    print(f"    ❌ Failed to get columns. Status code: {columns_response.status_code}")
            
            return True
        else:
            print(f"❌ Failed to connect to Coda API. Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error connecting to Coda API: {str(e)}")
        return False

def main():
    """Try different document ID formats"""
    # Load environment variables
    load_dotenv()
    
    # Try different formats of the document ID
    test_doc_ids = [
        "NYzN0H9At4",     # Original format from data.md
        "dNYzN0H9At4",    # Format with 'd' prefix
        "_dNYzN0H9At4"    # Format with '_d' prefix
    ]
    
    for doc_id in test_doc_ids:
        print("\n" + "="*50)
        success = test_connection(doc_id)
        if success:
            print(f"\nDocument ID {doc_id} is working! Update your .env file with this value.")
            break
    else:
        print("\nNone of the document ID formats worked. Please check your Coda API key and document ID.")

if __name__ == "__main__":
    main() 

