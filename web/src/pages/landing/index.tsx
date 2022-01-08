import {TextField} from "common/TextField";
import {Typography} from "common/Typography";
import React from "react";
import Trip from "./components/Trip";
import {Container} from "./styled";

const mockTrip = {
  title:
    "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
  eid: "4",
  url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
  description:
    "วางแผนเที่ยวไต้หวันปี 2020 กัน! ไปเที่ยวไต้หวันจุใจ ไม่ต้องง้อวีซ่า!\n\nทุกวันนี้แทบไม่มีใครไม่รู้จักชานมไข่มุก เครื่องดื่มขึ้นชื่อที่ฮิตกันไปทั่วบ้านทั่วเมือง หลังจากที่ได้ลองกินที่นี่แล้ว เราก็เลยอยากลองที่ต้นตำรับประเทศเขาบ้าง ทริปนี้จะพาไปกินชาไข่มุกที่ไต้หวัน พาไปเที่ยวไต้หวันทั้งในและนอกเมืองใหญ่ แล้วคุณจะรู้ว่า ประเทศนี้ไม่ได้มีดีแค่ชาไข่มุก! และที่สำคัญตอนนี้เขาใจดี ไต้หวันฟรีวีซ่า ต่อเวลาแห่งความสุข แล้วจะรอช้าอยู่ไย วางแพลนเที่ยวไต้หวันกัน!",
  photos: [
    "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg",
  ],
  tags: [
    "จุดถ่ายรูป",
    "หมู่บ้าน",
    "ภูเขา",
    "ธรรมชาติ",
    "ถ่ายรูปสวย",
    "บ้านอีต่องเหมืองปิล็อก",
    "กาญจนบุรี",
  ],
};
const Landing = () => {
  return (
    <Container>
      <Typography variant="h1" css={{color: "$primary"}}>
        เที่ยวไหนดี
      </Typography>
      <TextField placeholder="หาที่เที่ยวแล้วไปกัน..." />
      <Trip {...mockTrip} />
    </Container>
  );
};

export default Landing;
