# Kickstart Fastify
Fastify ကိုအသုံးပြုပြီး project အသစ်တစ်ခု‌စရေးဖို့ ရှိနေတယ်ဆိုရင် ဒီ repo က မင်းအတွက်အသုံးဝင်မယ်လိုမျှော်လင့်ရပါတယ်။ ဒီ repo ထဲမှာ fasitfy service တစ်ခုရေးသားဖို့ အခြေခံကျတဲ့လိုအပ်ချက်တွေကို ကြိုတင်ထည့်သွင်းပြီးတည်ဆောက်ပေးထားပါတယ်။

## Get started
### 1. Clone this repo
``` console
 git clone https://github.com/KaungWai/kickstart-fastify.git
```
### 2. Move to project directory
```
cd kickstart-fastify
```
### 3. Install dependencies
```
npm install
```
### 4. Setup a database of your choice
ဒီ project မှာ ORM library အနေနဲ့ prisma ကို အသုံးပြုထားပါတယ်။ prisma ကထင်ရှားတဲ့ RDBMS တွေဖြစ်တဲ့ mysql, sqlite, postgresql, sqlserver တို့ကို support ပေးတဲ့အတွက် အဆင်ပြေရာတစ်ခုခုနဲ့ database တစ်ခုကိုတည်ဆောက်လိုက်ပါ။ 

### 5. Generate JWT secrets
ဒီ project မှာ authentication အတွက် JWT ကိုအသုံးပြုထားတဲ့အတွက် private key နဲ့ public key ကို generate လုပ်ပေးဖို့လိုပါတယ်။ သင်က Mac သို့မဟုတ် Linux အသုံးပြုသူဆိုရင် စက်ထဲမှာ openssl ဆိုတဲ့ software က install လုပ်ပြီးသားဖြစ်ဖို့များပါတယ်။ မရှိသေးဘူးရင်တော့ openssl ကို အရင်သွင်းလိုက်ပါ။ generate လုပ်တဲ့ script က ဒီ repo ထဲမှာ ကြို‌ရေးပေးထားပါတယ်။ 
```
bash ./scripts/keygen.sh
```
ဒါဆိုရင် `./keys` folder ထဲမှာ private key နဲ့ public key ရပါပြီ။
### 6. Create .env file
.env.example ဖိုင်ကို နမူနာယူပြီး .env ကို create လုပ်ပေးပါ။
``` env
# fastify server
HOST=localhost
PORT=3333

# environmet (development | production)
ENVIRONMENT=development

# allowed origins (use comma separation for muliple origins)
ALLOWED_ORIGINS=localhost:3333

# connection stirng
DATABASE_URL="mysql://username:password@localhost:3307/kickstart_fastify"

# absolute paths to jwt keys
JWT_PRIVATE_KEY_PATH="/absolute-path-to/private"
JWT_PUBLIC_KEY_PATH="/absolute-path-to/public.pub"
```
`DATABASE_URL` ကို No.4 မှာ တည်ဆောက်ခဲ့တဲ့ database info အတိုင်းအစားထိုးပေးပါ။ `JWT_PRIVATE_KEY_PATH` နဲ့ `JWT_PUBLIC_KEY_PATH` ကို No.5 မှာ generate လုပ်ခဲ့တဲ့ key ‌တွေရဲ့ absolute path တွေနဲ့ အစားထိုးပေးပါ။

# Migrate
လက်ရှိ repo ထဲမှာ `prisma` ဆိုတဲ့ folder ရှိပါတယ်။ အဲထဲမှာမှ `schema.prisma` က ကျွန်တော်တို့ project ထဲမှာ ဘယ်လို databse table တွေ ပါဝင်မယ်ဆိုတာကို ‌ရေးထားရမှာပါ။ ခုချိန်မှာ နမူနာ‌အနေနဲ့ User နဲ့ Product ဆိုတဲ့ table နှစ်ခုရှိနေမှာပါ။ေ
