import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Test 1": "Test 1",
      "Test 2": "Test 2",
      "Test 3": "Test 3",
      "Layout & Style": "Layout & Style",
      "Connect API": "Connect API",
      "Form & Table": "Form & Table",
      "EN": "EN",
      "TH": "TH",
      "en": "EN",
      "th": "TH",
      "Move shape":"Move shape",
      "Move Position":"Move Position",
      "IndexPage":"HomePage",
      'Prefix':'Prefix',
      'Mr.':'Mr.',
      'Mrs.' : 'Mrs.',
      'Miss' : 'Miss',
      'Firstname':'Firstname',
      'Surname':'Surname',
      'Birthday': 'Birthday',
      'Nationality':'Nationality',
      'ID Card':'ID Card',
      'Gender':'Gender',
      'Male':'Male',
      'Female':'Female',
      'Prefer not to say':'Prefer not to say',
      'Phone number':'Phone number',
      'Phone Number':'Phone Number',
      'Passport':'Passport',
      'Expect salary': 'Expect salary',
      "Clear":"Clear",
      "Submit":"Submit",
      'Name':'Name',
      'Manage':'Manage',
      'Delete':'Delete'
    }
  },
  th: {
    translation: {
      "Test 1": "แบบทดสอบที่ 1",
      "Test 2": "แบบทดสอบที่ 2",
      "Test 3": "แบบทดสอบที่ 3",
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Connect API": "การเชื่อมต่อ API",
      "Form & Table": "การจัดการหน้าฟอร์ม",
      "EN": "อังกฤษ",
      "TH": "ไทย",
      "en": "อังกฤษ",
      "th": "ไทย",
      "Move shape":"เลื่อนรูปแบบ",
      "Move Position":"เปลี่ยนตำแหน่ง",
      "IndexPage":"หน้าหลัก",
      'Prefix':'คำนำหน้า',
      'Mr.': 'นาย',
      'Mrs.': 'นาง',
      'Miss' : 'นางสาว',
      'Firstname': 'ชื่อจริง',
      'Surname':'นามสกุล',
      'Birthday': 'วันเกิด',
      'Nationality':'สัญชาติ',
      'ID Card':'เลขบัตรประชาชน',
      'Gender':'เพศ',
      'Male':'ชาย',
      'Female':'หญิง',
      'Prefer not to say':'ไม่ระบุ',
      'Phone number':'หมายเลขโทรศัพท์มือถือ',
      'Phone Number':'หมายเลขโทรศัพท์มือถือ',
      'Passport':'หนังสือเดินทาง',
      'Expect salary': 'เงินเดือนที่คาดหวัง',
      "Clear":"ล้างข้อมูล",
      "Submit":"ส่งข้อมูล",
      'Name':'ชื่อ',
      'Manage':'จัดการ',
      'Delete':'ลบ'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;