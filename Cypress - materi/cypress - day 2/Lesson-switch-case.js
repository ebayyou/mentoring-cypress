/*
  buat lah program condition untuk mengucapkan salam dengan banyak bahasa indonesia, english, korea, china, jepang
  
  - buatlah sebuah variable yang tidak perlu di initialisasi ulang bernama language dan isi nilai INDONESIA | ENGLISH | KOREA | CHINA | JAPAN

  > condition switch case
  case 1 language 'ENGLISH', print console 'Yours sincerely'
  case 2 language 'KOREA', print console '진심으로'
  case 3 language 'CHINA', print console '敬具'
  case 4 language 'JAPAN', print console '谨上'
  default language 'INDONESIA', print console 'Salam Hormat'
*/

const language = "ENGLISH";

switch (language) {
  case "ENGLISH":
    console.log("Yours sincerely");
    break;
  case "KOREA":
    console.log("진심으로");
    break;
  case "CHINA":
    console.log("敬具");
    break;
  case "JAPAN":
    console.log("谨上");
    break;
  default:
    console.log("Salam Hormat");
    break;
}
