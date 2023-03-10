# Kickstart Fastify
Fastify ကိုအသုံးပြုပြီး REST API အသစ်တစ်ခု‌စရေးဖို့ ရှိနေတယ်ဆိုရင် ဒီ repo က အသုံးဝင်မယ်လိုမျှော်လင့်ရပါတယ်။ ဒီ repo ထဲမှာ fasitfy service တစ်ခုရေးသားဖို့ အခြေခံကျတဲ့လိုအပ်ချက်တွေကို ကြိုတင်ထည့်သွင်းပြီးတည်ဆောက်ပေးထားပါတယ်။

## Get started
### 1. Clone this repo
``` console
 git clone https://github.com/KaungWai/kickstart-fastify.git
```
### 2. Move to project directory
``` console
cd kickstart-fastify
```
### 3. Install dependencies
``` console
npm install
```
### 4. Setup a database of your choice
ORM library အနေနဲ့ prisma ကို အသုံးပြုထားပါတယ်။ prisma ကထင်ရှားတဲ့ RDBMS တွေဖြစ်တဲ့ mysql, sqlite, postgresql, sqlserver တို့ကို support ပေးတဲ့အတွက် အဆင်ပြေရာတစ်ခုခုနဲ့ database တစ်ခုကိုတည်ဆောက်လိုက်ပါ။ 

### 5. Generate JWT secrets
authentication အတွက် JWT ကိုအသုံးပြုထားတဲ့အတွက် private key နဲ့ public key ကို generate လုပ်ပေးဖို့လိုပါတယ်။ Mac သို့မဟုတ် Linux အသုံးပြုသူဆိုရင် စက်ထဲမှာ openssl ဆိုတဲ့ software က install လုပ်ပြီးသားဖြစ်ဖို့များပါတယ်။ မရှိသေးဘူးရင်တော့ openssl ကို အရင်သွင်းလိုက်ပါ။ generate လုပ်တဲ့ script က ဒီ repo ထဲမှာ ကြို‌ရေးပေးထားပါတယ်။ 
``` console
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

### 7. Migrate
လက်ရှိ source ထဲမှာ `prisma` ဆိုတဲ့ folder ရှိပါတယ်။ အဲထဲမှာမှ `schema.prisma` က ကျွန်တော်တို့ project ထဲမှာ ဘယ်လို databse table တွေ ပါဝင်မယ်ဆိုတာကို ‌ရေးထားရမှာပါ။ ခုချိန်မှာ နမူနာ‌အနေနဲ့ User နဲ့ Product ဆိုတဲ့ table နှစ်ခုရှိနေလိမ့်မယ်။
```
model User {
  userId     String     @id @db.VarChar(12)
  userName   String     @db.VarChar(100)
  salt       String     @db.VarChar(24)
  hash       String     @db.VarChar(60)
  permission Permission
  createdAt  DateTime   @default(now()) @db.Timestamp()
  updatedAt  DateTime   @default(now()) @db.Timestamp()
}

model Product {
  productId          String   @id @db.VarChar(12)
  productName        String   @db.VarChar(100)
  productDescription String   @db.VarChar(500)
  productPrice       Int      @db.Int
  createdAt          DateTime @default(now()) @db.Timestamp()
  updatedAt          DateTime @default(now()) @db.Timestamp()
}
```
ဒါက definition အနေနဲ့ပဲ ရှိနေသေးတာမို့လို့ database မှာ သွားပြီး table တွေ မဖန်တီးရသေးပါဘူး။ တကယ်ဖန်တီးဖို့အတွက် ‌အောက်က command ကို run ပေးဖို့လိုပါတယ်
```
npx prisma migrate dev
```
run ပြီးပြီဆိုရင်တော့ database table တွေက schema.prisma မှာ declare လုပ်ခဲ့တဲ့အတိုင်း တည်ဆောက်ပြီးသားဖြစ်သွားမှာဖြစ်ပါတယ်။ နောက်ပိုင်းတစ်ခုခုပြုပြင်ချင်တာရှိရင်လဲ schema.prisma ကို ပြင်ပြီး migrate ပြန်လုပ်ပေးရုံပါပဲ။ sql တွေ‌ရေးနေစရာမလိုတဲ့ အတွက် အတော်လေးအဆင်ပြေစေပါတယ်။

### 8. Seeding
လက်ရှိ source ထဲမှာ နမူနာအနေနဲ့ ရေးထားတဲ့ API တစ်ချို့ရှိပါတယ်။ ဒီ API တွေအတွက် dummy data တွေကို seeding လုပ်ပေးထားတဲ့အတွက် အောက်က command ကို run ပေးပါ
```
npx prisma db seed
```

### 9. Ready
seeding အထိပြီးပြီဆိုရင်တော့ တကယ် run ကြည့်ဖို့ အဆင်သင့်ဖြစ်နေပါပြီ။ 
```
npm run dev
```
![image](https://user-images.githubusercontent.com/30652148/208295042-3f1bc66d-dfe9-491c-a6fd-2364fb14dc97.png)
ဘာပြဿနာမှမရှိခဲ့ဘူးဆိုရင်တော့ အပေါ်အတိုင်း localhost:3333 မှာ up & running ဖြစ်သွားမှာပါ။ 
<br>
`http://localhost:3333/docs`ကိုဝင်ကြည့်မယ်ဆိုရင် swagger documentation ကိုပါမြင်ရမှာပါ။
<br><br>
![image](https://user-images.githubusercontent.com/30652148/217378570-b7edfd58-528d-491f-914f-4445e195b0fb.png)
